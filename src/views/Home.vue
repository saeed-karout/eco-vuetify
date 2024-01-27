<template>
     <v-parallax src="https://wallpapercave.com/wp/wp3537555.jpg"> -->

        <div class="hero d-flex  flex-row fill-height justify-space-around align-center">


            <div class="logo-container" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="1500"

  >
                <v-img src="../assets/logo.png"></v-img>
            </div>

            <div class="d-flex flex-column fill-height justify-center align-center text-white" data-aos="fade-left"
            data-aos-duration="1500"
   >
                <h2 class="text-h4 font-weight-thin mb-4">
                    {{ $t('hero.title') }}
                </h2>
                <h3 class="subheading text-h2 ">
                    {{ $t('hero.subtitle') }}

                </h3>

                <v-btn class="mt-5" to="/product" color="warning">
                    {{ $t('hero.herobtn') }} <v-icon class="ml-3">mdi mdi-arrow-right</v-icon>
                </v-btn>

                <div>

               <socailVue />
                </div>
            </div>
        </div>

    </v-parallax>

    <h1 class="text-h2 my-16 text-center " >{{ $t('section.section1') }} </h1>
    <v-divider :thickness="2" class="border-opacity-50 mb-5 w-25 mx-auto" color="warning"></v-divider>

    <productList />

    <h1 class="text-h2 my-16 text-center">{{ $t('section.section2') }} </h1>
    <v-divider :thickness="2" class="border-opacity-50 mb-5 w-25 mx-auto" color="warning"></v-divider>
    <teamMembersList />

    <h1 class="text-h2 my-16 text-center">{{ $t('section.section3') }} </h1>
    <v-divider :thickness="2" class="border-opacity-50 mb-5 w-25 mx-auto" color="warning"></v-divider>
    <Testimonials></Testimonials>


    <h1 class="text-h2 my-16 text-center">{{ $t('section.section4') }} </h1>
    <v-divider :thickness="2" class="border-opacity-50 mb-5 w-25 mx-auto" color="warning"></v-divider>
    <contactUs />



    <v-divider :thickness="2" class="border-opacity-50 mb-5 w-25 mx-auto" color="warning"></v-divider>


  
</template>

<script setup>
    import productList from '@/components/productList.vue';
    import teamMembersList from '@/components/teamMembersList.vue';
    import Testimonials from '@/components/Testimonials.vue';
    import contactUs from '@/components/contactUs.vue';


</script>



<style scoped>
    .logo-container {
        display: none;

    }

    @media only screen and (min-width: 600px) {
        .logo-container {
            display: block;
            width: 350px;
            height: 350px;
            /* تظهر عندما يكون عرض الشاشة 600 بكسل أو أكبر */
        }
    }
</style>
