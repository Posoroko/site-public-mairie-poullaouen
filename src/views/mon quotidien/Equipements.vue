<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main class="listOfDefaultSections">           
        <section class="defaultSection width100 flex column alignItemsCenter" v-for="section in sections" :key="section.id">

            <SectionTitleBox :title="section.title" color="var(--darkblue)" />

            <div class="defaultBandeau width100 flex center">
                <div class="defaultContentBox mainWidth flex center alignItemsCenter">
                    <div class="defaultBox defaultBox1 text centered">
                        <p class="text">
                            {{ section.text }}
                        </p>
                        <p class="moreInfo">{{ section.moreInfo }}</p>
                        
                    </div>

                    <div class="defaultBox defaultBox2 text relative flex alignCenter">
                        <div class="foot">
                            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                <path class="pied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                        </div>

                        <div class="figBox absolute top right bottom left centered">
                            <figure>
                                <img class="width100" :src="directusAddress + '/assets/' + section.photo + '.jpg'" :alt="section.alt">
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'
import { getCollection } from '@/directus/directusLibrary'
import { directus, directusAddress } from '@/directus/config'

const error = ref(null)

const pageTitle = ref("La équipements sportifs et de loisir")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])
const sections = ref(null)
getCollection('Equipements_sportifs', -1).then(res => {
    sections.value = res.data
    console.log(sections.value)
    console.log(directusAddress)
}).catch(err => {
    error.value = err.message
})

</script>

<style scoped>

/* order of text and image */
.listOfDefaultSections :nth-child(odd) * * .defaultBox1{
    order: 1;
    color: var(--darkblue);
}
.listOfDefaultSections :nth-child(odd) * * .defaultBox2{
    order: 2;
}
.listOfDefaultSections :nth-child(even) * * .defaultBox1{
    order: 2;
    color: white;
}
.listOfDefaultSections :nth-child(even) * * .defaultBox2{
    order: 1;
}
/* background color */
.listOfDefaultSections :nth-child(4n+2) .defaultBandeau{
    background-color: var(--darkblue);
}
.listOfDefaultSections :nth-child(4n+4) .defaultBandeau{
    background-color: var(--brown);
}
.listOfDefaultSections :nth-child(4n+4) .defaultBandeau .defaultContentBox .defaultBox2 .foot svg .pied{
    fill: white;
}



#Calque_1{
    overflow: visible;
}
.foot{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.pied{
    fill: var(--brown);
    filter: drop-shadow(var(--boxshadow));
}
.figBox{
    padding: 15%;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.defaultBandeau{
    padding: 30px 0;
    margin-top: 50px;
}
.text{
    text-align: justify;
    white-space: pre-wrap
}
.moreInfo{
    font-style: italic;
    font-size: 6px;
    margin-top: 20px;
}
.defaultBox{
    padding: 20px;
}
.defaultBox1{
    width: min(100%, 595px);
}
.defaultBox1 > p {
    font-size: max(15px, 1.25vw);
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
}
.defaultBox2{
    width: min(100%, 595px);
}
@media (max-width: 1200px){
    .defaultSectionsBox :nth-child(1) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(4) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(6) .defaultBandeau .defaultContentBox,
    .listOfDefaultSections :nth-child(even) .defaultBandeau .defaultContentBox{
        flex-direction: column;
    }
    .defaultSectionsBox :nth-child(3) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(5) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(8) .defaultBandeau .defaultContentBox,
    .listOfDefaultSections :nth-child(odd) .defaultBandeau .defaultContentBox{
        flex-direction: column-reverse;
    }
}
@media (min-width: 1201px){
    .defaultContentBox{
        flex-direction: row;
    }
}

</style>