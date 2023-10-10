<template>
    <div class="homePageText ">
        <div class="welcomeText container">
            <h1>PRENÁJOM VOZIDIEL</h1>
            <p>Našim cieľom je poskytovať iba tie najlepšie služby v oblasti prenájmu vozidiel, aby 
               ste na deň prenajatia Vášho vysnívaného vozidla radi spomínali a 
               v prípade dalšieho prenájmu sa opäť s plnou dôverou obrátili práve na nás.
            </p>
            <div class="searchButton">
                <h1>
                    <router-link to="/RentalCar">Ponuka vozidiel</router-link>
                </h1>
            </div>
        </div>
        <div class="CarBG imgBG"></div>
    </div>
</template>

<script>
export default {
    name: "HomePageText"
}
</script>