<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>
        <PhotoAndTextSection :styles="stylesSectionRole" :content="contentSectionRole" />
    </main>
</template>

<script setup>
import { ref } from 'vue';
import PhotoAndTextSection from '@/components/site structure/PhotoAndTextSection'
import PageHeader from '@/components/site structure/PageHeader'



const pageTitle = ref("Centre communal d'action sociale")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])
const stylesSectionRole = {
    titleColor: "var(--darkblue)",
    titleBackgroundColor: 'white',
    textColor: 'white',
    backgroundColor: "var(--darkblue)",
    textPosition: '1', //set the oreder property of the flex element
    imagePosition: '2',
    footColor: 'var(--brown)'
}
const contentSectionRole = {
    title: "Rôle du CCAS",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur illum dignissimos ea eaque. Ea alias veritatis adipisci labore perferendis natus excepturi quam non voluptate explicabo reiciendis nesciunt, cupiditate debitis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur illum dignissimos ea eaque. Ea alias veritatis adipisci labore perferendis natus excepturi quam non voluptate explicabo reiciendis nesciunt, cupiditate debitis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse consectetur ?"
}


</script>

<style scoped>

/* @media (min-width: 749px){
    .mayorSectionContentBox > .innerBox{
        flex-direction: row;
        justify-content: space-between;
    }
    .leftBox{
        width: 42%;
    }
    .rightBox{
        width: 52%;
    }
} */

</style>