<template>

  <header>
    <h1>Welcome to My Website</h1>
    <nav>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/signup">Sign up</router-link></li>
    </nav>
    <router-view />
  </header>

</template>

<script>


export default {
  name: 'App',
  components: {
    
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
</style>
