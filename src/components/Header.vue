<template>
  <header>
    <h1>Header</h1>
    <nav>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/signup">Sign up</router-link></li>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style scoped>
header {
    padding: 10px;
    background-image: url(../assets/bg_grainy_gradient.png);
    background-size: 100%;
    border-radius: 35px;
    align-items: center;
    border: 6px solid rgba(255, 255, 255, 0.658);
}

h1 {
  color: #333;
  margin: 0;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  display: inline-block;
  margin-right: 10px;
}

nav ul li a {
  text-decoration: none;
  color: #333;
}
</style>
