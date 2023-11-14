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
      
      this.log()
    
      
      
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


     log() {
      console.log(this.wantedData.images.length)
     }
      
      
      
      
      
              
      
    }
}
</script>

<style>

</style>