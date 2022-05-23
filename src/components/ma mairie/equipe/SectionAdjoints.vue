<template>
    
        <div class="mainWidth marginAuto">
            <SectionTitleBox title="Les adjoints et délégués municipaux." color="var(--darkblue)" />
        </div>

        <div class="contentBox marginAuto mainWidth flex wrap center ">
            
            <figure v-for="person in adjointsDelegues" :key="person.id" class="personCard">
                <figcaption class="topCaption">
                    <h2 class="centered name">{{person.firstName + ' ' + person.lastName}}</h2>
                    <h2 class="centered role">{{person.role}}</h2>
                </figcaption>
                <div class="imgBox">
                    <img :src="person.photoUrl" alt="">
                </div>
                <div class="bottomCaption">
                    {{person.roleDetail}}
                </div>
            </figure>
        </div>
    
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import { directus } from '@/directus/config';


const adjointsDelegues = ref(null)



directus.items('Equipe').readByQuery({
    filter: {
        role: {
            _in: ['adjoint', 'adjointe', 'délégué', 'déléguée' ]
        }
    }
}).then(res => {
    adjointsDelegues.value = res.data
}).catch(err => {
    console.log(err.message)
})


</script>

<style scoped>
.contentBox{
    padding: 50px 0;
}
.personCard{
    width: min(250px, 100%);
    background-color: var(--darkblue);
    border-radius: var(--panelradius);
    margin: 20px;
    overflow: hidden;
}
.personCard > .topCaption{
    padding: 15px;
}
.personCard > .imgBox{
    width: 100%;
    height: 200px;
}
.name{
    color: white;
    font-size: 18px;
    font-weight: 400;
}
.role{
    color: white;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-top: 5px;
}
.personCard > div > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.personCard > .bottomCaption{
    color: white;
    padding: 15px;
    text-align: center;
}
/* @media (min-width: 749px){
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
} */

</style>