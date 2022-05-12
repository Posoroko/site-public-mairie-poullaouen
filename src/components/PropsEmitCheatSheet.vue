<template>
    <h1>{{title}}</h1>
    <button @click="handleClick">Appuyer</button>
</template>



<script setup>

// in parent component:
    // <ComponentName title="Page title"/>
// ds

import { ref } from 'vue';

const emit =  defineEmits(['increment'])

defineProps([{ image: String },{ title: String }, { path: Array }])

const handleClick = () => {
    emit('increment')
}

</script>

<style scoped>

</style>