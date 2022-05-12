<template>
    <NavBar class="navBar" />

    <router-view />

</template>
<script setup>
import NavBar from '@/components/site structure/NavBar'

</script>


<style scoped>
.navBar{
    z-index: 10;
}
</style>
