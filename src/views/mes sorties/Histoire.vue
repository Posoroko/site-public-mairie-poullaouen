<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

        <DefaultSectionList :items="items" />

    </main>
</template>

<script setup>
import { ref } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import DefaultSectionList from '@/components/site structure/sections/DefaultSectionList'
import { getCollection } from '@/directus/directusLibrary'
import directusRefs from '@/directus/directusRefs'



const error = ref(null)

const pageTitle = ref("Histoire")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])


const items = ref(null)


getCollection(directusRefs.collections.histoire, -1).then(res => {
    items.value = res.data
    console.log(items.value)
}).catch(err => {
    error.value = err.message
})

</script>

<style scoped>



</style>