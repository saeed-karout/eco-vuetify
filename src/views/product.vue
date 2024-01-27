<template>
  <v-container class="my-10">
    <v-autocomplete
         v-model="search"
         :items="filteredProducts"
        
        auto-select-first
        class="flex-full-width"
        density="comfortable"
        item-props
        menu-icon=""
        placeholder="Search Name product"
        prepend-inner-icon="mdi-magnify"
        rounded
        theme="light"
        variant="solo"
        @input="updateFilteredProducts"
      ></v-autocomplete>
      <v-row>
          <v-col



           v-for="product in filteredProducts "
           :key="product.id"


            cols="12"
            sm="12"
            md="6"
            lg="4"
            xl="3" >
            <productItem :product="product" ></productItem>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import productItem from '@/components/productItem.vue'
  export default {
    components:{
      productItem
    },
      created(){
        fetch('https://dummyjson.com/products')
          .then(res=>res.json())
          .then(products => {
          this.products = products.products;
          this.filteredProducts = this.products;
      });
          // .then(products => this.products = products.products)
      },

      data() {
          return {
            products: [],
            search: '',
           filteredProducts: [],
          }
      },
      methods: {
          updateFilteredProducts() {
          this.filteredProducts = this.products.filter(product =>
         product.id.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },


  }
</script>
