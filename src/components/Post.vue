<template>
  <div class="post">
    <img class="icon" :src="post.usericon">
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <img class="image" :src="post.image">
    <div class="post-footer">
      <span class="author">{{ post.author }}</span>
      <span class="date">{{ post.date }}</span>
      <br>
      <button @click="$store.commit('increaseLikeCounter')"></button>
      <span class="counter">{{ $store.state.counter }} likes</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.icon{
    max-width: 50px;
    border-radius: 100%;
    border: 3px solid rgba(235, 223, 183, 0.758);
}
.image{
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
}
button {
    cursor: pointer;
    background-image: url('~@/assets/thumbs-up.png');
    background-size: cover;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 3px solid rgba(235, 223, 183, 0.758);
}

.counter {
    margin-left: 30px;
}

.post {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 30px;
    padding: 50px;
}
</style>
