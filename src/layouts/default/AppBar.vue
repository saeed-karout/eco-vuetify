    <template>
       <v-app-bar elevation="8" flat data-aos="fade-down"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="3000"
     >

           <v-app-bar-title>
               <v-btn @click="toggleTheme">

                   <v-icon icon="mdi-theme-light-dark" variant="text" />
               </v-btn>
               <v-btn to="/signUp">

                   <v-icon icon="mdi-account" variant="text" />
               </v-btn>
               {{ $t('nameEco.name') }}

           </v-app-bar-title>




           <div class="hero-nav">
              <v-btn to="/favorites" icon="mdi-heart"> </v-btn>
               <v-btn to="/" exact>{{ $t('appbar.Home') }}</v-btn>
               <v-btn to="/product">{{ $t('appbar.products') }}</v-btn>
               <v-btn to="/about">{{ $t('appbar.about') }}</v-btn>





           </div>
           <v-btn icon="" to="/cart" class="mx-2">
               <v-badge :content="cart.products.length" color="error" floating>
                   <v-icon size="small">mdi-cart-variant</v-icon>
               </v-badge>
           </v-btn>
           <v-btn icon="mdi-translate" class="mx-2" @click="changeLocale"></v-btn>





       </v-app-bar>


   </template>

   <script setup>
       import {
           useCartStore
       } from '@/store/cart';
       import {
           useTheme,
           useLocale
       } from 'vuetify';
       import i18n from '@/plugins/i18n';
       const theme = useTheme()
       const cart = useCartStore()
       const {
           current
       } = useLocale()


       function toggleTheme() {
           theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
       }

       function changeLocale() {
           current.value = current.value === 'ar' ? 'en' : 'ar'
           i18n.global.locale = i18n.global.locale === 'ar' ? 'en' : 'ar'
       }
   </script>

 


