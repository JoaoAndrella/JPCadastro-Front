import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  //Rotas Aluno
   {
     path: '/jpcadastro/aluno/cadastro',
     name: 'AlunoCadastro',
     component: () => import('@/views/aluno/alunoN.vue')
   },

//Rotas Professor
{
  path: '/jpcadastro/professor/cadastro',
  name: 'ProfessorCadastro',
  component: () => import('@/views/professor/professorN.vue')
},



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
