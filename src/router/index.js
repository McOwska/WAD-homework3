import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import SignUpPage from '../views/SignUpPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
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