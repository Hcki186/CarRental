<template>
    <div class="navHeader">
        <div class="headerBar">
            <div class="container">
                <ul class="bar">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/RentalCar">Rental Car</router-link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><router-link to="/AboutUs">About Us</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderBar"
    }
</script>