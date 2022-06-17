<template>
    <!-- <div class="defaultSectionListBox width100"> -->
        <section class="defaultSection width100 flex column alignItemsCenter"  v-for="item in items" :key="item.id">

            <div class="width100" v-if="item.title">
                <SectionTitleBox :title="item.title" color="var(--darkblue)" />
            </div>

            <div class="defaultSectionBandeau width100 flex center">
                <div class="defaultSectionContentBox mainWidth flex center alignItemsCenter">
                    <div class="defaultSectionBox defaultSectionBox1">
                        <p class="defaultSectionSubtitle">{{ item.subTitle }}</p>
                        <p class="defaultSectionText">{{item.text}}</p>
                        <p class="defaultSectionMoreInfo"> {{item.moreInfo}}</p>
                    </div>

                    <div class="defaultSectionBox defaultSectionBox2 text relative flex alignCenter">
                        <div class="defaultSectionFoot">
                            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
                                <path class="defaultSectionPied "  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="defaultSectionPied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
                        </div>
                        <div class="defaultSectionFigBox absolute top right bottom left centered">
                            <figure v-if="item.photo">
                                <img 
                                class="width100 pointer" 
                                :src="directusAddress + '/assets/' + item.photo + '.jpg'" 
                                :alt="item.alt"
                                @click="showImageInModal">
                            </figure>
                        </div>
                    </div>
                </div>

            </div>    
        </section>
    <!-- </div> -->

    <dialog ref="modal" class="modalImage marginAuto"  @click="modal.close()">
        <img :src="requestedImage">
        <span class="icon absolute top right">close</span>
    </dialog>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@//components/site structure/SectionTitleBox'

import { directusAddress } from '@/directus/config'

const requestedImage = ref('')
const modal = ref(null)

const showImageInModal = (e) => {
    requestedImage.value = e.target.getAttribute('src')
    modal.value.showModal()
}


const props = defineProps({
    items: Object
})




</script>

<style scoped>
.defaultSectionSubtitle{
    font-size: max(17px, 1.4vw);
    font-weight: 600;
    text-align: left;
}
.defaultSectionMoreInfo{
    font-style: italic;
    font-size: clamp(12px, 1.5vw, 20px);
    margin-top: 20px;
}
.defaultSectionBox1 > .defaultSectionText {
    font-size: clamp(12px, 1.5vw, 20px);
    font-weight: 300;
    letter-spacing: 0.2px;
    line-height: 30px;
    text-align: justify;
    margin-top: 20px;
}
</style>