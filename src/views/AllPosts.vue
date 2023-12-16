
<template>
    <div class="grid">
        <div class="sidebar"></div>
        <div id="post-list">
            <router-link to="/">
                <button class="logout" @click="logoutUser">
                    Log out
                </button>
            </router-link>
            <ul>
                <div class="item" v-for="post in posts" :key="post.id">
                    <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
                    <a class="singlepost" :href="'/api/apost/' + post.id">
                        <span class="date"> {{ post.date }} </span><br />
                        <span class="body"> {{ post.body }} </span> <br />
                    </a>
                </div>
            </ul>
            <div>
                <router-link to="/api/addpost" v-slot="{ navigate }">
                    <button class="addPost" @click="navigate">
                        Add Post
                    </button>
                </router-link>
                <button @click="deleteAll" class="deleteAll">Delete all</button>
            </div>
        </div>
        <div class="sidebar"></div>
    </div>
</template>
  
  
<script>
export default {
    name: "AllPosts",
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        fetchPosts() {
            // You should remember how Fetch API works
            // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
            fetch(`http://localhost:3010/api/posts/`)
                .then((response) => response.json())
                .then((data) => (this.posts = data))
                .catch((err) => console.log(err.message));
        },

        async logoutUser() {
            try {
                const response = await fetch('http://localhost:3010/auth/logout', {
                    method: 'GET', // Metoda GET jest wystarczająca dla tego endpointu
                    credentials: 'include' // Wysyłanie cookies z żądaniem
                });

                if (!response.ok) {
                    throw new Error('Failed to log out');
                }

                // Przekierowanie po pomyślnym wylogowaniu
                this.$router.push('/signup');
            } catch (error) {
                console.error('Logout error:', error);
            }
        },
    },
    mounted() {
        // call fetchPosts() when this element (AllPosts) mounts 
        this.fetchPosts();
        console.log("mounted");
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

h1 {
    font-size: 20px;
}

a {
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.item {
    background-color: rgba(235, 223, 183, 0.758);
    border-radius: 10px;
    margin: 30px;
    padding: 50px;
}



.template {
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
    background-repeat: round;
    border-radius: 10px;
    border: 8px solid rgba(255, 255, 255, 0.358);
}
</style>
  