<template>
  <div> 
    
    <carouselWrapper 
        @next="next" 
        @prev="prev"
      >
      <carouselSlide v-for="(item, index) in wantedData.images" 
          :key="item" 
          :index="index" 
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
        <img :src="require(`@/assets/img/${item}`)" alt=""> 
      </carouselSlide>
    </carouselWrapper>

    <div class="container">
      <div class="detailInfo">
        <h1>{{ wantedData.name }}</h1>
        <div class="gridDetail">

          <div class="parameters ">
            <h2>PARAMETRE</h2>
            <div class="spcLeft flex">
              <div class="left">
                <div class="flex flexStart">
                  <img class="iconSlide" src="https://img.icons8.com/external-wanicon-lineal-wanicon/32/external-engine-car-service-wanicon-lineal-wanicon.png" alt="power"/>
                  <p>
                    {{ wantedData.enginePower }}
                  </p>
                </div>
                <div class="flex flexStart">
                  <img class="iconSlide" src="https://img.icons8.com/ios/32/turbocharger.png" alt="turbocharger"/>
                  <p>
                    {{ wantedData.enginType }}
                  </p>
                </div>
                <div class="flex flexStart">
                  <img class="iconSlide" src="https://img.icons8.com/ios/32/speed--v1.png" alt="speed--v1"/>
                  <p>
                    {{ wantedData.acceleration }}
                  </p>
                </div>
              </div>
              <div class="right">
                <div class="flex flexStart">
                  <img class="iconSlide" src="https://img.icons8.com/ios-glyphs/32/gearbox-selector.png" alt="gearbox-selector"/>
                  <p>
                    {{ wantedData.gearbox }}
                  </p>
                </div>
                <div class="flex flexStart">
                  <img class="iconSlide" src="https://img.icons8.com/external-those-icons-lineal-those-icons/32/external-chassis-cars-components-those-icons-lineal-those-icons.png" alt="Chassis"/>
                  <p>
                    {{ wantedData.Chassis }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="price flex">
            <div class="left">
              <h2>DNI</h2>
                <p v-for="days in wantedData.prices.day" 
                  :key="days"
                  >
                  {{ days }}
                </p>
            </div>
            <div class="right">
              <h2>€ / DEŇ</h2>
                <p v-for="price in wantedData.prices.price" 
                    :key="price"
                    >
                    {{ price }}
                </p>
            </div>
          </div>

          <div class="descriptionCar">
            <h2>POPIS VOZIDLA</h2>
            <div class="spcLeft">
              <h3>{{ wantedData.descriptionTitle }}</h3>
              <p>{{ wantedData.description }}</p>
              <h3>{{ wantedData.equipmentTitle }}</h3>
              <p>{{ wantedData.equipment }}</p>
            </div>
          </div>

          <div class="conditions">
            <h2>PODMIENKY</h2>
            <div class="flex">
              <div class="left">
                <p v-for="rules in wantedData.conditions.rules"
                  :key="rules"
                >
                {{ rules }}
                </p>
              </div>
              <div class="right">
                <p v-for="condition in wantedData.conditions.condition"
                  :key="condition"
                >
                {{ condition }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemData from "../../Api.json"
import carouselWrapper from "@/components/detailCar/carouselWrapper.vue"
import carouselSlide from "@/components/detailCar/carouselSlide.vue"


export default {
    name: "DetailCar",
    data() {
        return {
          items: itemData,
          visibleSlide: 0,
          direction: "left",
          
        }
    }, 

    components: {
      carouselWrapper,
      carouselSlide,
      
    },

    props: {
    id: {
        type: String,
        default: "0",
      },
    },
    mounted() {
      
      
      
      
      
    },
    
    computed: {

      wantedData() {
        return this.items.find((i) =>{
          return i.id == this.$router.currentRoute.params.id
          
        })
      },

      slidesLen() {
        return this.wantedData.images.length;
      },
      
    },
    methods: {
      
      next() {
        if(this.visibleSlide >= this.slidesLen - 1  ) {
          this.visibleSlide = 0;
        }else {
          this.visibleSlide++;
        }
        this.direction = "left"
      },

      prev() {
        if(this.visibleSlide <= 0) {
          this.visibleSlide = this.slidesLen - 1 ;
        }else {
          this.visibleSlide--;
        }
        this.direction = "right"
      },       
      
    }
}
</script>

<style>

</style>