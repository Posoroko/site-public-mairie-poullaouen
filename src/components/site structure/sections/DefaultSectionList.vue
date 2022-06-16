<template>
    <div class="defaultSectionListBox width100">
        <section class="defaultSection width100 flex column alignItemsCenter"  v-for="item in items" :key="item.id">

            <SectionTitleBox :title="item.title" color="var(--darkblue)" />

            <div class="defaultSectionBandeau width100 flex center">
                <div class="defaultSectionContentBox mainWidth flex center alignItemsCenter">
                    <div class="defaultSectionBox defaultSectionBox1 centered">
                        <p class="defaultSectionSubtitle">{{ item.subtitle }}</p>
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
                                <img class="width100" :src="directusAddress + '/assets/' + item.photo + '.jpg'" :alt="item.alt">
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitleBox from '@//components/site structure/SectionTitleBox'

import { directusAddress } from '@/directus/config'

const props = defineProps({
    items: Object
})




</script>

<style scoped>


</style>