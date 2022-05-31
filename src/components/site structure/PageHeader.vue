<template>
    <header class="width100">
        <div class="headerImageBox">
            <img class="headerImage" src="@/assets/images/header_images/accueil.jpg" alt="">
        </div>

        <div class="pathBar shadow relative lightText centered">
            <p class="mainWidth path flex">
                    <a :href="link.targert" class="flexAlign pathStep" v-for="link in path" :key="link.name">
                        {{link.name}} 
                        <span class="icon chevron">chevron_right</span> 
                    </a>
            </p>
        </div>

        <div class="titleBar shadow relative centered">
            <h1 class="lightText mainWidth">{{title}}</h1>
        </div>
    </header>
</template>



<script setup>

import { headerImages } from '@/assets/images/imageUrls';
import { ref } from 'vue';

const props = defineProps({ 
    title: String,
    image: String,
    path: String })



</script>

<style scoped>

@media (max-width: 700px) {
    .pathBar{
        display: none;
    }
}
@media (min-width: 701px) {
    .pathBar{
        display: grid;
    }
}
.headerImageBox{
    width: 100%;
    height: 69vh;
    overflow: hidden;
}
.headerImage{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
}
.pathBar{
    width: 100%;
    min-height: 5vh;
    background-color: var(--brown);
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.657);
    z-index: 1;
}

.pathStep{
    margin-right: max(10px, 2vw);
}
.path > a{
    font-size: max(14px, 1vw);
}
.chevron{
    font-size: 24px;
    margin-left: max(10px, 2vw);
    line-height: 20px;
    color: var(--darkblue);
    line-height: 25px;
}
.titleBar{
    width: 100%;
    height: 11vh;
    background-color: var(--darkblue);
    z-index: -5;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.608);
}
.titleBar > h1 {
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: max(20px, 2vw);
    letter-spacing: 2px;
}
</style>