<template>
    <PageHeader :title="pageTitle" :path="pagePath" />

    <main class="mainRandonnée">

        <section class="intro width100 marginAuto">

            <p class="intro marginTop100 mainWidth marginAuto">
                Pollaouen et Locmaria-Berrien et leurs paysages buccoliques et pitoresques offrent moulte possibilités pour les amateurs de randonnée. Les circuits sont variés, offrant parfois des vues sur les grands espace depuis le haut d'une collines, parfois des moment empreints de légendes en suivant le parcout sinueux d'un chemin creux au fond d'une vallée.  
            </p>

            <SectionTitleBox title="Les circuits de randonnées" />

            

            <div class="trailListBox width100" v-for="trail in trailList" :key="trail.city">
                <h2 class="marginTop50 mainWidth marginAuto">{{ trail.city }}</h2>
                <section class="defaultSection width100 flex column alignItemsCenter"  v-for="item in trail.trails" :key="item.title">

                    <div class="sectionBandeau sectionBandeau width100 flex center" >
                        <div class="defaultSectionContentBox mainWidth flex center alignItemsCenter">
                            <div class="defaultSectionBox sectionBox1">
                                <p class="defaultSectionSubtitle">{{ item.title }}</p>
                                <p class="defaultSectionText" v-for="step in item.steps" :key="step">{{step}} <br><br> </p>
                                <p class="defaultSectionMoreInfo"> 
                                    <span>télécharger: </span>
                                    <span>consulter: </span>
                                </p>
                            </div>

                            <div class="defaultSectionBox sectionBox2 text relative flex alignCenter">
                                <div class="defaultSectionFoot">
                                    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve">
                                        <g>
                                            <path class="defaultSectionPied leftFoot"  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/>
                                            <path class="defaultSectionPied rightFoot"  d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/>
                                        </g>
                                    </svg>
                                </div>
                                <div class="defaultSectionFigBox absolute top right bottom left centered">
                                    <figure v-if="item.photo">
                                        <img 
                                        class="width100 pointer" 
                                        :src="item.file" 
                                        :alt="item.imgAlt"
                                        @click="showImageInModal">
                                    </figure>
                                </div>
                            </div>
                        </div>

                    </div>    
                </section>


                
            </div>
            
        </section>

    </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PageHeader from '@/components/site structure/PageHeader'
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import { trails } from '@/assets/content/mes sorties/randonnée'
import styleSections from '@/composables/sectionColorsOrder'

const trailList = ref(trails)


const pageTitle = ref("Les chemins de randonnée")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

onMounted(() => {
    styleSections()
})



</script>

<style scoped>
.trailListBox h2 {
    padding-left: 20px;
}


</style>