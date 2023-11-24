<template>
  <div class="grid">
    <div class="sidebar"></div>
    <div class="container">
      <div v-for="post in posts" :key="post.id">
        <Post :post="post" />
      </div>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>
  
  
<script>
import Post from '../components/Post.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'MainPage',
  components: {
    Post
  },
  computed: {
    ...mapState(['posts'])
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts'])
  }
};
</script>
  
<style scoped></style>
  