<template>
    <section class="mainWidth">
        <SectionTitleBox title="En 1 click" color="var(--darkblue)" />

        <div class="oneClickerBox width100 flex spaceAround wrap">
            <div class="roundBtnBox centered" v-for="clicker in oneClickers" :key="clicker.icon">
                <div class="roundBtn">
                    <p class="icon">{{clicker.icon}}</p>
                    <p class="Wayne">{{clicker.text}}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import { ref } from 'vue';
import { oneClickers } from '@/composables/texts/texts'




</script>

<style scoped>
section{
    padding-bottom: 50px;
}
.oneClickerBox{
    margin-top: 60px;
}
.roundBtnBox{
    padding: 5px;
}
.roundBtn{
    background-color: var(--darkblue);
    border-radius: 50%;
    position: relative;
    box-shadow: var(--boxshadow);
}
.roundBtn > .icon{
    color: white;
    width: 100%;
    text-align: center;
    flex-basis: 25%;
    position: absolute;
    
}
.roundBtn > .Wayne {
    width: 100%;
    height: 50%;
    font-size: 20px;
    color: white;
    text-align: center;
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 20px;

}
@media (max-width: 295px) {
    .roundBtnBox{
        width: 100%;
    }
    .roundBtn{
        width: 120px;
        height: 120px;
    }
}
@media (max-width: 490px) {
    .roundBtn{
        width: 120px;
        height: 120px;
    }
    .roundBtn > .icon{
        font-size: 40px;
        top: 10px;
    }
    .roundBtn > .Wayne{
        font-size: 14px;
        bottom: 10px;
    }
}
@media (min-width: 296px) and (max-width: 490px) {
    .roundBtnBox{
        width: calc(50% - 10px);
    }
    
}
@media (min-width: 491px) and (max-width: 970px) {
    .roundBtnBox{
        width: calc(33% - 10px);
    }
    .roundBtn{
        width: 140px;
        height: 140px;
    }
    .roundBtn > .icon{
        font-size: 50px;
        top: 12px;
    }
    .roundBtn > .Wayne{
        font-size: 16px;
        bottom: 10px;
    }
}
@media (max-width: 970px) {
    .oneClickerBox > :nth-child(6){
        display: grid;
    }
}
@media (min-width: 970px) {
    .roundBtnBox{
        width: calc(20% - 10px);
    }
    .roundBtn{
        width: 160px;
        height: 160px;
    }
    .roundBtn > .icon{
        font-size: 60px;
        top: 12px;
    }
    .roundBtn > .Wayne{
        font-size: 18px;
        bottom: 10px;
    }
    .oneClickerBox > :nth-child(6){
        display: none;
    }
}



</style>