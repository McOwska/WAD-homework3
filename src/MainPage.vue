<template>
    <div class="grid">
      <div class="sidebar"></div>
      <div class="container">
        <!-- Iterate over posts and display them -->
        <div v-for="post in posts" :key="post.content">
            <div class="post">
                <img class="icon" :src="post.usericon">
                <p class="date">{{post.date}}</p>
                <p>{{ post.content }}</p>
                <img class="img" :src="post.image">
            </div>
        </div>
  
        <!-- Display error message if there is an error -->
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div class="sidebar"></div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'MainPage',
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
  
  <style scoped>
    
  </style>
  