<template>
    <div class="menuBigBox width100 relative">
        <img class="paintBackground" src="@/assets/images/mon_quotidien/ecole/visuel-taches-de-peinture.svg" alt="">

        <div class="menuBox spaceBetween" v-if="schoolMenu">
            <div class="arrowBox">
                <span class="icon arrow" name="left" @click="navigateMenu">
                    arrow_left
                </span>
            </div>

            <div class="dayBox mondayBox" v-if="displayedDay == 0">
                <p class="dayName">Lundi</p>
                <p class="mealCourse">{{ schoolMenu.monday.starter }}</p>
                <p class="mealCourse">{{ schoolMenu.monday.main }}</p>
                <p class="mealCourse">{{ schoolMenu.monday.dessert }}</p>
            </div>

            <div class="dayBox tuesdayBox" v-if="displayedDay == 1">
                <p class="dayName">Mardi</p>
                <p class="mealCourse">{{ schoolMenu.tuesday.starter }}</p>
                <p class="mealCourse">{{ schoolMenu.tuesday.main }}</p>
                <p class="mealCourse">{{ schoolMenu.tuesday.dessert }}</p>
            </div>

            <div class="dayBox thursdayBox" v-if="displayedDay == 2">
                <p class="dayName">Jeudi</p>
                <p class="mealCourse">{{ schoolMenu.thursday.starter }}</p>
                <p class="mealCourse">{{ schoolMenu.thursday.main }}</p>
                <p class="mealCourse">{{ schoolMenu.thursday.dessert }}</p>
            </div>

            <div class="dayBox fridayBox" v-if="displayedDay == 3">
                <p class="dayName">Vendredi</p>
                <p class="mealCourse">{{ schoolMenu.friday.starter }}</p>
                <p class="mealCourse">{{ schoolMenu.friday.main }}</p>
                <p class="mealCourse">{{ schoolMenu.friday.dessert }}</p>
            </div>
            <div class="arrowBox">
                <span class="icon arrow" name="right" @click="navigateMenu">
                    arrow_right
                </span>
            </div>
        </div>
        <div class="bigMenuBox" v-if="schoolMenu">
            <div class="row">
                <p class="cell dayName">Lundi</p>
                <p class="cell dayName">Mardi</p>
                <p class="cell dayName">Jeudi</p>
                <p class="cell dayName">Vendredi</p>
            </div>

            <div class="row startersBox">
                <p class="cell mealCourse">{{ schoolMenu.monday.starter }}</p>
                <p class="cell mealCourse">{{ schoolMenu.tuesday.starter }}</p>
                <p class="cell mealCourse">{{ schoolMenu.thursday.starter }}</p>
                <p class="cell mealCourse">{{ schoolMenu.friday.starter }}</p>
            </div>

            <div class="row mainsBox">
                <p class="cell mealCourse">{{ schoolMenu.monday.main }}</p>
                <p class="cell mealCourse">{{ schoolMenu.tuesday.main }}</p>
                <p class="cell mealCourse">{{ schoolMenu.thursday.main }}</p>
                <p class="cell mealCourse">{{ schoolMenu.friday.main }}</p>
            </div>

            <div class="row dessertsBox">
                <p class="cell mealCourse">{{ schoolMenu.monday.dessert }}</p>
                <p class="cell mealCourse">{{ schoolMenu.tuesday.dessert }}</p>
                <p class="cell mealCourse">{{ schoolMenu.thursday.dessert }}</p>
                <p class="cell mealCourse">{{ schoolMenu.friday.dessert }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import directusRefs from '@/directus/directusRefs'
import { directus } from '@/directus/config'

const displayedDay = ref(0)
const navigateMenu = (e) => {
    if(e.target.getAttribute('name') == 'left'){
        if(displayedDay.value > 0){
            displayedDay.value--
        }
    } else{
        if(displayedDay.value < 3){
            displayedDay.value++
        }
    }
}

// get menu

const schoolMenu = ref(null)
directus.items('Ecole').readOne('julesFerry').then(res => {
    schoolMenu.value = JSON.parse(res.menu)
}).catch(err => {
    console.log(err.message)
})

</script>

<style scoped>
.arrowBox{
    display: grid;
    place-items: center;
}
.arrow{
    line-height: 30px;
    border-radius: 50%;
    background-color: white;
    font-size: 30px;
}
.bigMenuBox{
    margin: 100px;
    border: 1px solid white;
    display: block;
}
.menuBox{
    /* border: 4px solid white; */
    padding: 20px;
    margin: 50px 0;
}
@media (max-width: 949px){
    .bigMenuBox{
        display: none;
    }
    .menuBox{
        display: flex;
    }
}
@media (min-width: 950px){
    .bigMenuBox{
        display: block;
    }
    .menuBox{
        display: none;
    }
}
.row{
    widows: 100%;
    display: flex;
    /* justify-content: space-between; */
    border: 1px solid white;
}
.row p{
    color: var(--lighttext);
}
.cell{
    width: 25%;
    padding: 20px;
    display: grid;
    place-items: center;
    border: 1px solid white;
}
.paintBackground{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
}

.dayBox{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.dayName{
    font-size: 22px;
    font-weight: 600;
}
.mealCourse{
    font-size: clamp(14px, 1.5vw, 20px);
    white-space: pre-wrap;
}
.dayBox p{
    min-height: 25%;
    color: var(--lighttext);
    border: 1px solid white;
    display: grid;
    place-items: center;
    padding: 15px 10px;
}

</style>