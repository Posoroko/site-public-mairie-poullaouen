<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>
        <SectionTitleBox title="Les églises" color="var(--darkblue)" />
        <DefaultSectionList :items="eglises"/>

    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import DefaultSectionList from '@/components/site structure/sections/DefaultSectionList'
import { getCollection } from '@/directus/directusLibrary'
import directusRefs from '@/directus/directusRefs'
import SectionTitleBox from '@//components/site structure/SectionTitleBox'

const error = ref(null)


const pageTitle = ref("Les chemins de randonnée")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

const items = ref(null)


getCollection(directusRefs.collections.patrimoine, -1).then(res => {
    items.value = res.data
    sortItems(items.value)
}).catch(err => {
    error.value = err.message
})




</script>

<style scoped>



</style>