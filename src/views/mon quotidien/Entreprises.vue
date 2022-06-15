<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    <p class="mainWidth marginAuto marginTop50 pageTopText">
        Petite commune et très dynamique : sportives, culturelles, de loisirs, les associations ne manquent pas.
    </p>
    <main class="width100">
        <div class="filterBox width100 marginTop50">
            <div class="buttonBox mainWidth marginAuto flex wrap spaceEvenly ">
                <p class="mainWidth marginAuto marginTop20 lightText">
                    Filtrez les entreprises par thème
                </p> 
                <button class="filterButton lightBtn" v-for="filter in filters" :name="filter.value" :key="filter.value" @click="filterResults">{{ filter.text }}</button>
            </div>
        </div>

        <section class="width100 marginTop50">
            <div class="cardBox mainWidth marginAuto flex center wrap">

                <article class="card" v-for="item in filteredResults" :key="item.id">
                    <div class="topCaption">
                        <h2>{{ item.name }}</h2>
                        <span>{{ item.description }}</span>
                    </div>
                    <figure>
                        <div class="imageBox">
                            <img :src="item.photoUrl" alt="">
                        </div>
                        
                        <figcaption class="bottomCaption flex">

                                <p class="cardDataBox">
                                    <span class="icon">schedule</span>
                                    {{ item.schedule }}
                                </p>

                                <p class="cardDataBox">
                                    <span class="icon">pin_drop</span>
                                    {{ item.where }}
                                </p>

                                <p class="cardDataBox">
                                    <span class="icon">call</span>
                                    {{ item.phoneNumber }}
                                </p>

                                <p class="cardDataBox">
                                    <span class="icon">mail</span>
                                    {{ item.email }}
                                </p>

                                <p class="cardDataBox">
                                    <span class="icon">language</span>
                                    {{ item.website }}
                                </p>
                        </figcaption>
                    </figure>
                </article>

            </div>
        </section>

    </main>
</template>

<script setup>
import { ref } from 'vue';
import Pieds from '@/components/site structure/Pieds'
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'
import { getCollection } from '@/composables/directusLibrary'
import directusRefs from '@/directus/directusRefs'

const pageTitle = ref("Commerces et entreprises")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

const error = ref('')

const filterResults = (e) => {
    if(e.target.getAttribute('name') == 'toutes'){
        filteredResults.value = associations.value
    }else{
        filteredResults.value = associations.value.filter(doc => doc.theme == e.target.getAttribute('name'))
    }
    console.log(e.target.getAttribute('name'))
}


const filters = ref([])
const items = ref([])
const filteredResults = ref([])

getCollection(directusRefs.collections.businessTypes).then(res => {
    filters.value = res.data
    console.log(filters.value)
}).catch(err => {
    error.value = err.message
})
getCollection(directusRefs.collections.entreprises).then(res => {
    items.value = res.data
    filteredResults.value = res.data
}).catch(err => {
    error.value = err.message
})

</script>

<style scoped>
.filterBox{
    background: linear-gradient(270deg, rgba(0,47,74,1) 0%, rgba(147,96,55,1) 100%); 
}
.buttonBox p {
    font-size: 26px;
    text-align: center;
}

.card{
    width: min(100%, 450px);
    border-radius: var(--panelradius);
    margin: 20px;
    box-shadow: var(--boxshadow);
}
.card:nth-child(4n+1),
.card:nth-child(4n+4){
    background-color: var(--darkblue);
}


.card:nth-child(4n+2){
    background-color: white;
}
.card:nth-child(4n+2) *{
    color: var(--darktext);
}

.card:nth-child(4n+3){
    background-color: var(--brown);
}
.card .topCaption{
    padding: 20px 30px 20px 40px;
    color: white;
    
}
.card .topCaption h2{
    font-size: 18px;
}
.bottomCaption{
    font-size: clamp(12px, 1.2vw, 24px);
    font-weight: 200;
    line-height: 30px;
    padding: 20px 30px 20px 40px;
    color: white;
    display: flex;
    flex-direction: column;
}
.cardDataBox{
    display: flex;
    flex-direction: row;
}
.cardDataBox .icon{
    margin-right: 20px;
}
.imageBox{
    width: 100%;
    aspect-ratio: 4/3.3;
}
.imageBox img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
i{
    color: black;
}

</style>