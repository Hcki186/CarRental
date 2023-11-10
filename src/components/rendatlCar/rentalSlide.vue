<template>
    <div class="RentalSlides grid">
        
                <div v-for="item in items" :key="item.id">
                   <div v-flex class="slide ">
                        <router-link style="text-decoration: none; color: inherit" :to="`/RentalCar/${item.id}`">
                            <img :src="getImg(item.images[0])" :alt="item.images" class="imgBG slideImg sizeImg">
                            <h1>{{ item.name }}</h1>
                            <div class="carSpec flexCarInfo">
                                <div class="leftSide">
                                    <div class="power flex">
                                        <img class="iconSlide" src="https://img.icons8.com/external-wanicon-lineal-wanicon/32/external-engine-car-service-wanicon-lineal-wanicon.png" alt="power"/>
                                        <p>{{ item.enginePower }}</p>
                                    </div>
                                    <div class="engin flex">
                                        <img class="iconSlide" src="https://img.icons8.com/ios/32/turbocharger.png" alt="turbocharger"/>
                                        <p>{{ item.enginType }}</p>
                                    </div>
                                    <div class="acceleration flex">
                                        <img class="iconSlide" src="https://img.icons8.com/ios/32/speed--v1.png" alt="speed--v1"/>
                                        <p>{{ item.acceleration }}</p>
                                    </div>
                                </div>
                                <div class="rightSide">
                                    <div class="Chassis flex">
                                        <img class="iconSlide" src="https://img.icons8.com/external-those-icons-lineal-those-icons/32/external-chassis-cars-components-those-icons-lineal-those-icons.png" alt="Chassis"/>
                                        <p>{{ item.Chassis }}</p>
                                    </div>
                                    <div class="gearbox flex">
                                        <img class="iconSlide" src="https://img.icons8.com/ios-glyphs/32/gearbox-selector.png" alt="gearbox-selector"/>
                                        <p>{{ item.gearbox }}</p>
                                    </div>
                                </div>
                            </div>
                        </router-link>
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