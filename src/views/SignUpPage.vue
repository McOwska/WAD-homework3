<template>
  <div>
    <button @click="showLoginForm = !showLoginForm" class="toggle-button">
      {{ showLoginForm ? "Sign Up" : "Log In" }}
    </button>

    <div v-if="showLoginForm">
      <LogInForm />
    </div>

    <div v-else>
      <SignUpForm />
    </div>
  </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue';
import LogInForm from '../components/LogInForm.vue';

export default {
  name: 'AuthPage',
  components: { 
    SignUpForm,
    LogInForm
  },
  data() {
    return {
      showLoginForm: false,
    };
  },
};
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
    margin: 10px auto;
  }

  .toggle-button {
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
</style>