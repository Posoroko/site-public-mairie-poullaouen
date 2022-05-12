<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>
        

    </main>
</template>

<script setup>
import { ref } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import PathBar from '@/components/site structure/PathBar'
import { headerImages } from '@/assets/images/imageUrls'


const pageTitle = ref('Poullaouen')
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])




</script>

<style scoped>
main{
    height: 100vh;
}





</style>