import { createRouter, createWebHistory } from 'vue-router'
import CounterView from "@/views/CounterView.vue";
import HomeView from "@/views/HomeView.vue";
import CarView from "@/views/CarView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/cars',
      name: 'cars',
      component: CarView
    }
  ]
})

export default router
