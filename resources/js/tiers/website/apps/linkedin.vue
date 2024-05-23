<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <icon icon="line-md:linkedin" color="white" style="font-size: 22px;transition: all 0.5s;" class="icon d-flex" />
</template>

<style lang="scss">
#linkedin {
    transition: all 1s;

    svg {
        &:hover {
            color: #0077B5 !important;
            transform: scale(1.3) !important;
        }
    }
}
</style>