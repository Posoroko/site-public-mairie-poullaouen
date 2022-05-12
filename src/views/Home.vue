<template>
    <main>
        <PageHeader :image="pageHeaderImage" />

    </main>
</template>

<script setup>
import PageHeader from '@/components/PageHeader'
import { headerImages } from '@/assets/images/imageUrls'
const props = defineProps(['image'])





</script>

<style lang="sass" scoped>






</style>