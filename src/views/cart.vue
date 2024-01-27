<template>
  <v-container>
    <v-row>
      <v-col v-for=" product , index in products" :key="product.id" >
      
        <ProductItem @change="addToList"  :product="product">

          <template #action>
            <v-btn
            icon="mdi-delete"
             color="error"
              variant="text"
               @click="deleteProduct(index)">

            </v-btn>
          </template>
        </ProductItem>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >
import ProductItem from '@/components/productItem.vue';
import productItem from '@/components/productItem.vue';
import { useCartStore } from '@/store/cart';
import { mapActions, mapState } from 'pinia';
export default{
    component: [
        productItem,
    ],
    computed: {
        ...mapState(useCartStore, ['products']),


    },
    methods:{

      ...mapActions(useCartStore ,['deleteProduct']),

    },
    components: { ProductItem },

}
</script>
