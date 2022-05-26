<template>
    <div class="contactWidgetBox">
        <div class="poullaouen flex spaceBetween">
            <p class="city">
                Poullaouen
            </p>
            <div class="logoBox">
                <a href="" class="icon">call</a><a href="" class="icon">mail</a><a href="" class="icon">schedule</a><a href="" class="icon">delete</a>
            </div>
        </div>
        <div class="locmaria flex">
            <p class="city">
                Locmarie-Berrien
            </p>
            <div class="logoBox">
                <a href="" class="icon">call</a><a href="" class="icon">mail</a><a href="" class="icon">schedule</a>
            </div>
        </div>
    </div>
    
  
</template>

<script setup>
import { ref, onMounted } from 'vue';


</script>

<style scoped>
.contactWidgetBox{
    margin-right: 20px;
}
.contactWidgetBox > div{
    padding: 5px;
}
.city{
    font-size: max(12px, 1vw);
    color: var(--darkblue);
}
.poullaouen{
    border-bottom: 2px solid var(--brown);
}
.logoBox > .icon{
    font-size: 18px;
    color: var(--lightblue);
    padding: 0 5px;
}
/* @media (min-width: 1080px) { 

} */

</style>