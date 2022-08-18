<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

        <DefaultSectionList :items="items" />

    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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

//applying color styles to sections
let sections = null

const styleSections = () => {
    sections = document.querySelectorAll('.defaultSectionBandeau')
    
    for(let i = 0; i <= sections.length - 1; i = i + 2) {
        sections[i].firstElementChild.style.color = "var(--darkblue)"
    }

    //set blue background and light text
    for(let i = 1; i <= sections.length - 1; i = i + 4) {
        sections[i].style.backgroundColor = 'var(--darkblue)'
        sections[i].firstElementChild.style.color = "var(--lighttext)"
    }

    //set brown background, light text and light feet
    for(let i = 3; i <= sections.length -1; i = i + 4) {
        sections[i].style.backgroundColor = 'var(--brown)'
        sections[i].firstElementChild.style.color = "var(--lighttext)"
        sections[i].firstElementChild.querySelector('.defaultSectionBox2')
        .firstElementChild.firstElementChild.firstElementChild.querySelector('.leftFoot').style.fill = "white";
        sections[i].firstElementChild.querySelector('.defaultSectionBox2')
        .firstElementChild.firstElementChild.firstElementChild.querySelector('.rightFoot').style.fill = "white";
    }
}

onMounted(() => {
    waitForDom()

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