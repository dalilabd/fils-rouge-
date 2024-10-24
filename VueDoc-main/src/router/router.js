import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Herosection from '../components/Herosection.vue';
import AboutUs from '../components/AboutUs.vue';
import Features from '../components/Features.vue';
import OurServices from '../components/OurServices.vue';
import Footer from '../components/Footer.vue';
import Register from '../components/Register.vue';
import Connecter from '../components/Connecter.vue';
import Permission from '../components/Permission.vue';
import Role from '../components/Role.vue';
import Dashboard from '../components/Dashboard.vue';
import Document from '../components/Document.vue';
import User from '../components/User.vue';
import Categories from '../components/Categories.vue'; 

// Define public and protected routes separately
const publicRoutes = [
  { path: '/', name: 'home', component: Home },
  { path: '/herosection', name: 'herosection', component: Herosection },
  { path: '/aboutus', name: 'aboutus', component: AboutUs },
  { path: '/features', name: 'features', component: Features },
  { path: '/ourservices', name: 'ourservices', component: OurServices },
  { path: '/footer', name: 'footer', component: Footer },
  { path: '/register', name: 'register', component: Register },
  { path: '/connecter', name: 'connecter', component: Connecter }, // login page
];

const protectedRoutes = [
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/permission', name: 'permission', component: Permission },
  { path: '/role', name: 'role', component: Role },
  { path: '/document', name: 'document', component: Document },
  { path: '/user', name: 'user', component: User },
  { path: '/Categories', name: 'Categories', component: Categories },
];

// Combine both public and protected routes
const routes = [...publicRoutes, ...protectedRoutes];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global route guard to protect certain routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!sessionStorage.getItem('token'); // Check if the token is available
  const isProtectedRoute = protectedRoutes.some(route => route.name === to.name);

  if (isProtectedRoute && !isAuthenticated) {
    // Redirect to 'connecter' if trying to access a protected route without authentication
    next({ name: 'connecter' });
  } else if (to.name === 'connecter' && isAuthenticated) {
    // Redirect authenticated users trying to access 'connecter' to the dashboard
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;
