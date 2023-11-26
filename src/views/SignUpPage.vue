<template>
    <SignUpForm></SignUpForm>
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
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
    margin: 10px auto;
}
  </style>
  