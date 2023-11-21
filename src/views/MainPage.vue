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

export default {
  name: 'MainPage',
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      error: null
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      fetch('https://api.npoint.io/e49bbe98e965d535a9ce')
        .then(response => response.json())
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          this.error = 'Error loading posts: ' + error.message;
        });
    }
  }
}
</script>
  
<style scoped></style>
  