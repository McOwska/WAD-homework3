<template>
  <header>
    <router-link to="/">
      <div class="navbutton">Home</div>
    </router-link>
    <router-link to="/">
      <div class="navbutton" @click="logoutUser">Log out</div>
    </router-link>
    <img id="useraccountIcon" class="icon" src="../assets/user_Isabelle1.png" alt="Big icon">
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    async logoutUser() {
      try {
        const response = await fetch('http://localhost:3010/auth/logout', {
          method: 'GET', // Metoda GET jest wystarczająca dla tego endpointu
          credentials: 'include' // Wysyłanie cookies z żądaniem
        });

        if (!response.ok) {
          throw new Error('Failed to log out');
        }

        // Przekierowanie po pomyślnym wylogowaniu
        this.$router.push('/signup');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  }
}
</script>


<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-image: url(../assets/bg_grainy_gradient.png);
  background-size: 100%;
  border-radius: 35px;
  border: 6px solid rgba(255, 255, 255, 0.658);
}

.icon {
  max-width: 100%;
  height: 120px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.358);
  margin-top: 3px;
  margin-bottom: 10;

}


#useraccountIcon {
  cursor: pointer;
}

h1 {
  color: #333;
  margin: 0;
}

.navbutton {
  padding: 10px 15px;
  border-radius: 20%;
  border: 6px solid rgba(255, 255, 255, 0.258);
  margin: 20px;
  text-decoration: none;
  text-align: center;
  display: block;
  color: black;
}

.nav {
  display: flex;
  align-items: center;
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
