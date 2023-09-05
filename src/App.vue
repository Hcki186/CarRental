<template>
  <div id="app">
    <div class="HomePage">
      <HeaderBar></HeaderBar>
      <HomePageText></HomePageText>
      <SearchForm></SearchForm>
    </div>
  </div>
</template>

<script>
import HeaderBar from "./components/header/header.vue"
import HomePageText from "./components/home-page/homePage.vue"
import SearchForm from "./components/home-page/searchArena.vue"

export default {
  name: 'App',
  components: {
    HeaderBar,
    HomePageText,
    SearchForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
