<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { 
    Header,
    Footer
  }
}
</script>

<style>
#app {
  background-image: url(./assets/NSwitch_AnimalCrossingNewHorizons_bg_grass.jpg);
  font-family: "Courier New", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
}
</style>
