// Utilities
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products:[]
  }),

  getters:{

  },

  actions:{

  AddToCart(product){
  // if(this.product.id == product.id){
  //  return this.products.push(product++)
  //  }
  this.products.push(product)
  },

  deleteProduct(index){
  this.products.splice(index, 1)
  }

  },



  persist:true,

})
