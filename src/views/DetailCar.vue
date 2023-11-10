<template>
  <div>
    <div>
      <P>TEST TEST TEST TEST {{ $route.params.id }} </P>
      <p>{{ $route.params.id }}</p>
      <p>{{ $props.id }}</p>

      <p>
        {{ wantedData.name }}
      </p>




    </div>
  </div>
</template>

<script>
import itemData from "../../Api.json"


export default {
    name: "DetailCar",
    data() {
        return {
          items: itemData,
          data: []
        }
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
      }
      
    },
    methods: {


      log(){
        console.log()
      }, 
              
      
    }
}
</script>

<style>

</style>