import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import ClubeLista from '../views/ClubeLista.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: PaginaInicial
  },
  {
    path: '/classificacao',
    name: 'classificacao',
    component: ClubeLista
  },
]

const router = new VueRouter({
  routes
})

export default router
