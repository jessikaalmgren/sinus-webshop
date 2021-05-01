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
  },

  getters: {
	allProducts: (state) => {
		return state.products
	},
	authenticated (state) {
	return state.loginStatus && state.currentUser
	},
	user(state){return state.currentUser},
	currentUser: (state) => {return state.currentUser},
	//orders: (state)=>{return state.orders},
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
  },

  modules: {
	
  }, 
  
})
