import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import experience from '../views/experience.vue'
import projects from '../views/projects.vue'
import resume from '../views/resume.vue'
import contact from '../views/contact.vue'

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
    path: '/resume',
    name: 'resume',
    component: resume
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
