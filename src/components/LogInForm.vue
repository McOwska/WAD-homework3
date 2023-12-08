<template>
  <form class="form" @submit.prevent="loginUser">
    <h1 id="header">Welcome Back!</h1>
    <h2>Log in to Your Account</h2>
    <input class="input" v-model="username" placeholder="Username" type="text" required>
    <input class="input" v-model="password" placeholder="Password" type="password" required>
  <br/>
    <button class="confirm-button" :disabled="password.length === 0 || username.length === 0">Log In</button>
    <p v-if="loginError" style="color: red">{{ loginError }}</p>
  </form>
</template>
  
<script>
export default {
  name: "AppLoginForm",
  data() {
    return {
      username: '',
      password: '',
      loginError: '',
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch('http://localhost:3010/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.username,  // Dealing with different names of properties in db and endpoint
            password: this.password,
          }),
          credentials: 'include', 
        });

        if (!response.ok) {
          const result = await response.json();
          throw new Error(result.error || 'Failed to log in');
        }

        const result = await response.json();
        console.log('Login successful, user ID:', result.user_id);
        this.$router.push('/');

      } catch (error) {
        console.error(error);
        this.loginError = error.message;
      }
    }
  },
};
</script>
  
<style scoped>
.form {

  max-width: 330px;
  padding: 5%;
  margin: auto;
  text-align: center;
  text-shadow: 1px 1px 4px rgb(61, 38, 22);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 8px solid rgba(255, 255, 255, 0.658);
}

.input {
  width: auto;
  display: inline-block;
  text-align: left;
  border-width: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  margin: 5px;
}

textarea {
  max-width: 80%;
  min-width: 80%;
  min-height: 5%;
  text-align: justify;
  border-width: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 15px;
  margin: 5px;
}

.confirm-button {
  background-color: rgb(117, 180, 146);
  color: white;
  width: auto;
  text-align: center;
  border-width: 4px;
  padding: 4px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 30px;
}

h1 {
  color: rgba(47, 47, 150);
  font-size: 30px;
}

h2 {
  color: rgb(38, 129, 52);
}
</style>
  