<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main class="mainPatrimoine">

        <SectionTitleBox title="Les églises" color="var(--darkblue)" />
        <DefaultSectionList :items="eglises" />
        
        <SectionTitleBox title="Les chapelles" color="var(--darkblue)" />
        <DefaultSectionList :items="chapelles" />
                
        <SectionTitleBox title="Les calvaires" color="var(--darkblue)" />
        <DefaultSectionList :items="calvaires" />
        
        <SectionTitleBox title="Les fontaines" color="var(--darkblue)" />
        <DefaultSectionList :items="fontaines" />
        
        <SectionTitleBox title="Les ponts" color="var(--darkblue)" />
        <DefaultSectionList :items="ponts" />
        
        <SectionTitleBox title="Les fours" color="var(--darkblue)" />
        <DefaultSectionList :items="fours" />

        <SectionTitleBox title="Les manoirs" color="var(--darkblue)" />
        <section class="sectionManoirs width100 marginTop20" v-if="manoires[0]">
            <div class="bandeauManoirs mainWidth marginAuto flex spaceBetween">
                <p class="manoireParagraph">
                    <b class="manoireTitle">{{ manoires[0].subTitle }}</b> <br> <br>
                    {{ manoires[0].text }} <br> <br>
                    <b class="manoireTitle">{{ manoires[1].subTitle }}</b> <br> <br>
                    {{ manoires[1].text }} <br>
                </p>
                <p class="manoireParagraph">
                    <b class="manoireTitle">{{ manoires[2].subTitle }}</b> <br>  <br>
                    {{ manoires[2].text }} <br>
                </p>
            </div>
        </section>
    
        <DefaultSectionList :items="divers" />

    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import DefaultSectionList from '@/components/site structure/sections/DefaultSectionList'
import { getCollection } from '@/directus/directusLibrary'
import styleSections from '@/composables/sectionColorsOrder'
import directusRefs from '@/directus/directusRefs'
import SectionTitleBox from '@//components/site structure/SectionTitleBox'

const error = ref(null)


const pageTitle = ref("Patrimoine")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

const eglises = ref([])
const chapelles = ref([])
const fontaines = ref([])
const ponts = ref([])
const fours = ref([])
const manoires = ref([])
const calvaires = ref([])
const divers = ref([])



const items = ref(null)


getCollection(directusRefs.collections.patrimoine, -1).then(res => {
    items.value = res.data
    sortItems(items.value)
}).catch(err => {
    error.value = err.message
})

const sortItems = (items) => {

    for(let i = 0; i < items.length; i++){
        switch (items[i].type){

            case 'eglise': 
            eglises.value.push(items[i])
            break
            case 'chapelle': 
            chapelles.value.push(items[i])
            break
            case 'fontaine': 
            fontaines.value.push(items[i])
            break
            case 'pont': 
            ponts.value.push(items[i])
            break
            case 'four': 
            fours.value.push(items[i])
            break
            case 'manoire': 
            manoires.value.push(items[i])
            break
            case 'calvaire': 
            calvaires.value.push(items[i])
            break
            case 'diver': 
            divers.value.push(items[i])
            break

        }
    }
}


onMounted(() => {
    styleSections()
})

//To wait for child components DOM nodes to be accessible. 

const waitForDom = () => {
    setTimeout(() => {
        if (document.querySelectorAll('.defaultSectionBandeau'.length > 0)) {
            styleSections()
        } else {
            waitForDom()
        }
    }, 500)
}



</script>

<style >


</style>