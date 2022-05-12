<template>
    <nav class="navBar flex spaceBetween width100 alignItemsCenter shadow relative">
        <img src="@/assets/images/logo-Poullaouen.jpg" alt="" class="logo">
        <div class="menu">
        
        </div>
        <ul class="navLinkBox flex alignItemsCenter">
            <li class="navLink pointer" name="mairie" @click.prevent="openMenu">
                    <p>MA</p>

                    <b>MAIRIE</b>
            </li>

            <li class="separator"></li>
            
            <li class="navLink pointer" name="quotidien" @click.prevent="openMenu">
                    <p>MON</p>

                    <b>QUOTIDIEN</b>
            </li>
            
            <li class="separator"></li>

            <li class="navLink pointer" name="sorties" @click.prevent="openMenu">
                    <p>MES</p>

                    <b>SORTIES</b>
            </li>
            
            <li class="separator"></li>

            <li class="navLink pointer" name="infos" @click.prevent="openMenu">
                    <p>MES</p>

                    <b>INFOS</b>
            </li>

            <li class="separator"></li>

            <li class="navLink pointer" name="demarches" @click.prevent="openMenu">
                    <p>MES</p>

                    <b>DEMARCHES</b>
            </li>
            
        </ul>
        <p class="telNum">
            02.98.93.50.76
        </p>

        <div class="flex mobileAssets height100">
            <div class="centered menuDropDown relative shadow pointer" @click="tabMenuIsOn = true, menuDisplayTexts = null">
                    <b class="mobileMenu">MENU</b>

                    <span class="menuArrow icon absolute">expand_more</span>
            </div>

            <div class="callBtn column flex height100 shadow pointer">
                <p class="flex alignItemsCenter lightText call">
                    appeler <span class="telIcon icon">call</span>
                </p>

                <p class="num lightText">
                    02.98.93.50.76
                </p>
            </div>
        </div>

        <div class="menuBox width100 height100 absolute centered">

            <ul class="tabMenu relative" v-if="tabMenuIsOn == true">
                <span class="absolute topRightIcon icon" @click.prevent="tabMenuIsOn = false, menuDisplayTexts = null">close</span>
                
                <li class="pointer" name="mairie" @click.prevent="openMenu">
                        <p>MA</p>

                        <b>MAIRIE</b>
                </li>
                
                <li class="pointer" name="quotidien" @click.prevent="openMenu">
                        <p>MON</p>

                        <b>QUOTIDIEN</b>
                </li>

                <li class="pointer" name="sorties" @click.prevent="openMenu">
                        <p>MES</p>

                        <b>SORTIES</b>
                </li>

                <li class="pointer" name="infos" @click.prevent="openMenu">
                        <p>MES</p>

                        <b>INFOS</b>
                </li>

                <li class="pointer" name="demarches" @click.prevent="openMenu">
                        <p>MES</p>

                        <b>DEMARCHES</b>
                </li>
            </ul>
            
            <div class="slidingBox panel relative"  v-if="menuDisplayTexts">
                <div class="menuImgBox">
                    <img src="@/assets/images/mairie.jpg" alt="">
                </div>

                <ul>
                    <li class="menuItem " v-for="text in menuDisplayTexts" :key="text.text">
                        <router-link class="link" :to="text.target">{{text.text}}</router-link>
                    </li>
                </ul>
                <span class="absolute topRightIcon icon" @click.prevent="menuDisplayTexts = null">close</span>
            </div>
        </div>
        
    </nav>
    
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { menuTexts } from '@/composables/texts/texts'
const menuDisplayTexts = ref(null)

const menuImage = ref('')
const tabMenuIsOn = ref(false)
const openTabMenu = () => {

}

const openMenu = (e) => {
    console.log(e.target.getAttribute('name'))
    menuDisplayTexts.value = menuTexts[e.target.getAttribute('name')]
    tabMenuIsOn.value = false
}

</script>

<style scoped>
.navBar{
    background-color: #fff;
    padding: 20px 0;
    height: 15vh;
}
@media (max-width: 345px) { 
    .call, .menuArrow{
        display: none;
    }
    .mobileAssets{
        flex-direction: column-reverse;
        align-items: flex-end;
    }
    .menuDropDown{
        font-size: 30px;
        margin-top: 5px;
    }
}
@media (min-width: 346px) { 
    .menu{
        font-size: 40px;
        margin-right: 20px;
    }
}

@media (max-width: 700px) { 
    .menu, .mobileAssets{
        display: flex;
    }
    .navLinkBox, .telNum {
        display: none;
    }
}
@media (min-width: 701px) { 
    .menu, .mobileAssets{
        display: none;
    }
    .navLinkBox{
        display: flex;
    }
    .telNum{
        display: block;
    }
}
.logo{
    height: max(50px, 4.5vw);
    margin-left: max(15px, 1.5vw);
}
.navLink > p, .navLink > b, .tabMenu > li > *{
    pointer-events: none;
}
.navLink > p, .navLink > b, .telNum{
    font-family: 'Montserrat';
    font-size: max(12px, 1.5vw);
}
.navLink > p, .menuDropDown > p, .tabMenu > li > p {
    font-weight: 400;
    color: var(--lightblue);
}
.navLink > b, .menuDropDown > b, .tabMenu > li > b {
    color: var(--darkblue);
}
.separator{
    height: max(20px, 2vw);
    border-left: 3px solid var(--brown);
    margin: 0 2.3vw;
}
.mobileAssets{
    margin-right: max(15px, 1.5vw);
}
.menuDropDown{
    height: 100%;
    /* background-color: var(--brown); */
    background-color: #936037;
    background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");

    border-radius: var(--buttonradius);
    padding: 0px 20px
}
.menuDropDown > .separator{
    margin-right: 15px;
}
.menuArrow{
    bottom: 0;
}
.menuDropDown > .mobileMenu, .menuDropDown > *{
    color: white;
    font-size: 20px;
}
.telNum{
    color: var(--darkblue);
    font-weight: 800;
    margin-right: max(15px, 1.5vw);
}
.telIcon{
    font-size: 30px;
}
.callBtn{
    border-radius: var(--buttonradius);
    /* background-color: var(--lightblue); */
    background-color: #0080c9;
    background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
    padding: 5px 10px;
    margin-left: 20px;
}
.num{
    font-size: 14px;
    font-weight: 400;
}
.menuBox{
    z-index: -1;
    transform: translateY(100%);
}
.menuImgBox{
    border-radius: var(--panelradius);
    overflow: hidden;
}
.menuImgBox > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.slidingBox{
    background-color: #fff;
    border-radius: var(--panelradius);
    margin-top: 20px;
    padding: 20px 50px 20px 20px;
    display: flex;
}
.menuItem{
    color: var(--darkblue);
    
    border-bottom: 1px solid var(--brown);
}
.menuItem > a, .menuItem > a:visited, menuItem > a:active{
    color: var(--darkblue);
}
@media (max-width: 500px) {
    .slidingBox{
        width: 90vw;
    }
    .menuItem{
        font-size: max(18px, 1vw);
        padding: 6px;
    }
}
@media (max-width: 1080px) { 
    .slidingBox{
        flex-direction: column;
    }
    .slidingBox > ul{
        padding-top: 20px;
    }
    .menuImgBox{
        width: 150px;
        height: 100px;
    }
}
@media (min-width: 1080px) { 
    .menuItem{
        font-size: 22px;
        padding: 6px;
    }
    .slidingBox{
        flex-direction: row;
    }
    .slidingBox > ul{
        padding-left: 20px;
    }
    .menuImgBox{
        width: 300px;
        top: 0;
        bottom: 0;
    }
}
.tabMenu{
    background-color: #fff;
    padding: 20px;
    border-radius: var(--panelradius);
    margin-top: 20px;
}
.tabMenu > li {
    margin-top: 10px;
}
.tabMenu > li > * {
    font-size: 24px;
    margin-top: 10px;
}
</style>