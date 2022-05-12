<template>
    <nav class="navBar flex spaceBetween width100 alignItemsCenter shadow">
        <img src="../assets/images/logo-Poullaouen.jpg" alt="" class="logo">
        <div class="menu">
        
        </div>
        <ul class="navLinkBox flex alignItemsCenter">
            <li class="navLink">
                <a href="">
                    <p>MA</p>
                    <b>MAIRIE</b>
                </a>
            </li>

            <li class="separator"></li>
            
            <li class="navLink">
                <a href="">
                    <p>MON</p>
                    <b>QUOTIDIEN</b>
                </a>
            </li>
            
            <li class="separator"></li>

            <li class="navLink">
                <a href="">
                    <p>MES</p>
                    <b>SORTIES</b>
                </a>
            </li>
            
            <li class="separator"></li>

            <li class="navLink">
                <a href="">
                    <p>MES</p>
                    <b>INFOS</b>
                </a>
            </li>

            <li class="separator"></li>

            <li class="navLink">
                <a href="">
                    <p>MES</p>
                    <b>DEMARCHES</b>
                </a>
            </li>
            
        </ul>
        <p class="telNum">
            02.98.93.50.76
        </p>

        <div class="flex mobileAssets height100">
            
            <div class="centered menuDropDown relative">
                    <b class="mobileMenu">MENU</b>

                    <span class="menuArrow icon absolute">expand_more</span>
            </div>

            <div class="callBtn column flex height100">
                <p class="flex alignItemsCenter lightText call">
                    appeler <span class="telIcon icon">call</span>
                </p>

                <p class="num lightText">
                    02.98.93.50.76
                </p>
            </div>
        </div>
    </nav>
  
</template>

<script setup>
</script>

<style scoped>
.navBar{
    padding: 20px max(15px, 1.5vw);
}
@media (max-width: 300px) { 
    .call{
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
@media (min-width: 300px) { 
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
}
.navLink{
    padding: 0 max(10px, 1vw);
}
.navLink > a > p, .navLink > a > b{
    font-family: 'Montserrat';
    font-size: max(14px, 1.5vw);
}
.navLink > a > p, .menuDropDown > p {
    font-weight: 400;
    color: var(--lightblue);
}
.navLink > a > b, .menuDropDown > b {
    color: var(--darkblue);
}
.separator{
    height: max(20px, 2vw);
    border-left: 3px solid var(--brown);
}
.menuDropDown{
    height: 100%;
    background-color: var(--brown);
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
}
.telIcon{
    font-size: 30px;
}
.callBtn{
    border-radius: var(--buttonradius);
    background-color: var(--lightblue);
    padding: 5px 10px;
    margin-left: 20px;
}
.num{
    font-size: 14px;
    font-weight: 400;
}
</style>