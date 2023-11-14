<template>
  <div class="carouselWrapper">
    <slot></slot>

    <button @click="next" class="next">&#62;</button>
    <button @click="prev" class="prev">&#60;</button>
  </div>
</template>

<script>
  export default {
    name: "carouselWrapper",


    methods: {
      
      next() {
        this.$emit("next")
      },

      prev() {
        this.$emit("prev")
      },
    }
}

  

</script>

<style>

</style>