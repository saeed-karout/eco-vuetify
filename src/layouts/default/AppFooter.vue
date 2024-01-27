<template>
    <!-- <v-footer class="bg-white-lighten-1">
        <v-row justify="center" no-gutters>

            <router-link v-for="link in links" :key="link.name" :to="link.link" class="mx-2" >
                <v-btn color="warning"  variant="text" rounded="xl">
                    {{ link . name }}
                </v-btn>
            </router-link>
            <v-col class="text-center mt-4" cols="12" >
                {{ new Date() . getFullYear() }} — <strong>{{ $t('nameEco.copyright') }} &copy;</strong>
            </v-col>
        </v-row>
    </v-footer> -->
    <v-footer class="bg-dark-1">
    <v-container  data-aos="fade-up"
    data-aos-duration="1000"
   >
      <v-row class="d-flex align-center justify-center" no-gutters>
        <!-- Left Column (col-3) -->
        <v-col class="left d-flex align-center justify-center mt-4" cols="3">
         <v-img class="img-footer mx-auto ml-2" src="../../assets/logo.png" ></v-img>
         <div class="text-center mt-4" >
          <span>copyright&copy;</span>
           {{ new Date() . getFullYear() }} — <strong> {{ $t('nameEco.copyright') }}  </strong>
            </div>
        </v-col>

        <!-- Center Column (col-6) -->
        <v-col class="text-center mt-4" cols="6">
          <v-row justify="center" no-gutters>
            <router-link v-for="link in links" :key="link.name" :to="link.link" class="mx-2 my-5">
              <v-btn color="warning" variant="text" rounded="xl">
                {{ link.name }}
              </v-btn>
            </router-link>
          </v-row>
        </v-col>

        <!-- Right Column (col-3) -->
        <v-col class="text-center mt-4" cols="3">
          <socail />
        </v-col>

      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import socail from '@/components/socail.vue';
    export default {
      components:{
        socail
      }
      ,
        data: () => ({
            links: [{
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'products',
                    link: '/product'
                },
                {
                    name: 'carts',
                    link: '/cart'
                },



            ],
        }),
    }
</script>

<style scoped>

span{
color: blueviolet;
}
.img-footer{
  width: 100px;
  height: 100px;
}
@media  (max-width: 600px) {
.left{
  display: block !important;
}
}
</style>
