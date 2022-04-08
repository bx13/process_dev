import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import HomePage from '../components/HomePage.vue';
import ExerciceDetails from "../components/ExerciceDetails.vue";
import Login from "../components/Login.vue";
import TropheePage from "../components/TropheePage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/exercice/:exerciceId',
    name: 'ExerciceDetails',
    props:true,
    component: ExerciceDetails
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/trophee',
    name: 'Trophee',
    component: TropheePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router