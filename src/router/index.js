import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import experience from '../views/experience.vue'
import projects from '../views/projects.vue'
import bsee from '../views/bsee.vue'
import research from '../views/research.vue'
import rheem from '../views/rheem.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experience',
    name: 'experience',
    component: experience
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/bsee',
    name: 'bsee',
    component: bsee
  },
  {
    path: '/research',
    name: 'research',
    component: research
  },
  {
    path: '/rheem',
    name: 'rheem',
    component: rheem
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
