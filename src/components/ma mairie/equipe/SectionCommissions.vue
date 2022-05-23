<template>
    
        <div class="mainWidth marginAuto">
            <SectionTitleBox title="Les commissions communales" color="var(--darkblue)" />
        </div>

        <div class="contentBox marginAuto mainWidth flex wrap center ">
            
            <figure v-for="commission in commissions" :key="commission.id" class="commissionCard shadow">
                <figcaption class="topCaption">
                    <h2 class="centered name">{{commission.name}}</h2>
                    <h2 class="centered vicePresident">{{commission.vicePresident}}</h2>
                </figcaption>
                <div class="imgBox">
                    <img :src="commission.photoUrl" alt="">
                </div>
                <div class="bottomCaption">
                    <span class="member " v-for="member in commission.members" :key="member">{{member}}</span>
                </div>
            </figure>
        </div>
    
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import { directus } from '@/directus/config';


const commissions = ref([
    {
        name: 'Urbanisme - École',
        vicePresident: 'Vice-Présidente : Viviane MOISAN',
        photoUrl: '',
        members: [  "D. GOUBIL, ", "O. CORVEST, ", "P. GODE, ", 
                    "P. GUELLAFF, ", "A. LE CAM, ", "K. LE CAM, ", 
                    "G. LE GAL, ", "V. LE GALL, ", "N. LE MOAL, ", 
                    "Y. LOSSOUARN, ", "J. PIROU, ", "S. ROUX, ", "P. TALLEC"
        ]

    },
    {
        name: 'Finances - commissionnel',
        vicePresident: 'Vice-Présidente : Sophie ROUX',
        photoUrl: '',
        members: [  "D. GOUBIL, ", "O. CORVEST, ", "P. GODE, ", 
                    "P. GUELLAFF, ", "A. LE CAM, ", "K. LE CAM, ", 
                    "G. LE GAL, ", "V. LE GALL, ", "N. LE MOAL, ", 
                    "Y. LOSSOUARN, ", "J. PIROU, ", "S. ROUX, ", "P. TALLEC"
        ]
    },
    {
        name: 'Finances - commissionnel',
        vicePresident: 'Vice-Présidente : Sophie ROUX',
        photoUrl: '',
        members: [  "D. GOUBIL, ", "O. CORVEST, ", "P. GODE, ", 
                    "P. GUELLAFF, ", "A. LE CAM, ", "K. LE CAM, ", 
                    "G. LE GAL, ", "V. LE GALL, ", "N. LE MOAL, ", 
                    "Y. LOSSOUARN, ", "J. PIROU, ", "S. ROUX, ", "P. TALLEC"
        ]
    },
    {
        name: 'Finances - commissionnel',
        vicePresident: 'Vice-Présidente : Sophie ROUX',
        photoUrl: '',
        members: [  "D. GOUBIL, ", "O. CORVEST, ", "P. GODE, ", 
                    "P. GUELLAFF, ", "A. LE CAM, ", "K. LE CAM, ", 
                    "G. LE GAL, ", "V. LE GALL, ", "N. LE MOAL, ", 
                    "Y. LOSSOUARN, ", "J. PIROU, ", "S. ROUX, ", "P. TALLEC"
        ]
    }
])


</script>

<style scoped>
.contentBox{
    padding: 50px 0;
}
.contentBox > :nth-child(1){
        background-color: var(--darkblue);
}
.contentBox > :nth-child(2){
        background-color: white;
}
.contentBox > :nth-child(2) > * > *{
        color: black;
}
.contentBox > :nth-child(3){
        background-color: var(--brown);
}
.contentBox > :nth-child(4){
        background-color: var(--darkblue);
}
.commissionCard{
    width: min(450px, 100%);
    border-radius: var(--panelradius);
    margin: 20px;
    overflow: hidden;
}
.commissionCard > .topCaption{
    padding: 20px;
}
.commissionCard > .imgBox{
    width: 100%;
    height: 325px;
}
.name{
    color: white;
    font-size: 18px;
    font-weight: 400;
}
.vicePresident{
    color: white;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-top: 10px;
}
.commissionCard > div > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.commissionCard > .bottomCaption{
    color: white;
    padding: 15px;
    text-align: center;
}
.member{
    line-height: 30px;
    letter-spacing: 3px;
    font-weight: 300;
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