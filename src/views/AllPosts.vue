
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
                        <span class="body"> {{ post.body }} </span> <br />
                        <br />
                        <span class="date"> Posted: {{ post.date }} </span><br />                        
                    </a>
                </div>
            </ul>
            <div>
                <router-link to="/api/addpost" v-slot="{ navigate }">
                    <button class="addPost" @click="navigate">
                        Add Post
                    </button>
                </router-link>
                <router-link to="/api/posts">
                    <button class="deleteAllPosts" @click="deleteAllPosts">
                        Delete all
                    </button>
                </router-link>
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

        async deleteAllPosts() {
            // Delete all posts
            try {
                const response = await fetch('http://localhost:3010/api/allposts', {
                method: 'DELETE',
                });

                if (response.ok) {
                    this.fetchPosts(); // Refresh the post list after deletion
                } else {
                    const errorData = await response.json();
                    console.error('Failed to delete all posts:', errorData.error);
                }
            } catch (error) {
                console.error('Error deleting all posts:', error);
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
    background-color: transparent;
    cursor: pointer;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
}

button:hover {
    background-color: rgba(231, 229, 195, 0.548);

}

h1 {
    font-size: 20px;
}

a {
    text-decoration: none;
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

.date {
    color: black
}
</style>


  