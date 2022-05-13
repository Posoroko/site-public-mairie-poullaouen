<template>
    <footer class="width100 relative flex center">
        <section class="mainWidth relative flex spaceAround">
            <div class="leftBox">
                <address>
                    <p class="poullaouen">Poullaouen</p>

                    <p class="address flexAlign"> <span class="icon adIcon">pin_drop</span> 1 Place de la Mairie - 29246 Poullaouen</p>

                    <a href="tel:+33298935076" class="tel"><span class="icon adIcon">call</span>02.98.93.50.76</a>

                    <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="mail"> <span class="icon adIcon">alternate_email</span> mairie-de-poullaouen@wanadoo.fr</a>

                    <p class="horraire"> <span class="icon adIcon">schedule</span> Du lundi au vendredi <br>
                        de 8h30 à 12h et de 13h30 à 17h30 <br>
                        Fermée au public le mercredi après-midi</p>
                </address>
            </div>

            <div class="centerBox">
                <img src="@/assets/images/logo-poullaouen.svg" alt="">
                
                <a href="www.facebook.com/mairiedepoullaouen" class="button flexAlign center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="width100 iconBox"> <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                    <span class="centered">Suivez-nous!</span>
                </a>
                <a href="mailto:mairie-de-poullaouen@wanadoo.fr" class="button centered">Envoyer un mail</a>
                <a href="www.poher-communauté.com" class="button centered">Poher communauté</a>

            </div>

            <div class="rightBox">
                <address>
                    <p class="poullaouen">Locmaria-Berrien</p>

                    <p class="address flexAlign"> <span class="icon adIcon">pin_drop</span>3 rue Ti Ker - 29690 Locmaria - Berrien</p>

                    <a href="tel:+33298997309" class="tel"><span class="icon adIcon">call</span>02.98.99.73.09</a>

                    <a href="mailto:mairie.locmaria-berrien@orange.f r" class="mail"> <span class="icon adIcon">alternate_email</span>mairie.locmaria-berrien@orange.f r</a>

                    <p class="horraire"> <span class="icon adIcon">schedule</span> Lundi de 8h30 à 12h <br>
                        Jeudi de 13h30 à 17h30</p>
                </address>

            </div>
        </section>
        <img class="absolute" src="@/assets/images/vague.svg">
    </footer>
</template>

<script setup>

</script>

<style scoped>
    footer{
        height: 80vh;
        margin-top: 100px;
    }
    .leftBox, .rightBox{
        width: 40%;
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .rightBox{
        padding-left: 50px;
    }
    .centerBox{
        width: 20%;
         margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .poullaouen{
        font-size: 30px;
        font-style: normal;
        padding-left: 50px;
    }
    .address, .tel, .mail, .horraire {
        font-size: 18px;
        font-style: normal;
        padding-left: 50px;
        margin-top: 10px;
        display: block;
        position: relative;
    }
    .adIcon{
        font-style: normal;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .centerBox > a {
        height: 50px;
        color: white;
        background-color: var(--darkblue);
        border-radius: 25px;
        margin-top: 20px;

    }
    .iconBox{
        width: 50px;
        height: 30px;
        fill: white;
    }

</style>