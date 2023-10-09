<template>
  <div class="HomePage ">
      <HomePageText></HomePageText>
      <categoryCart></categoryCart> 
    </div>
</template>

<script>
import HomePageText from "@/components/home-page/homePage.vue"
import categoryCart from "@/components/home-page/categoryCart.vue"


export default {
  name: 'HomePage',
  components: {
    HomePageText,
    categoryCart
  }

}
</script>

<style>

</style>