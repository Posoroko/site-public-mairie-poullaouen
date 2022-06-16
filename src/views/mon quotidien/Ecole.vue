<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>


<!-- default sections -->

        <div class="presetSectionsBox">
            <section class="presetSection width100 flex column alignItemsCenter"  v-for="section in sections" :key="section.id">

                <SectionTitleBox :title="section.title" color="var(--darkblue)" />

<!-- section standard -->
                <div class="sectionBandeau width100 flex center" v-if="section.format == 'section'">
                    <div class=" defaultSectionContentBox mainWidth flex center alignItemsCenter">
                        <div class="defaultSectionBox defaultSectionBox1 text centered">
                            <p class="text">{{section.text}}</p>
                            <p class="moreInfo"> <b>Renseignements: </b> {{section.moreInfo}}</p>
                        </div>

                        <div class="defaultSectionBox defaultSectionBox2 text relative flex alignCenter">
                            <div class="foot">
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                    <path class="pied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                            </div>
                            <div class="figBox absolute top right bottom left centered">
                                <figure>
                                    <img class="width100" src="@/assets/images/mairie.jpg" alt="">
                                    
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
<!-- tableaux -->
                <div class="sectionBandeau mainWidth flex center alignItemsCenter backgroundTableau" v-if="section.format == 'schedule'">
                    <img class="schedule" src="../../assets/images/mon_quotidien/ecole/emploi-du-temps-ecole.png" alt="">
                </div>

                <div class="sectionBandeau mainWidth flex center alignItemsCenter backgroundTableau" v-if="section.format == 'menu'">
                    <Menu />
                </div>
            </section>
        </div>
            

<!-- default sections  -->

        <div class="defaultSectionBox">
            <section class="defaultSection width100 flex column alignItemsCenter"  v-for="section in customSections" :key="section.id">

                <SectionTitleBox :title="section.title" color="var(--darkblue)" />

                <div class="defaultSectionBandeau width100 flex center">
                    <div class="defaultSectionContentBox mainWidth flex center alignItemsCenter">
                        <div class="defaultSectionBox defaultSectionBox1 centered">
                            <p class="defaultSectionText">{{section.text}}</p>
                            <p class="defaultSectionMoreInfo"> <b>Renseignements: </b> {{section.moreInfo}}</p>
                        </div>

                        <div class="defaultSectionBox defaultSectionBox2 text relative flex alignCenter">
                            <div class="defaultSectionFoot">
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                    <path class="defaultSectionPied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                            </div>
                            <div class="defaultSectionFigBox absolute top right bottom left centered">
                                <figure>
                                    <img class="width100" src="@/assets/images/mairie.jpg" alt="">
                                    
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>

        

    </main>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'
import Menu from '@/components/mon quotidien/Menu'
import { getCollection } from '@/directus/directusLibrary'
import directusRefs from '@/directus/directusRefs'


const error = ref(null)

const pageTitle = ref("L'école municipale")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])


const sections = ref(null)
const customSections = ref(null)

getCollection(directusRefs.collections.ecoleSections, -1).then(res => {
    sections.value = res.data
    
}).catch(err => {
    error.value = err.message
})
getCollection(directusRefs.collections.ecoleSectionsCustom, -1).then(res => {
    customSections.value = res.data
    console.log(customSections.value)
}).catch(err => {
    error.value = err.message
})




</script>

<style scoped>
/* preset sections */
/*-- image order --*/
.presetSection:nth-child(1) * * .box1, 
.presetSection:nth-child(4) * * .box1, 
.presetSection:nth-child(6) * * .box1{
    order: 2;
}
.presetSection:nth-child(1) * * .box2, 
.presetSection:nth-child(4) * * .box2,  
.presetSection:nth-child(6) * * .box2{
    order: 1;
}
.presetSection:nth-child(3) * * .box1,
.presetSection:nth-child(5) * * .box1,
.presetSection:nth-child(8) * * .box1{
    order: 1;
}
.presetSection:nth-child(3) * * .box2,
.presetSection:nth-child(5) * * .box2,
.presetSection:nth-child(8) * * .box2{
    order: 2;
}
/*----- text color -----*/
.presetSection:nth-child(1) * ,
.presetSection:nth-child(3) * ,
.presetSection:nth-child(5) * ,
.presetSection:nth-child(8) * {
    color: var(--darktext);
}
.presetSection:nth-child(4) *,
.presetSection:nth-child(6) *{
    color: var(--lighttext);
}

/* background color */
.presetSection:nth-child(4) .sectionBandeau{
    background-color: var(--brown);    
}
.presetSection:nth-child(6) .sectionBandeau{
    background-color: var(--darkblue);    
}
/* foot color */
.presetSection:nth-child(4) .sectionBandeau .sectionBandeau .box2 .foot svg .pied{
    fill: white;
}




</style>