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
  

.template{
  background-image: url(../assets/NSwitch_AnimalCrossingNewHorizons_bg_grass.jpg);
}
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
  