<template>
    <PageHeader :title="pageTitle" :path="pagePath" />
    
    <main class="listOfDefaultSections">           
        <section class="defaultSection width100 flex column alignItemsCenter">

            <SectionTitleBox title="Un accès gratuit à la culture" color="var(--darkblue)" />

            <div class="defaultBandeau width100 flex center">
                <div class="defaultContentBox mainWidth flex center alignItemsCenter">
                    <div class="defaultBox defaultBox1 text centered">
                        <p class="text">
                            La médiathèque municipale de Poullaouën, ouverte depuis novembre
                            2010, est située derrière l’épicerie, rue du justiçou.

                            La médiathèque propose : la consultation de documents (libre et
                            gratuite), le prêt de documents pour adultes et enfants (livres, CD et
                            DVD).

                            Par ailleurs, des animations et expositions sont organisées
                            régulièrement, notamment le mois du film documentaire qui a lieu en
                            novembre.

                            Un point cyber avec un accès internet est également mis à la disposition
                            du public.

                            Une journée par semaine est consacrée à l’accueil de classes de l’école
                            Jules Ferry.

                            La collection disponible au sein de la médiathèque comprend 4000
                            imprimés (livres, magazines, presse), 150 DVD et 70 CD.
                        </p>
                        
                    </div>

                    <div class="defaultBox defaultBox2 text relative flex alignCenter">
                        <div class="foot">
                            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                <path class="pied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                        </div>

                        <div class="figBox absolute top right bottom left centered">
                            <figure>
                                <img class="width100" src="@/assets/images/mon_quotidien/mediatheque/mediatheque01.jpg" alt="">
                                
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="defaultSection width100 flex column alignItemsCenter">

            <SectionTitleBox title="Un accès gratuit à la culture" color="var(--darkblue)" />

            <div class="defaultBandeau width100 flex center">
                <div class="defaultContentBox mainWidth flex center alignItemsCenter">
                    <div class="defaultBox defaultBox1 text centered">
                        <p class="text">
                            La médiathèque municipale de Poullaouën, ouverte depuis novembre
                            2010, est située derrière l’épicerie, rue du justiçou.

                            La médiathèque propose : la consultation de documents (libre et
                            gratuite), le prêt de documents pour adultes et enfants (livres, CD et
                            DVD).

                            Par ailleurs, des animations et expositions sont organisées
                            régulièrement, notamment le mois du film documentaire qui a lieu en
                            novembre.

                            Un point cyber avec un accès internet est également mis à la disposition
                            du public.

                            Une journée par semaine est consacrée à l’accueil de classes de l’école
                            Jules Ferry.

                            La collection disponible au sein de la médiathèque comprend 4000
                            imprimés (livres, magazines, presse), 150 DVD et 70 CD.
                        </p>
                        
                    </div>

                    <div class="defaultBox defaultBox2 text relative flex alignCenter">
                        <div class="foot">
                            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                <path class="pied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                        </div>

                        <div class="figBox absolute top right bottom left centered">
                            <figure>
                                <img class="width100" src="@/assets/images/mon_quotidien/mediatheque/mediatheque01.jpg" alt="">
                                
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        
    </main>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@//components/site structure/SectionTitleBox'
import PageHeader from '@/components/site structure/PageHeader'

const pageTitle = ref("La médiathèque")
const pagePath = ref([{
    name: 'accueil',
    target: 'Home'
}])



</script>

<style scoped>

/* order of text and image */
.listOfDefaultSections :nth-child(odd) * * .defaultBox1{
    order: 1;
    color: var(--darkblue);
}
.listOfDefaultSections :nth-child(odd) * * .defaultBox2{
    order: 2;
}
.listOfDefaultSections :nth-child(even) * * .defaultBox1{
    order: 2;
    color: white;
}
.listOfDefaultSections :nth-child(even) * * .defaultBox2{
    order: 1;
}
/* background color */
.listOfDefaultSections :nth-child(4n+2) .defaultBandeau{
    background-color: var(--darkblue);
}
.listOfDefaultSections :nth-child(4n+4) .defaultBandeau{
    background-color: var(--brown);
}
.listOfDefaultSections :nth-child(4n+4) .defaultBandeau .defaultContentBox .defaultBox2 .foot svg .pied{
    fill: white;
}



#Calque_1{
    overflow: visible;
}
.foot{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.pied{
    fill: var(--brown);
    filter: drop-shadow(var(--boxshadow));
}
.figBox{
    padding: 15%;
}
.img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.defaultBandeau{
    padding: 30px 0;
    margin-top: 50px;
}
.text{
    text-align: justify;
    white-space: pre-wrap
}
.moreInfo{
    font-style: italic;
    font-size: 6px;
    margin-top: 20px;
}
.defaultBox{
    padding: 20px;
}
.defaultBox1{
    width: min(100%, 595px);
}
.defaultBox1 > p {
    font-size: max(15px, 1.25vw);
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
}
.defaultBox2{
    width: min(100%, 595px);
}
@media (max-width: 1200px){
    .defaultSectionsBox :nth-child(1) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(4) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(6) .defaultBandeau .defaultContentBox,
    .listOfDefaultSections :nth-child(even) .defaultBandeau .defaultContentBox{
        flex-direction: column;
    }
    .defaultSectionsBox :nth-child(3) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(5) .defaultBandeau .defaultContentBox,
    .defaultSectionsBox :nth-child(8) .defaultBandeau .defaultContentBox,
    .listOfDefaultSections :nth-child(odd) .defaultBandeau .defaultContentBox{
        flex-direction: column-reverse;
    }
}
@media (min-width: 1201px){
    .defaultContentBox{
        flex-direction: row;
    }
}

</style>