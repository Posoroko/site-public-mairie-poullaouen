<template>
    <div class="carouselBox marginAuto b relative" v-if="album">
        <div class="slide center" ref="north">
            <img ref="northImg" :src="album[1].url" alt="">
        </div>
        <!-- <div class="slide" ref="aa">
            <img ref="aaImg" :src="album[1].url" alt="">
        </div> -->

        <div class="controlBox">
            <span class="icon arrow leftArrow" @click="moveLeft" name="left">arrow_left</span>
            <span class="icon arrow rightArrow" @click="moveRight" name="right">arrow_right</span>
        </div>
    </div>
    
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Pieds from '@/components/site structure/Pieds'
import salles from '@/composables/texts/sallesMunicipales'

const album = ref(null)

//keeps track of the first and last images loaded
const range = ref({
    first: 0,
    last: null
})
const north = ref(null)
const northImg = ref(null)
// const aa = ref(null)
// const aaImg = ref(null)
const liveImages = ref([])

const loadLiveImages = () => {

    for(let i = 0; i < 5; i++){
        liveImages.value[i] = album.value[i].url
        console.log(i)
        //check if end of array is reached
        if(i + 1 == album.value.length) { 
            range.value.last = i
            return
        }  
    }
}
//update liveImages
const updateLiveImages = (way) => {

}

const moveLeft = () => {
    north.value.style.transition =  "left 500ms ease"
    north.value.style.left = "-50%"
    setTimeout(() => {
        
        north.value.style.opacity = "0"
        north.value.style.transition =  ""
        north.value.style.left = "0"
        north.value.style.opacity = "1"

    }, 500)
}
const moveRight = () => {
    
}







onMounted(() => {
    album.value = salles[1].images.album
    loadLiveImages()
})
</script>

<style scoped>
.carouselBox{
    width: min(100%, 500px);
    aspect-ratio: 4/3;
}
.controlBox{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
}
.arrow{
    font-size: 25px;
    color: black;
    background-color: white;
}
.slide{
    width: 100%;
    aspect-ratio: 4/3;
    position: absolute;
}
.slide img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.left{
    left: -100%;
}
.midLeft{
    left: -50%;
}
.center{
    left: 0;
}   
.midRight{
    right: -50%;
}
.right{
    right: -100%
}
</style>