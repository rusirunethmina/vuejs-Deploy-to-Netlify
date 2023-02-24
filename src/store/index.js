import { createStore } from 'vuex'
import { products } from '../products.json'

export default createStore({
  state: {
    
    currentCategory: 'all',

    filterdProducts: products,

    cart: [],

    cartTotal: 0,

    user: false
    
  },
  getters: {

    getCartTotal(state) {
      if(state.cart.length <= 0) {
        return 0
       } 
    
       let total = 0
       state.cart.forEach(item => {
        total += item.totalPrice
        console.log(total)
       })
    
       return total
    }

  },
  mutations: {

    toggleCategory(state, payload) {
      state.currentCategory = payload
    },

    filterProducts(state, payload) {
      state.filterdProducts = payload
    },

    setProductTitle(state, payload) {
      state.productTitle = payload
    },

    addToCart(state, payload) {
      state.cart.push(payload)
      state.cartTotal += payload.totalPrice
    },

    removeItem(state, payload) {
      state.cart = state.cart.filter(product => {
        return product.id != payload.id
      })

      state.cartTotal -= payload.totalPrice
    },

    initUser(state, payload) {
      state.user = payload
    },

  },
  
  actions: {
    filterProducts({commit}) {
      let filteredProducts = []

      if(this.state.currentCategory === 'all'){
        filteredProducts = products
      }
      else {
        filteredProducts = products.filter(product => {
          return product.category === this.state.currentCategory
        })
      }

      commit('filterProducts', filteredProducts)
    },
  },

  modules: {
  }
})
