<template>
    <section class="pro">
        <div class="container">
            <div class="row">
                <div class="col-md-6" v-for="(content, contentIndex) in cards" :key="content.id" data-aos="fade-up"
                    :data-aos-duration="500" :data-aos-delay="0 + contentIndex * 200">
                    <div class="img"
                        :class="{ 'd-flex justify-content-start': !isOdd(contentIndex), 'd-flex justify-content-end': isOdd(contentIndex) }">
                        <img :src="content.attrs.image.url" alt="">
                        <div class="overlay" :style="!isOdd(contentIndex) ? 'left: 0;' : 'right: 0; left: inherit;'">
                            <div class="title">
                                <h2>{{ content.local.title }}</h2>
                            </div>
                            <div class="overlay-items">
                                <div class="item">
                                    <template v-for="(item, index) in content.attrs.tags" :key="index">
                                        <p v-if="index <= 1">{{ item.name }}</p>
                                    </template>
                                </div>
                                <div class="item">
                                    <template v-for="(item, index) in content.attrs.tags" :key="index">
                                        <p v-if="index > 1">{{ item.name }}</p>
                                    </template>
                                </div>
                            </div>
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
        .get(`/projects?expand=local&page=${currentPage.value}&per-page=4`)
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