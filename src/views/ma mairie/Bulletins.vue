<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import Pieds from '@/components/site structure/Pieds'
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'

const pageTitle = ref("Les bulletins municipaux")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

</script>

<style scoped>


</style>