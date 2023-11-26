<template>
  <form class="form">
    <h1 id="header">Welcome, traveler!</h1>
    <h2>Create an account</h2>
    <input class="input" placeholder="email or username" type="text">
    <input class="input" v-model="password" @input="validatePassword" placeholder="password" type="password" required><br>
    <ul v-if="passwordErrors.length">
      <li v-for="(error, index) in passwordErrors" :key="index" style="color: red" requires>{{ error }}</li>
    </ul>
    <button @click="navigateHome" class="confirm-button" :disabled="passwordErrors.length > 0 || password.length === 0">Log in</button>

  </form>
</template>


<script>
export default {
  name: "AppSignUpForm",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      dummyText: 'Sign up here, dummy text',
      password: '',
      passwordErrors: [],
    };
  },
  methods: {
    validatePassword() {
      this.passwordErrors = [];

      if (this.password.length < 8 || this.password.length > 15) {
        this.passwordErrors.push("Password must be between 8 and 15 characters long.");
      }
      if (!/[A-Z]/.test(this.password)) {
        this.passwordErrors.push("Password must include at least two uppercase letters.");
      }
      if (!/[a-z].*[a-z]/.test(this.password)) {
        this.passwordErrors.push("Password must include at least two lowercase letters.");
      }
      if (!/[A-Z].*[A-Z]/.test(this.password)) {
        this.passwordErrors.push("Password must include at least one numeric value.");
      }
      if (!this.password.startsWith(this.password.match(/[A-Z]/))) {
        this.passwordErrors.push("Password must start with an uppercase letter.");
      }
      if (!/_/.test(this.password)) {
        this.passwordErrors.push("Password must include the '_' character.");
      }
    },
    navigateHome() {
      if (this.passwordErrors.length === 0) {
        this.$router.push('/');
      }
    },
  },
};
</script>



<style scoped>
.form {
  grid-template-rows: auto;
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