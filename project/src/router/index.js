import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/familyComponent',
    name: 'FamilyComponent',
    component: () => import(/* webpackChunkName: "FamilyComponent" */ '../components/FamilyComponent.vue')
  },
  {
      path: '/recipesComponent',
    name: 'RecipesComponent',
    component: () => import(/* webpackChunkName: "RecipesComponent" */ '../components/RecipesComponent.vue')
  },
  {path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/family',
    name: 'FamilyPage',

    component: () => import(/* webpackChunkName: "family" */ '../views/FamilyPage.vue')
  },
  {
    path: '/cooking',
    name: 'CookingPage',

    component: () => import(/* webpackChunkName: "cooking" */ '../views/CookingPage.vue')
  },
  {
    path: '/login',
    name: 'LoginPage',

    component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
