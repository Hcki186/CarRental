<template>
    <div>
        <div class="filter container">
            <h2>Kategria Auta</h2>
            <div class="flex">
                <label class="flex">
                    <input  type="checkbox" value="Ekonomicka" v-model="categorys" categorys>
                    <p>Ekonomicka</p>
                </label>
                <p>|</p>
                <label class="flex">
                    <input  type="checkbox" value="Stredna" v-model="categorys" categorys>
                    <p>Stredna</p>
                </label>
                <p>|            </p>
                <label class="flex">
                    <input  type="checkbox" value="Luxury" v-model="categorys" categorys>
                    <p>Luxury</p>
                </label>
            </div>
        </div>
        <div class="RentalSlides grid">
            <div v-for="item in filterCategory" :key="item.id" >
                <div class="slide ">
                    <router-link  style="text-decoration: none; color: inherit" :to="`/RentalCar/${item.id}`">
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
    </div>
</template>


<script>
    import itemData from "../../../Api.json"
    import slideParameters from "./slideParameters.vue"
    
    export default {
        name: "RentalSlides",

        data() {
            return {
                items: itemData,
                categorys: [],
            }
        },

        comments: {
            slideParameters
        },

        computed: {

            filterCategory() {
                if(this.categorys.length === 0 ) {
                    return this.items
                } 
                else {
                    return this.items.filter((i) => {
                        return i.vehicleClass == this.categorys
                    })
                }
            }

        },

        methods:{
            getImg: function(path) {
                return require("@/assets/img/" + path )
            },
        }
    }
</script>