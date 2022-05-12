<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main class="flex column alignItemsCenter">
        <EnUnClic />
        <AgendaHome />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import EnUnClic from '@/components/site structure/EnUnClic';
import AgendaHome from '@/components/site structure/AgendaHome'
import PathBar from '@/components/site structure/PathBar'
import { headerImages } from '@/assets/images/imageUrls'


const pageTitle = ref('Bienve à Poullaouën')
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])




</script>

<style scoped>






</style>