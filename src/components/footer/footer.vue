<template>
    <div class="footerContact">
        <div class="content container">
            <div class="information">
                <ul class="company">
                    <h1>Company</h1>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/AboutUs">About Us</router-link></li>
                    <li><router-link to="/RentalCar">Rental Car</router-link></li>
                </ul>
                <ul id="contact">
                    <h1>Contact</h1>
                    <li><a href="mailto: company@gmail.com">company@gmail.com</a></li>
                    <li><a href="tel: 0915718986">0915718986</a></li>
                </ul>
            </div>
            <div class="rights">
                <p>All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterContact"
    }
</script>