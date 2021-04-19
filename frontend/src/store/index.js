import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as API from '@/Api'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
	products: [],
  },

  getters: {
	allProducts: (state) => {
		return state.products
	}
  },


  actions: {
	async getProducts(context) {
		const response = await API.getProducts()
		context.commit('getProducts', response)
	},

	// async getSingleProduct(context, payload) {
	// 	const response = await API.getSingleProduct(payload)
	// 	return response
	//   },
  },

  mutations: {
	getProducts(state, payload) {
		state.products = payload
	},  
  },

  modules: {
  }, 
  
})
