import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopView,
    meta: {
      title: 'Shop'
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView  ,
    meta: {
      title: 'Products'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView  ,
    meta: {
      title: 'Cart'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login  ,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register  ,
    meta: {
      title: 'Register'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | GreenFoods`
  window.scrollTo(0, 0)
  next()
})


export default router
