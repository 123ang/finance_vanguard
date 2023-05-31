// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import About from '../views/about/About.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Testimonials from '../views/Testimonials'
import Blog from '../views/Blogs'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/contact-us',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/our-team',
    name: 'Team',
    component: Team
  },
  {
    path: '/client-testimonials',
    name: 'Testimonials',
    component: Testimonials
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
