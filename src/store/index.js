import { createStore } from 'vuex';

const store = createStore({
    state: {
        posts: [],
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts.map(post => ({ ...post, likes: 0 }));
        },

        increaseLike(state, postContent) {
            const post = state.posts.find(post => post.content === postContent);
            if (post) {
                post.likes++;
            }
        },

        resetLikes(state) {
            state.posts.forEach(post => post.likes = 0);
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
        },

        increasePostLike({ commit }, postId) {
            commit('increaseLike', postId);
        }
    }
});

export default store;
