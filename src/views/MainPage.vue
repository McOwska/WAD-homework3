<template>
    <div class="grid">
        <div class="sidebar"></div>
        <div class="container">
            <div v-for="post in posts" :key="post.id">
                <Post :post="post" />
            </div>
            <div v-if="error" class="error">{{ error }}</div>
        </div>
        <button @click="$store.commit('resetLikes')">Reset likes</button>
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
        ...mapActions(['fetchPosts']),
    },

};
</script>
<style scoped>
button {
    border: 3px solid rgba(235, 223, 183, 0.758);
    cursor: pointer;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
  