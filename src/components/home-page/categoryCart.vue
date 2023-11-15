<template>
    <div class=" category">
        <div class="offerCar container">
            <h1>Ponuka vozidiel</h1>
        </div>
        <div class="categoryCart container">
            <router-link to="/RentalCar">

                <Div class="cards">
                    <div @click="eco" class="economiCard card imgBG ">
                        <p>Ekonomická</p>
                    </div>
                    <div @click="mid" class="mediumCard card imgBG">
                        <p>Stredná</p>
                    </div>
                    <div @click="lux" class="luxuryCard card imgBG">
                        <p>Luxusná</p>
                    </div>
                </Div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "categoryCart",
    
}
</script>

<style scoped>
    .category {
        display: none;
    }
</style>