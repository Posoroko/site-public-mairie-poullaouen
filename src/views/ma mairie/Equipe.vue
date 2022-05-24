<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main class="flex column">
        <p class="pageTopText mainWidth marginAuto sectionMarginTop">Ici, une phrase d'accroche.</p>

        <nav class="marginAuto sectionMarginTop">
            <a class="filter" v-for="filter in filters" :key="filter.id" :href="filter.id">{{filter.filter}}</a>
        </nav>
        
        <section class="mayorSection width100 alignItemsCenter topSectionTopMargin ">
            
            <div id="maire" class="mainWidth marginAuto">
                <SectionTitleBox title="Le Maire" color="var(--darkblue)" />
            </div>

            <div class="width100 mayorSectionContentBox sectionPadding marginTop100 relative flex center">
                <div class="mainWidth innerBox flex">
                    <div class="box leftBox">
                        <figure class="mayorFigure width100" v-if="maire">
                            <figcaption  class="mayorFigCaption flex column alignItemsCenter">
                                <span>{{maire.firstName + ' ' + maire.lastName}}</span>

                                <span>{{maire.role}}</span>
                            </figcaption>
                            <img :src= maire.photoUrl alt="">
                        </figure>

                    </div>

                    <div class="box rightBox">
                        <p>Lorem
                             ipsum dolor sit amet consectetur adipisicing elit. A soluta voluptas molestias sequi omnis impedit deleniti excepturi nemo, fuga sunt
                              sapiente, perferendis quas veritatis quaerat. Quis maiores quae totam hic.
                              ipsum dolor sit amet consectetur adipisicing elit. A soluta voluptas molestias sequi omnis impedit deleniti excepturi nemo, fuga sunt
                              sapiente, perferendis quas veritatis quaerat. Quis maiores quae totam hic.
                              ipsum dolor sit amet consectetur adipisicing elit. A soluta voluptas molestias sequi omnis impedit deleniti excepturi nemo, fuga sunt
                            
                        </p>
                    </div>
                </div>

                <div class="mayorSectionFootBox">
                    <Pieds  color="var(--brown)"/>
                </div>
            </div>
        </section>

        <section id="adjoints" class="adjointsSection width100 sectionMarginTop">
            <SectionAdjoints />
        </section>
        
        <section id="conseillers">
            <SectionConseillers />
        </section>
        
        <section id="commissions">
            <SectionCommissions />
        </section>

        <section id="delegations">
            <SectionDelegation />
        </section>
        
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Pieds from '@/components/site structure/Pieds'
import SectionAdjoints from '@/components/ma mairie/equipe/SectionAdjoints'
import SectionConseillers from '@/components/ma mairie/equipe/SectionConseillers'
import SectionCommissions from '@/components/ma mairie/equipe/SectionCommissions'
import SectionDelegation from '@/components/ma mairie/equipe/SectionDelegation'
import PageHeader from '@/components/site structure/PageHeader'
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import { directus } from '@/directus/config';



const pageTitle = ref('Équipe municipale')
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])

const maire = ref(null)

const filters = ref([
    { filter: "Le maire", id: "#maire"}, { filter: "Les adjoints et délégués", id: "#adjoints"}, 
    { filter: "Les conseillers", id: "#conseillers" }, { filter: "Les commissions", id: "#commissions" }, { filter: "Les délégations", id: "#delegations" }
])


directus.items('Equipe').readByQuery({
    filter: {
        role: {
            _in: ['maire', 'mairesse']
        }
    }
}).then(res => {
    maire.value = res.data[0]
}).catch(err => {
    console.log(err.message)
})


</script>

<style scoped>
main{
    margin-bottom: 500px;
}
nav{
    width: 100%;
    padding: 20px;
    
    display: flex;
    justify-content: center;
}
.filter{
    color:#fff;
    font-size: 18px;
    background-color: var(--brown);
    padding: 10px 30px;
    border-radius: 40px;
    margin: 10px;
    display: block;
    box-shadow: var(--boxshadow);
    cursor: pointer;
}
.mayorSectionContentBox{
    background-color: var(--darkblue);
}
.mayorSectionFootBox{
    width: min(100vw, 54%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
}
.box{
    padding: 20px;
}

.mayorFigure{
    overflow: hidden;
    border-radius: var(--panelradius);
}
.mayorFigure > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.mayorFigCaption{
    background-color: #fff;
    padding: 15px;
}
.mayorFigCaption > :nth-child(1){
    font-size: max(16px, 1.4vw);
}
.mayorFigCaption > :nth-child(2){
    font-size: max(14px, 1.2vw);
    font-style: italic;
    margin-top: 5px;
}

.rightBox > p{
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 25px;
}
@media (max-width: 749px){
    .mayorSectionContentBox > .innerBox{
        flex-direction: column;
        align-items: center;
    }
    .leftBox{
        width: 100%;
    }
    .rightBox{
        width: 100%;
    }
}
@media (min-width: 749px){
    .mayorSectionContentBox > .innerBox{
        flex-direction: row;
        justify-content: space-between;
    }
    .leftBox{
        width: 42%;
    }
    .rightBox{
        width: 52%;
    }
}

</style>