<template>
  
      <form class="form">
        <h1 id="header">Welcome, traveler!</h1>
        <h2>Create an account</h2>
        <input class="input" placeholder=" email or username">
        <input class="input" placeholder=" password possibly"><br>
        <button class="confirm-button">Log in</button>        
      </form>
  </template>

<script>
export default {
    name: "AppSignUpForm",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      dummyText: new String('Sign up here, dummy text'),
    };
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
    text-shadow: 1px 1px 4px rgb(100, 65, 42);;
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