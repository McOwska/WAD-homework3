<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Footer </p>
    </div>
  </footer>
</template>

<script>
export default {
    name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
footer {
    padding: 10px;
    background-image: url(../assets/bg_grainy_gradient.png);
    background-size: 100%;
    border-radius: 35px;
    align-items: center;
    border: 6px solid rgba(255, 255, 255, 0.658);
}
</style>
