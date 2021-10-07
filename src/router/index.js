import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      header: ()=> import('../components/Headers/Header-home.vue'),
      default:()=>  import('../views/Home.vue') ,
    } 
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
