<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    <p class="mainWidth marginAuto marginTop50 pageTopText">
        Petite commune et très dynamique : sportives, culturelles, de loisirs, les associations ne manquent pas.
    </p>
    <main class="width100">
        <div class="filterBox width100 marginTop50">
            <div class="buttonBox mainWidth marginAuto flex wrap spaceEvenly ">
                <p class="mainWidth marginAuto marginTop20 lightText">
                    Filtrez les associations par thème
                </p> 
                <button class="filterButton lightBtn" v-for="filter in filters" :name="filter.value" :key="filter.value" @click="filterResults">{{ filter.text }}</button>
            </div>
        </div>
        <section class="sectionAsso width100 marginTop50">
            <div class="assoCardBox mainWidth marginAuto flex center wrap">

                <article class="assoCard" v-for="association in filteredResults" :key="association.id">
                    <div class="topCaption">
                        <h2>{{ association.assoName }}</h2>
                        <span>{{ association.description }}</span>
                    </div>
                    <figure>
                        <div class="imageBox">
                            <img :src="association.photoUrl" alt="">
                        </div>
                        
                        <figcaption class="bottomCaption flex">
                                <p class="assoCardDataBox">
                                    <span class="icon">public</span>
                                    {{ association.aimedPublic }}
                                </p>

                                <p class="assoCardDataBox">
                                    <span class="icon">schedule</span>
                                    {{ association.schedule }}
                                </p>

                                <p class="assoCardDataBox">
                                    <span class="icon">pin_drop</span>
                                    {{ association.where }}
                                </p>

                                <p class="assoCardDataBox">
                                    <span class="icon">euro</span>
                                    <!-- {{ association.price }} -->
                                </p>

                                <p class="assoCardDataBox">
                                    <span class="icon">person</span>
                                    {{ association.aimedPublic }}
                                </p>

                                <p class="assoCardDataBox">
                                    <span class="icon">call</span>
                                    {{ association.phoneNumber }}
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

const pageTitle = ref("Les associations")
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
const associations = ref([])
const filteredResults = ref([])

getCollection(directusRefs.collections.assosTypes).then(res => {
    filters.value = res.data
}).catch(err => {
    error.value = err.message
})
getCollection(directusRefs.collections.associations).then(res => {
    associations.value = res.data
    filteredResults.value = res.data
}).catch(err => {
    error.value = err.message
})

</script>

<style scoped>
.filterBox{
    background: linear-gradient(270deg, rgba(0,47,74,1) 0%, rgba(147,96,55,1) 100%); 
    /* padding: 30px; */
}
.buttonBox p {
    font-size: 26px;
    text-align: center;
}
.assoCard{
    width: min(100%, 450px);
    background-color: var(--darkblue);
    border-radius: var(--panelradius);
    margin: 20px;
}
.assoCard .topCaption{
    padding: 20px 30px 20px 40px;
    color: white;
}
.assoCard .topCaption h2{
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
.assoCardDataBox{
    display: flex;
    flex-direction: row;
}
.assoCardDataBox .icon{
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