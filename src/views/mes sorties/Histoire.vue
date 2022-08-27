<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

        <LocalContentSectionList :items="sectionsHistoire" />

        <SectionTitleBox :title="'La mine'" color="var(--darkblue)" />



        <LocalContentSectionList :items="sectionsLaMine" />

        <div class="bibliography">
            
            <p v-for="para in conclusion.text" :key="para">{{para}} <br><br> </p>
            <p>{{conclusion.website}}</p>
            <p>{{conclusion.email}}</p>
            <p>{{conclusion.telPoullaouen}}</p>
            <p>{{conclusion.telLocmaria}}</p>
        </div>

    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import LocalContentSectionList from '@/components/site structure/sections/LocalContentSectionList'
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import styleSections from '@/composables/sectionColorsOrder'
import directusRefs from '@/directus/directusRefs'
import histoire from '@/assets/content/mes sorties/histoire.js'



const error = ref(null)

const pageTitle = ref(histoire.title)
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])


onMounted(() => {
    styleSections()
})

const sectionsHistoire = ref(histoire.sectionsHistoire)
const sectionsLaMine = ref(histoire.sectionsLaMine)
const conclusion = ref(histoire.conclusion)


</script>

<style scoped>



</style>