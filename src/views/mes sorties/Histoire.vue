<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>

        <LocalContentSectionList :items="sectionsHistoire" />

        <SectionTitleBox :title="'La mine'" color="var(--darkblue)" />



        <LocalContentSectionList :items="sectionsLaMine" />

        <section class="width100 conclusionBigBox">
            <div class="conclusionBox mainWidth marginAuto">
                <div class="conclusion">
                    <p> {{conclusion.text}}</p>
                </div>
                <ul class="infoList">
                    <li>{{conclusion.asam}}</li>
                    <li>{{conclusion.website}}</li>
                    <li>{{conclusion.email}}</li>
                    <li>{{conclusion.telPoullaouen}}</li>
                    <li>{{conclusion.telLocmaria}}</li>
                </ul>
                <div class="bibliographie marginTop20">
                    <h3 class="">Bibliographie</h3>
                    <p v-for="para in conclusion.bibliographie" :key="para">{{para}} <br><br> </p>
                </div>
            </div>
        </section>

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
.conclusionBigBox {
    background-color: var(--brown);
    padding: 20px 0;
}
.conclusionBox {
    background-color: white;
    padding: 35px;
    border-radius: 10px;
}
.conclusion p {
    background-color: white;
    font-size: 20px;
    color: var(--darkblue);
    font-weight: 600;
}
.infoList {
    margin-left: 100px;
    margin-top: 20px;
}
.infoList li {
    font-size: 16px;
    line-height: 30px;
    list-style: disc;
}

.bibliographie h3 {
    color: var(--darkblue);
    margin: 20px 0;
    border-bottom: 1px solid var(--darkblue);
}
.bibliographie p {
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
}
</style>