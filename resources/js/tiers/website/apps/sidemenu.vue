<script setup lang="ts">
import { language, translate } from '@/lib/metadata';
import Offcanvas from '@/modules/bootstrap/components/Offcanvas.vue';
import ToggleButton from '@/modules/bootstrap/components/ToggleButton.vue';
import { defineProps, ref } from 'vue';
import { Icon } from '@iconify/vue';

interface Item {
    label: string,
    url: string,
    options: {
        class?: string;
    };
}

type Props = {
    list: Item[]
    externals: Item[],
    // donationLink: string,
};
const handleLinkClick = () => {
    offcanvasElt.value.close();
}

const isCurrentPage = (url) => {
    return window.location.pathname === url;
}

const { list, externals } = defineProps<Props>();
const offcanvasElt = ref<any>(null)
const scrollTo = (id) => {
    const section = document.getElementById(id);
    console.log('id', id);

    console.log('target', section);

    offcanvasElt.value.close()
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        })
    }
}

// const offcanvas = ref<any>(null)
const canvasEl = (el: any, element: any) => {
    element(el)
    offcanvasElt.value = el;
}

</script>
<template>
    <ToggleButton class="btn-side">
        <web-icon path="mdiMenu" id="menu-icon" class="menu-hamburger"
            style="height: 100%;width: 30px; color: #3e3e3e;"></web-icon>
        <template #content="{ element, closed }">
            <Offcanvas backdrop :ref="(el) => { canvasEl(el, element) }" :placement="'end'" @closed="closed">
                <ul class="nav-menu">
                    <li v-for="(item, i) in list" :key="i">
                        <a :href="item.url" :class="{ 'active': isCurrentPage(item.url) }" @click="handleLinkClick">{{
                            item.label }}</a>
                    </li>
                    <div class="start-proj">
                        <a href="/Talk">
                            <button class="btn-gradient-2">Start&nbsp;Project</button>
                        </a>
                    </div>
                    <div class="d-flex gap-3">
                        <a target="_blank" :href="externals[0].url">
                            <icon icon="line-md:facebook" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[1].url">
                            <icon icon="line-md:linkedin" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[2].url">
                            <icon icon="line-md:twitter-twotone" color="#2c3e50" style="font-size: 25px;"
                                class="icon d-flex" />
                        </a>
                        <a target="_blank" :href="externals[3].url">
                            <icon icon="line-md:instagram" color="#2c3e50" style="font-size: 25px;" class="icon d-flex" />
                        </a>
                    </div>
                    <div class="code-rights">
                        <p class="text-primary rights pb-4">&copy;All rights reserved Kloutec 2023</p>
                        <a href="https://codendot.com/">Powered by<b> Codendot</b></a>
                    </div>
                </ul>
            </Offcanvas>
        </template>
    </ToggleButton>
</template>

<style lang="scss">
.active {
    color: #5cd180;
}

.start-proj {
    a {
        text-decoration: none;

        button {
            background: #5cd180;
            padding: 8px 40px;
            font-weight: 400;
            color: white;

            &.btn-gradient-2 {
                background: linear-gradient(#5cd180, #5cd180) padding-box,
                    linear-gradient(to right, #4fff89, #e7ffeb) border-box;
                border-radius: 50em;
                border: 4px solid transparent;
                transition: color 1s;

                &:hover {
                    animation: fillBackground 3s linear;
                    background: linear-gradient(#2c3e50, #2c3e50) padding-box,
                        linear-gradient(to right, #4fff89, #e7ffeb) border-box;
                    color: #5cd180;
                }
            }

            @keyframes fillBackground {
                0% {
                    background-size: 0% 100%;
                }

                100% {
                    background-size: 100% 100%;
                }
            }
        }
    }
}

.code-rights {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
    }
}
</style>