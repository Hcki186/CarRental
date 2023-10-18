<template>
    <div class="RentalCar">
        <RentalInfo></RentalInfo>
        <RetalSlide></RetalSlide>
    </div>
</template>


<script>
    import RentalInfo from "@/components/rendatlCar/rentalInfo.vue"
    import RetalSlide from "@/components/rendatlCar/rentalSlide.vue"
    
    

export default {
    name: "RentalCar",
    components: {
        RentalInfo,
        RetalSlide
    }
}

</script>
