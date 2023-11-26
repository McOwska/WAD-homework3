<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} I am signup form </p>
      </div>
    </footer>
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
  background-color: #861414;
  padding: 20px;
  text-align: center;
}
</style>