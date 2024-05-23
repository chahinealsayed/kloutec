<template>
    <section class="jobs">
        <div class="container">
            <div class="text-center simle">
                <span class="text-primary love fw-bold">JOBS OFFERS</span>
            </div>
            <div>
                <h1 class="text-primary text-center fw-bold">See our current open positions</h1>
            </div>
            <div class="row">
                <div class="col-md-4" v-for="(content, contentIndex) in cards" :key="content.id" data-aos="fade-up"
                    :data-aos-duration="500" :data-aos-delay="0 + contentIndex * 200">
                    <div class="jobs-card d-flex flex-column justify-content-around">
                        <div class="title">
                            <h4 class="text-primary">{{ content.local.title }}</h4>
                        </div>
                        <div class="items">
                            <div class="item">
                                <span>Experience:</span>
                                <span>{{ content.local.attrs.experience }}</span>
                            </div>
                            <div class="item">
                                <span>Job Type:</span>
                                <span>{{ content.local.attrs.job }}</span>
                            </div>
                            <div class="item">
                                <span>Published at:</span>
                                <span>{{ content.local.attrs.published }}</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <a :href="'default/content?id=' + content.id">
                                <button class="btn-gradient-2">Apply Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="view">
                <a>
                    <button @click="loadMore" :disabled="!hasMoreItems" class="btn-gradient-2 text-secondary">View
                        More</button>
                </a>
            </div>
        </div>
    </section>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import { api } from "@/lib/api";
import { defineProps, ref, computed } from "vue";

type Props = {
    length: number;
    totalPages: number;
};

const { length, totalPages } = defineProps<Props>();
const cards = ref([]);
const currentPage = ref(1);
const hasMoreItems = ref(true);
let lastData = null;

function loadBlogCards() {
    if (!hasMoreItems.value) {
        return;
    }
    const computedDelay = computed(() => (contentIndex) => {
        return contentIndex * 200;
    });

    api()
        .get(`/careers?expand=local&page=${currentPage.value}&per-page=3`)
        .then(({ data }: any) => {
            // Check if there are new items in the response
            if (
                data.length > 0 &&
                JSON.stringify(data) !== JSON.stringify(lastData)
            ) {
                cards.value = [...cards.value, ...data];
                currentPage.value++;
                lastData = data;
            } else {
                hasMoreItems.value = false;
            }
        });
}

function loadMore() {
    loadBlogCards();
}

function isOdd(index) {
    return index % 2 !== 0;
}

onMounted(() => {
    loadBlogCards();
});
</script>