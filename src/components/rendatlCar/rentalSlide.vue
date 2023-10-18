<template>
    <div class="RentalSlides">

        <div v-for="item in items" :key="item.id" class="container">
           <div class="slide">
               <img :src="getImg(item.images[0])" :alt="item.images" class="imgBG slideImg">
                <p>{{ item.name }}</p>
            </div>

            
        </div>     
           
    </div>
</template>


<script>
    import itemData from "../../../Api.json"
    
    

export default {
    name: "RentalSlides",

    data() {
        return {items: itemData}
    },

    methods:{
        getImg: function(path) {
            return require("@/assets/img/" + path )
        }
    }
}

</script>