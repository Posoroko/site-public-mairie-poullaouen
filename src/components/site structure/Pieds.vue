<template>
    <div class="foot">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 692.1 615.2" style="enable-background:new 0 0 692.1 615.2;" xml:space="preserve"><g>
            <path class="pied"  d="M192,0l98.5,43.3L135,397.2l173.7,76.3l-36.5,83L0,436.9L192,0z"/><path class="pied" d="M294.7,150.3L399.5,126l87.3,376.6l184.8-42.9l20.5,88.3l-289.6,67.2L294.7,150.3z"/></g></svg>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    color: String
})

// const color = ref(null)
// onMounted(() => {
//     color.value = props.color
// })
</script>

<style>
#Calque_1{
    overflow: visible;
}
.foot{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.pied{
    fill: v-bind('color');
    filter: drop-shadow(var(--boxshadow));
}
</style>