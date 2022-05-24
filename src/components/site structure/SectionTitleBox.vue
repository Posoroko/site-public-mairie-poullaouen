<template>
    <div class="sectionTitleBox mainWidth">
        <h1>{{title}}</h1>

        <div class="stripe"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    title: String,
    color: String
})
const titleColor = ref(null)

onMounted(() => {
    titleColor.value = props.color
})


</script>

<style scoped>

.sectionTitleBox > H1{
    color: v-bind(titleColor);
    font-family: 'Oleo script';
    font-size: max(18px, 2vw);/*36px*/
    margin-top: max(30px, 3vw);
}
.stripe{
    width: max(120px, 12vw);
    height: max(8px, 0.7vw);
    background: linear-gradient(270deg, rgba(0,47,74,1) 0%, rgba(147,96,55,1) 100%); 
    border-radius: 8px;
    margin-top: 20px;
}


</style>