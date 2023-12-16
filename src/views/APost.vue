<template>
    <div class="grid">
        <div class="sidebar"></div>
        <div class="A Post">
            <div id="form">
                <h3>A Post</h3>
                <label for="body">Body: </label>
                <input name="body" type="text" id="body" required v-model="post.body" />

            </div>
            <div>
                <button @click="updatePost" class="updatePost">Update Post</button>
                <button @click="deletePost" class="deletePost">Delete Post</button>
            </div>
        </div>
        <div class="sidebar"></div>
    </div>
</template>


<script>
export default {
    name: "APost",
    data() {
        return {
            post: {
                id: "",
                date: "",
                body: ""
            },
        };
    },
    methods: {
        fetchAPost(id) {
            // fetch one post with the specied id (id)
            fetch(`http://localhost:3010/api/posts/${id}`)
                .then((response) => response.json())
                .then((data) => (this.post = data))
                .catch((err) => console.log(err.message));
        },
        updatePost() {
            // using Fetch - put method - updates a specific post based on the passed id and the specified body
            fetch(`http://localhost:3010/api/posts/${this.post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.post),
            })
                .then((response) => {
                    console.log(response.data);
                    //this.$router.push("/apost/" + this.post.id);
                    // We are using the router instance of this element to navigate to a different URL location
                    this.$router.push("/api/allposts");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deletePost() {
            // using Fetch - delete method - delets a specific post based on the passed id
            fetch(`http://localhost:3010/api/posts/${this.post.id}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            })
                .then((response) => {
                    console.log(response.data);
                    // We are using the router instance of this element to navigate to a different URL location
                    this.$router.push("/api/allposts");
                })
                .catch((e) => {
                    console.log(e);
                });
        },
    },
    mounted() {
        // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
        // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their 
        // position in the URL. The captured values are populated in the req.params object, with the name 
        // of the route parameter specified in the path as their respective keys
        this.fetchAPost(this.$route.params.id);
    },
};
</script>


<style scoped>

#form {
  max-width: 420px;
  margin: 30px auto;
  background: rgba(235, 223, 183, 0.758);
  text-align: center;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: rgb(8, 110, 110);
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px 60px 10px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  border-radius: 10px;
}

button {
    border: 3px solid rgba(235, 223, 183, 0.758);
    cursor: pointer;
    border-radius: 20px;
    height: 40px;
    padding-left: 20px;
    padding-right: 20px;
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