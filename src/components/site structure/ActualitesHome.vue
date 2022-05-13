<template>
    <section class="mainWidth">
        <SectionTitleBox title="Actualités" color="var(--darkblue)" />

        <div class="content flex marginTop20 width100">
            <div class="leftBox centered relative">
                <Pieds color="var(--brown)"/>
                <div class="actuImgBox rr">

                </div>
            </div>

            <div class="rightBox flex column" v-if="document">
                <h2>{{document.title}}</h2>
                <p class="date">{{document.displayDate}}</p>
                <p class="content">{{document.content}}</p>
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
const document = ref(null)


//get data from directus


getCollection('Actualites', 1).then(res => {
        document.value = res.data[0]
    }).catch(err => {
        error.value = err
        console.log(err)
    })





</script>

<style scoped>
section{
    padding-bottom: 50px;
}
.leftBox{
    width: 45%;
    height: 500px;
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
    height: 500px;
    padding: 20px;
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


</style>