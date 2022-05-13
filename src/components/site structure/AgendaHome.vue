<template>
    <section class="width100 flex center">
        <div class="mainWidth">
            <SectionTitleBox title="Agenda" color="white" />

            <div class="newsBox width100 flex wrap spaceAround"  v-if="documents">
                <div class="newsCardBox centered " v-for="doc in documents" :key="doc.id">
                    <div class="newsCard panel shadow">
                        <h3 class="tilte">{{doc.title}}</h3>
                        <p class="date">{{doc.displayDate}}</p>
                        <p class="place">{{doc.place}}</p>
                        <div class="imgBox">
                            <!-- <img :src="doc.photoUrl" alt=""> -->
                        </div>
                        <p class="content">{{doc.content}}</p>
                    </div>
                </div>
            </div>

            <div class="newsOptionsBox width100 flex spaceAround marginTop20">
                <button class="lightBtn" >voir tout l'agenda</button>
                <button class="lightBtn">proposer un événement</button>
            </div>
        </div>
     

    </section>
</template>

<script setup>
import SectionTitleBox from '@/components/site structure/SectionTitleBox'

import { ref, onMounted } from 'vue';
import { getCollection } from '@/composables/directusLibrary';
const error = ref(null)
const documents = ref(null)


//get data from directus


getCollection('Agenda', 4).then(res => {
        documents.value = res.data
    }).catch(err => {
        error.value = err
        console.log(err)
    })





</script>

<style scoped>
section{
    /* background: radial-gradient(ellipse at center,#5e3d23 0,var(--darkblue) 100%); */
    /* background: radial-gradient(circle, rgb(0, 74, 77) 5%, rgba(0,47,74,1) 97%); */
    background: linear-gradient(90deg, rgba(147,96,55,1) 0%, rgba(0,47,74,1) 97%);
    padding-bottom: 50px;
    box-shadow: var(--boxshadow)
}
.newsCard{
    width: 325px;
    height: 550px;
    background-color: white;
}
.newsCardBox{
    padding: 10px;
    margin-top: 40px;
}
.newsCard > h3{
    font-size: 24px;
    font-weight: 400;
}
.newsCard > .date{
    font-size: 16px;
    font-style: italic;
    margin-top: 20px;
}
.newsCard > .place{
    font-size: 16px;
    font-style: italic;
    margin-top: 5px;
}
.newsCard > .imgBox{
    width: min(150px, 100%);
    aspect-ratio: 1/1;
    background-color: red;
    margin: 20px auto;
}
.newsCard > .imgBox > img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media  (max-width: 329px) {
    .newsCardBox{
        width: 100%;
    }
    .newsCard{
        width: 100%;
    }
    
}
@media  (min-width: 330px) and (max-width: 999px) {
    .newsCardBox{
        flex-basis: 50%
    }
}

@media (max-width: 1075px) {
    .newsBox > :nth-child(4){
        display: grid;
    }
}
@media (min-width: 1076px) {
    .newsCardBox{
        flex-basis: 33%
    }
    .newsBox > :nth-child(4){
        display: none;
    }
}
/*- agenda options button-*/

.newsOptionsBox > button{
    width: min(100%, 550px);
    font-size: max(14px, 1vw);
    margin: 0 10px;
}


</style>