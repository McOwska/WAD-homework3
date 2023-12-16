import { createRouter, createWebHistory } from 'vue-router';
import SignUpPage from '../views/SignUpPage.vue';
import AllPosts from "../views/AllPosts.vue";
import APost from "../views/APost.vue";
import AddPost from "../views/AddPost.vue";
import ContactUs from "../views/ContactUs.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'AllPosts',
            component: () =>
                import("../views/AllPosts.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUpPage
        },
        {
            path: "/api/allposts",
            name: "AllPosts",
            component: AllPosts
        },
        {
            path: "/api/apost/:id",
            name: "APost",
            component: APost
        },
        {
            path: "/api/addpost",
            name: "AddPost",
            component: AddPost
        },
        { //will route to AllPosts view if none of the previous routes apply
            path: "/:catchAll(.*)",
            name: "AllPosts",
            component: AllPosts
        },

        {
            path: '/contactus',
            name: 'contactus',
            component: ContactUs
        }
    ]
});

router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    const loggedIn = await isUserLoggedIn();

    if (requiresAuth && !loggedIn) {
        next({ path: '/signup' });
    } else {
        next();
    }
});


async function isUserLoggedIn() {
    try {
        const response = await fetch('http://localhost:3010/auth/authenticate', {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Authentication check failed');
        }

        const result = await response.json();
        console.log(result.authenticated);
        return result.authenticated;
    } catch (error) {
        console.error("Authentication check error:", error);
        return false;
    }
}




export default router;