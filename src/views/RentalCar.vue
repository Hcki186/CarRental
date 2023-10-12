<template>
    <div class="RentalCar">

        <div v-for="item in items" :key="item.id" class="container">
            <p >
                {{ item.name }}
            </p>
            <img :src="getImg(item.images[0])" :alt="item.images">
        

        </div>
    </div>
</template>


<script>
    import itemData from "../../Api.json"
    

export default {
    name: "RentalCar",
    data() {
        return {items: itemData}
    },

    methods:{
        getImg: function(path) {
            return require("../assets/img/" + path )
        }
    }
}

</script>
