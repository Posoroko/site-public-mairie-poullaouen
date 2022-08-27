<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

        <p class="mainWidth marginAuto marginTop50">
            La <b>commune de Poullaouen</b> dispose d’un <b>Centre Communal d’Action Sociale</b>  (CCAS), qui dépend de la Mairie.
        </p>

        <section class="flex column alignItemsCenter">
            <SectionTitleBox title="Rôle du CCAS" />
            <p class="mainWidth marginTop30">
                    Le <strong>CCAS assure une mission d’aide à la population</strong>. Il apporte une aide pour les demandes d’APA, d’aide sociale 
                    (service d’aide ménagère et prise en charge des frais d’hébergement en maison de retraite ou foyer logement), 
                    et les demandes d’aides attribuées par la Maison Départementale des Personnes Handicapées.

            </p>
        </section>

        <PhotoAndTextSection :styles="stylesSectionActivites" :content="contentSectionActivites" />

        <p class="mainWidth marginAuto marginTop50">
            Les formulaires sont disponibles en Mairie. Le CCAS est également à la disposition de la population pour toutes demandes de renseignements en
            matière sociale.
        </p>

        <section class="flex column alignItemsCenter">
            <SectionTitleBox title="Les organismes partenaires" />
            <p class="mainWidth marginTop30">
                    Pour obtenir des informations concernant ces aides, vous pouvez contacter <a class="externalLink" href="https://lannuaire.service-public.fr/bretagne/finistere/msap-29024-01">la Maison des Services au Public à Poher Communauté</a> .
            </p>
        </section>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import PhotoAndTextSection from '@/components/site structure/sections/PhotoAndTextSection'
import SectionFootBehind from '@/components/site structure/sections/SectionFootBehind'
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'



const pageTitle = ref("Centre communal d'action sociale")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])
const stylesSectionActivites = {
    titleColor: "var(--darkblue)",
    titleBackgroundColor: 'white',
    textColor: 'white',
    backgroundColor: "var(--darkblue)",
    textPosition: '1', //set the oreder property of the flex element
    imagePosition: '2',
    footColor: 'var(--brown)'
}
const contentSectionActivites = {
    title: "Les activités",
    text:   "Chaque année lors du dernier samedi de septembre, le CCAS invite à un repas les personnes âgées d’au moins 70 ans et domiciliées sur la commune. Ces personnes peuvent être accompagnées d’une personne de leur choix qui paiera le repas si elle est âgée de moins de 70 ans. <br> Le CCAS assure également chaque année au mois de décembre une distribution de colis de noël aux personnes âgées d’au moins 80 ans et n’ayant pas pu assister au repas. <br> Par ailleurs, la municipalité organise deux activités à l’attention des personnes âgées : des cours de gym douce et de chant."
    
}


</script>

<style scoped>


</style>