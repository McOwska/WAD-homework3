import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    }
  },
  actions: {
    fetchPosts({ commit }) {
      fetch('https://api.npoint.io/e49bbe98e965d535a9ce')
        .then(response => response.json())
        .then(data => {
          commit('setPosts', data);
        })
        .catch(error => {
          console.error('Error loading posts:', error);
        });
    }
  }
});

export default store;
