<template>
    <NavBar class="navBar" />

    <router-view />

    <Footer />
    
    </template>

    
<script setup>
import NavBar from '@/components/site structure/NavBar'
import Footer from '@/components/site structure/Footer'
</script>


<style scoped>
.navBar{
    position: fixed;
    z-index: 10;
}
</style>
