import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as API from '@/Api'


Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
	products: [],
	currentUser: false,
	orders: null,
	cart: []
  },

  getters: {
	allProducts: (state) => {
		return state.products
	},
	authenticated (state) {
	return state.loginStatus && state.currentUser
	},
	//user(state){return state.currentUser},
	currentUser: (state) => {return state.currentUser},
	getProductId: state => id =>{
	return state.products.find(product => product._id === id)
	},
	cartTotalPrice(state){
		let total = 0
		
		state.cart.forEach(item =>{
			total += item.product.price * item.quantity
		})
		return total
	}
  },


  actions: {
	async getProducts(context) {
		const response = await API.getProducts()
		context.commit('getProducts', response)
	},

	async logIn(context, payload) {
		await API.login(payload)
		const response = await API.getUser()
		context.commit("updateCurrentUser", response.data)
	},
	async getUser() {
		const response = await API.getUser()
		return response
	},
	async getOrders(context) {
		const response = await API.getOrders()
		context.commit("updateOrders", response.data)
		
	},
	updateCurrentUser(context, currentUser){
		context.commit('currentUser', currentUser)
	},
	async getSingleProduct(context, payload) {
		const response = await API.getSingleProduct(payload)
		return response
	},
	addProductToCart(context, { product, quantity }) {
		context.commit('ADD_TO_CART', { product, quantity })

	},
	removeProductFromCart({commit}, product){
		commit('REMOVE_PRODUCT_FROM_CART', product)
	},
	clearCartItems({commit}){
		commit('CLEAR_CART_ITEMS')
	},
	async postOrders(context, payload) {
		await API.postOrders(payload);
	},
	emptyCart(context) {
		context.commit("emptyCart")
	}
  },

  mutations: {
	getProducts(state, payload) {
		state.products = payload
	},  
	updateCurrentUser(state, currentUser) {
		state.currentUser = currentUser
	},
	updateOrders(state, payload) {
		state.orders = payload
	},
	ADD_TO_CART(state, { product, quantity }){
		let productInCart = state.cart.find(item => {
			return item.product.title === product.title
		})
		if(productInCart){
			productInCart.quantity += quantity;
		}else{
		state.cart.push({ 
			product,
			quantity
		})
	}
		},
	REMOVE_PRODUCT_FROM_CART(state, product){
		state.cart = state.cart.filter(item => {
			return item.product.title !== product.title
		})
	},
	CLEAR_CART_ITEMS(state){
		state.cart = []
	}
	},
  

  modules: {
	
  }, 
  
})
