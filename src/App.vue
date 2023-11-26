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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.grid {
    display: grid;
    background-image: url(./assets/wallpaper_beige-pattern_repeating.jpg);
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
    margin: 10px auto;
}
</style>
