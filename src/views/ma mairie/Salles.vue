<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main>
        

        <section class="width100 flex column alignItemsCenter" v-for="salle in salles" :key="salle.content.title">
            <SectionTitleBox :title="salle.content.title" :color="salle.styles.titleColor" />

            <div class="bandeau width100 flex center marginTop30" :style="{ backgroundColor: salle.styles.backgroundColor}">
                <div class="contentBox mainWidth flex center alignItemsCenter">
                
                    <div class="box box1 text centered" :style="{ color: salle.styles.textColor}">
                        <p>
                            {{salle.content.text}}
                            <br>
                            <br>
                            <span class="">{{salle.content.standing}} assis- {{salle.content.sitting}} debout</span> <br>
                            <span></span>
                        </p>
                        <div class="pricingTable marginTop20" :class="{ lightTable: salle.styles.tableColor == 'light', darkTable: salle.styles.tableColor == 'dark' }" v-if="!salle.kitchen">
                            <strong class="block centered tarif">Tarifs</strong>
                            <div class="width100 row">
                                <div class="cell centered"></div>
                                <div class="cell centered">1 jour</div>
                                <div class="cell centered">2 jours</div>
                            </div>
                            <div class="width100 row">
                                <div class="cell centered">habitants</div>
                                <div class="cell centered">{{salle.content.prices.habitants.oneDay}}</div>
                                <div class="cell centered">{{salle.content.prices.habitants.twoDays}}</div>
                            </div>
                            <div class="width100 row">
                                <div class="cell centered">extérieurs</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.oneDay}}</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.twoDays}}</div>
                            </div>
                        </div>

                        <div class="pricingTable marginTop20" v-if="salle.kitchen">
                            <strong class="block centered tarif">Tarifs</strong>
                            <div class="width100 row">
                                <div class="cell centered"></div>
                                <div class="cell centered">1 jour</div>
                                <div class="cell centered">+ cuisine</div>
                                <div class="cell centered">2 jours</div>
                                <div class="cell centered">+ cuisine</div>
                            </div>
                            <div class="width100 row">
                                <div class="cell centered">habitants</div>
                                <div class="cell centered">{{salle.content.prices.habitants.oneDay}}</div>
                                <div class="cell centered">{{salle.content.prices.habitants.oneDayKitchen}}</div>
                                <div class="cell centered">{{salle.content.prices.habitants.twoDays}}</div>
                                <div class="cell centered">{{salle.content.prices.habitants.twoDaysKitchen}}</div>
                            </div>
                            <div class="width100 row">
                                <div class="cell centered">extérieurs</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.oneDay}}</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.oneDayKitchen}}</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.twoDays}}</div>
                                <div class="cell centered">{{salle.content.prices.exterieurs.twoDaysKitchen}}</div>
                            </div>
                        </div>

                        <div class="flex rowReverse width100">
                            <button class="marginTop30 darkBtn">voir l'album photo</button>
                        </div>
                        
                    </div>

                    <div class="box box2 text relative flex alignCenter">
                        <Pieds :color="salle.styles.footColor"/>

                        <div class="figBox absolute top right bottom left centered pointer">
                            <figure>
                                <img class="width100" :src="salle.images.main.url" :alt="salle.images.main.alt" @click="openImage">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <dialog ref="modal" class="modalImage marginAuto">
        <img :src="requestedImage" :alt="requestedImageAlt">
        <span class="icon absolute top right" @click="modal.close()">close</span>
    </dialog>
    
    <!-- <div class="width100 r">
        <Carousel />
    </div> -->
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Pieds from '@/components/site structure/Pieds'
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'
import salles from '@/composables/texts/sallesMunicipales'
import Carousel from '@/components/site structure/widgets/Carousel'


const pageTitle = ref("Les salles municipales")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

//open image in a modal

const requestedImage = ref(null)
const requestedImageAlt = ref(null)
const modal = ref(null)

const openImage = (e) => {
    requestedImage.value = e.target.getAttribute('src')
    requestedImageAlt.value = e.target.getAttribute('alt')
    modal.value.showModal()
}

</script>

<style scoped>
.figBox{
    padding: 15%;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bandeau{
    background-color: v-bind(backgroundColor);
    padding: 30px 0;
}

.box{
    padding: 20px;
}
main :nth-child(2) * * .box1, main :nth-child(4) * * .box1{
    order: 2;
}
main :nth-child(2) * * .box2, main :nth-child(4) * * .box2{
    order: 1;
}

.box1{
    width: min(100%, 595px);
}
.box1 > p {
    font-size: max(15px, 1.25vw);
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
}
.box2{
    width: min(100%, 595px);
    /* order: v-bind(imagePosition); */
}
@media (max-width: 1200px){
    .contentBox{
        flex-direction: column;
    }
    main :nth-child(1) *  .contentBox, main :nth-child(3) *  .contentBox{
    flex-direction: column-reverse;
}
}
@media (min-width: 1201px){
    .contentBox{
        flex-direction: row;
    }
}

.pricingTable{
    width: 100%;
    border-width: 2px;
    border-style: solid;
}
.pricingTable .tarif{
    border-width: 1px;
    border-style: solid;
    padding: 5px;
}
.pricingTable .row{

    display: flex;  
}
.pricingTable .row .cell{
    width: calc(100% / 3);
    
    border-width: 1px;
    border-style: solid;
}
.lightTable, .lightTable *, .lightTable * *{
    border-color: white;
}
.darkTable, .darkTable *, .darkTable * *{
    border-color: var(--darkblue);
}
.pricingTable * * {
    padding: max(2px, 0.3vw) 0;
    font-size: max(10px, 1vw)
}

</style>