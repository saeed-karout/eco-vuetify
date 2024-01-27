 <template>
     <v-card class="mx-auto" max-width="344" data-aos="zoom-in-right" >
         <v-img :src="product.thumbnail" height="200px" containt></v-img>

         <v-card-title class="card-title text-h6">
             <v-row>

                 <v-col cols="6 mt-10">
                     {{ product . title }}
                 </v-col>
                 <v-col cols="3">

                 </v-col>

                 <v-col cols="3">
                     <v-btn icon @click="toggleFavorite" :color="isFavorite ? 'red' : 'grey'">
                         <v-icon>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>

                     </v-btn>
                 </v-col>

                 <v-card-subtitle>
                     <h4>
                         {{ product . category }}
                     </h4>
                 </v-card-subtitle>

             </v-row>

         </v-card-title>





         <v-card-actions>

             <v-btn color="orange-lighten-2">
                 {{ $t('cart.moreDeatels') }}
                 <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show">

                 </v-btn>
             </v-btn>


             <v-spacer></v-spacer>

             <h4 class="green">
                 {{ product . price }} $
             </h4>


             <v-btn>

                 <v-icon size="large" @click="AddToCart(product)" color="info" icon="mdi-cart-arrow-down"
                     variant="text">
                 </v-icon>
             </v-btn>


             <slot name="action" />
         </v-card-actions>


         <v-expand-transition>
             <div v-show="show">
                 <v-divider></v-divider>

                 <v-img>

                 </v-img>

                 <v-card-text>
                     {{ product . description }}
                 </v-card-text>
             </div>
         </v-expand-transition>
     </v-card>
     <productList all />
 </template>



 <script>
     import { useCartStore} from "@/store/cart"
     import { useFavoriteStore} from "@/store/favorite";
     import { mapActions} from "pinia";


     export default {
         data() {
             return {

                 show: false,
                 isFavorite: false,
             }


         },

         props: {
             product: {
                 type: Object,
                  requird:true,
             }
         },
         methods: {
             ...mapActions(useCartStore, ['AddToCart']),
             ...mapActions(useCartStore, ['addToList']),
             ...mapActions(useFavoriteStore, ['addToFavorite']),




             toggleFavorite() {


                 // تحديث حالة isFavorite عند الضغط على الزر
                 this.isFavorite = !this.isFavorite;
                 // استدعاء addToFavorite أو removeFromFavorite وتمرير المنتج
                 this.isFavorite ? this.addToFavorite(this.product) : this.removeFromFavorite(this.product.id);
             },



         }
     }
 </script>



 <style>
     .card-title {
         display: flex;
         justify-content: space-between;
     }

     .green {
         color: #65B741;
     }
 </style>
