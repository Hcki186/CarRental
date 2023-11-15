<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <router-view  />
    <FooterContact></FooterContact>
  </div>
</template>

<script>
import HeaderBar from "./components/header/header.vue";
import FooterContact from "./components/footer/footer.vue"

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterContact
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  position: relative;
  min-height: 100vh;
}

</style>
