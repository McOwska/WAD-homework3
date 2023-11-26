<template>
    <div class="grid">
    <div class="sidebar"></div>
    <SignUpForm></SignUpForm>
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
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 2vh 8vw;
    margin: 10px auto;
}
  .sidebar {
    padding: 20px;
    background-image: url(../assets/AC_wallpaper.jpg);
    background-size: 100%;
    background-repeat:round;
    border-radius: 10px;
    border: 8px solid rgba(255, 255, 255, 0.358);
}

  </style>
  