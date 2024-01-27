<template>
    <v-container>
        <h2 class="text-h2 d-flex justify-center align-center mb-5">{{ $t('favorite.title') }}</h2>
      <!-- <v-row>
        <v-col v-for="product in favoriteProducts" :key="product.id" cols="12" lg="4" xl="4" >
          <v-cart class="mx-auto my-5" max-width="344" >
            <v-img :src= product.thumbnail height="200px" containt >

              </v-img>
              <div class="d-flex justify-space-between mb-5">

                <v-cart-title>
                  {{ product.title }}
                </v-cart-title>
                <v-cart-text>
                  {{ product.price }}$
                </v-cart-text>


              </div>
          </v-cart>
        </v-col>
      </v-row> -->

    <v-row>

      <v-card class="mx-auto my-5" max-width="400px" v-for="product in favoriteProducts" :key="product.id">
         <v-img :src="product.thumbnail" class="mt-5" width="100%" height="200px" containt></v-img>
           <v-card-title class="card-title text-h6">
               <v-row>

                   <v-col cols="6">
                       {{ product . title }}
                   </v-col>
                   <v-col cols="3">

                   </v-col>



                   <v-card-subtitle>
                       <h4>
                           {{ product . category }}
                       </h4>
                   </v-card-subtitle>

               </v-row>

           </v-card-title>





           <v-card-actions>





               <v-spacer></v-spacer>

               <h4 class="green">
                   {{ product . price }} $
               </h4>


               <v-btn>

                   <v-icon size="large" @click="AddToCart(product)" color="info" icon="mdi-cart-arrow-down"
                       variant="text">
                   </v-icon>
               </v-btn>



           </v-card-actions>



       </v-card>
    </v-row>

    </v-container>
</template>

<script>
    import { useCartStore} from "@/store/cart"
    import { mapActions } from 'pinia'
    import productItem from '@/components/productItem.vue'
    import { useFavoriteStore } from '@/store/favorite';
    import { onMounted } from 'vue';


    export default {
      data() {
        return {

        }
      },
        components: [
            productItem
        ],
        methods: {

             ...mapActions(useCartStore, ['AddToCart']),
        },

        setup() {
            const favoriteStore = useFavoriteStore();

            // استرجاع المنتجات المفضلة من متجر المفضلة
            const favoriteProducts = favoriteStore.favoriteProducts;

            onMounted(() => {
                // يمكنك أيضاً    حيازات وأكشنز هنا
            });

            return {
                favoriteProducts,
            };
        },
    };
</script>
