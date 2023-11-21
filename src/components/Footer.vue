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
.footer {
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
}
</style>
