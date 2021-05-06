import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import MyAccount from '../views/MyAccount.vue'
import SingleProduct from '../views/SingleProduct.vue'
import CheckOut from '../views/CheckOut.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
	path: '/register',
	name: 'Register',
	component: Register
  },
  {
	path: '/myaccount',
	name: 'MyAccount',
	component: MyAccount
  },
  {
	path: '/singleproduct/:id',
	name: 'SingleProduct',
	component: SingleProduct,
  },
  {
	path: '/checkout',
	name: 'CheckOut',
	component: CheckOut,
  },
  {
    path: '/login',
    name: 'LogIn',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LogIn.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
