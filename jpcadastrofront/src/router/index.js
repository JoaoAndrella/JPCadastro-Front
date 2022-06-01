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

  {
    path: '/jpcadastro/aluno/listagem',
    name: 'AlunoListagem',
    component: () => import('@/views/aluno/alunoL.vue')
  },

  {
    path: '/jpcadastro/aluno/editar/:id',
    name: 'AlunoEditar',
    component: () => import('@/views/aluno/alunoE.vue')
  },

  //Rotas Professor
  {
    path: '/jpcadastro/professor/cadastro',
    name: 'ProfessorCadastro',
    component: () => import('@/views/professor/professorN.vue')
  },

  {
    path: '/jpcadastro/professor/listagem',
    name: 'ProfessorListagem',
    component: () => import('@/views/professor/professorL.vue')
  },

  {
    path: '/jpcadastro/professor/editar/:id',
    name: 'ProfessorEditar',
    component: () => import('@/views/professor/professorE.vue')
  },

  //Rotas Curso
  {
    path: '/jpcadastro/curso/cadastro',
    name: 'CursoCadastro',
    component: () => import('@/views/curso/cursoN.vue')
  },

  {
    path: '/jpcadastro/curso/listagem',
    name: 'CursoListagem',
    component: () => import('@/views/curso/cursoL.vue')
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
