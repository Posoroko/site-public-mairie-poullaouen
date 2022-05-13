<template>
    <section class="width100 actualiteSection" v-if="documents">
        <SectionTitleBox title="Actualités" color="var(--darkblue)" />

        <div class="actuBox width100 flex center" v-for="doc in documents" :key="doc.id">
            <div class="mainWidth flex content marginTop20">
                <div class="leftBox centered relative">
                    <Pieds color="var(--brown)"/>
                    <div class="actuImgBox rr">

                    </div>
                </div>

                <div class="rightBox flex column" >
                    <h2>{{doc.title}}</h2>
                    <p class="date">{{doc.displayDate}}</p>
                    <p class="content">{{doc.content}}</p>
                </div>
            </div>
        </div>
     

    </section>
</template>

<script setup>
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import Pieds from '@/components/site structure/Pieds'
import { ref } from 'vue';
import { getCollection } from '@/composables/directusLibrary';

const error = ref(null)
const documents = ref(null)


//get data from directus


getCollection('Actualites', 3).then(res => {
        documents.value = res.data
    }).catch(err => {
        error.value = err
        console.log(err)
    })





</script>

<style scoped>
section{
    padding-bottom: 50px;
}
.actuBox{
    padding: 50px 0;
}
.leftBox{
    width: 45%;
}
.actuImgBox{
    position: absolute;
    top: 15%;
    right: 10%;
    bottom: 15%;
    left: 10%;
}
.rightBox{
    width: 55%;
    padding: 50px;
}
.rightBox > h2{
    font-size: 24px;
}
.rightBox > .date{
    font-size: 16px;
    font-style: italic;
    margin-top: 10px;
}
.rightBox > .content {
    font-size: 22px;
    margin-top: 20px;
}
.actualiteSection > :nth-child(3){
    background-color: var(--darkblue);
}
.actualiteSection > :nth-child(3) > div > .rightBox > h2,
.actualiteSection > :nth-child(3) > div > .rightBox > .date,
.actualiteSection > :nth-child(3) > div > .rightBox > .content{
    color: white;
}

</style>