<template>
    <section class="width100 flex column alignItemsCenter">

            <SectionTitleBox :title="content.title" :color="styles.titleColor" />

            <div class="sectionBandeau width100 flex center">
                <div class="contentBox mainWidth flex center alignItemsCenter">
                
                    <div class="box sectionBox1 text centered">
                        <p v-html="content.text"></p>
                    </div>

                    <div class="box sectionBox2 text relative flex alignCenter">
                        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve">
                                <g>
                                    <path class="defaultSectionPied leftFoot"  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/>
                                    <path class="defaultSectionPied rightFoot"  d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/>
                                </g>
                            </svg>
                        <div class="figBox absolute top right bottom left centered">
                            <figure>
                                <img class="width100" src="@/assets/images/mairie.jpg" alt="">
                                
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

    </section>


</template>

<script setup>
import { onMounted, ref } from 'vue'
import SectionTitleBox from '@/components/site structure/SectionTitleBox'
import Pieds from '@/components/site structure/Pieds'

const props = defineProps({
    styles: Object,
    content: Object
})


const titleColor = ref('')
const textColor = ref('')
const backgroundColor = ref('')
const imagePosition = ref('')
const textPosition = ref('')
const footColor = ref('')
const columnDirection = ref('')

onMounted(() => {
    titleColor.value = props.styles.titleColor
    textColor.value = props.styles.textColor
    backgroundColor.value = props.styles.backgroundColor
    footColor.value = props.styles.footColor
    imagePosition.value = props.styles.imagePosition
    textPosition.value = props.styles.textPosition
    if(imagePosition.value == '2'){
        columnDirection.value = 'column-reverse'
    } else{
        columnDirection.value = 'column'
    }
})

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
    margin-top: 50px;
}
.text{
    color: v-bind(textColor);
    text-align: justify;
}
.box{
    padding: 20px;
}
.box1{
    width: min(100%, 595px);
    order: v-bind(textPosition);
}
.box1 > p {
    font-size: max(15px, 1.25vw);
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
}
.box2{
    width: min(100%, 595px);
    order: v-bind(imagePosition);
}
@media (max-width: 1200px){
    .contentBox{
        flex-direction: v-bind(columnDirection);
    }
}
@media (min-width: 1201px){
    .contentBox{
        flex-direction: row;
    }
}

</style>