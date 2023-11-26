<template>
    <div class="grid">
      <p>SIGN UP</p>
    <div class="sidebar"></div>
    <div class="container">
    <SignUpForm></SignUpForm>
    </div>
    <div class="sidebar"></div>
  </div>
  </template>
  
  
  <script>
  import SignUpForm from '../components/SignUpForm.vue'

  
  export default {
    name: 'SignUpPage',
    components: { 
    SignUpForm,
  }
  }
  </script>
  
  <style scoped>
    .grid{
        background-color: red;
    }
  </style>
  