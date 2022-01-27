import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue';
import Catalog from '@/pages/Catalog.vue';
import Partner from '@/pages/Partner.vue';
import Service from '@/pages/Service.vue';
import Buy from '@/pages/Buy.vue';
import Guarantee from '@/pages/Guarantee.vue';
import Contacts from '@/pages/Contacts.vue';
import Error from '@/pages/404.vue';
const routes = [
    {
      path: '/', 
      component: Home,
      name: 'home'
    },
    {
      path: '/catalog', 
      component: Catalog,
      name: 'catalog'
    },
    {
      path: '/service', 
      component: Service,
      name: 'service'
    },
    {
      path: '/buy', 
      component: Buy,
      name: 'buy'
    },
    {
      path: '/guarantee', 
      component: Guarantee,
      name: 'guarantee'
    },
    {
      path: '/partner', 
      component: Partner,
      name: 'partner'
    },
    {
      path: '/contacts', 
      component: Contacts,
      name: 'contacts'
    },
    {
      path: '/:pathMatch(.*)*', 
      component: Error,
      name: 'error'
    },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
