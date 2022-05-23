<template>
    
        <div class="mainWidth marginAuto">
            <SectionTitleBox title="members municipaux" color="var(--darkblue)" />
        </div>

        <div class="contentBox marginAuto mainWidth flex wrap center ">
            
            <figure v-for="member in members" :key="member.id" class="memberCard">
                <figcaption class="topCaption">
                    <h2 class="centered name">{{member.firstName + ' ' + member.lastName}}</h2>
                </figcaption>
                
                <div class="imgBox">
                    <img :src="member.photoUrl" alt="">
                </div>
            </figure>
        </div>
    
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import { directus } from '@/directus/config';


const members = ref(null)



directus.items('Equipe').readByQuery({
    filter: {
        role: {
            _in: ['conseiller', 'conseillère' ]
        }
    }
}).then(res => {
    members.value = res.data
}).catch(err => {
    console.log(err.message)
})


</script>

<style scoped>
.contentBox{
    padding: 50px 0;
}
.memberCard{
    width: min(250px, 100%);
    background-color: var(--brown);
    border-radius: var(--panelradius);
    margin: 20px;
    overflow: hidden;
}
.memberCard > .topCaption{
    padding: 15px;
}
.memberCard > .imgBox{
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
.memberCard > div > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
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