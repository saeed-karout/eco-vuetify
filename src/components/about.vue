<template>
    <v-container>

        <v-row>
            <v-col cols="12" data-aos="zoom-in-down">
                <v-divider class="my-4"></v-divider>
                <v-card >
                    <v-card-title class="text-h3 d-flex justify-center mb-5">{{ $t('about.title') }}</v-card-title>
                    <v-card-text>
                        <p>
                            {{ $t('about.subtitle') }}
                        </p>
                    </v-card-text>
                </v-card>

                <v-divider class="my-4"></v-divider>


            </v-col>

          </v-row>
          <sliderAbout />
    </v-container>
</template>


<script>
import sliderAbout from './slider-about.vue';

    export default {
      components:{
        sliderAbout
      },

        data() {
            return {

                services: [{
                        id: 1,
                        name: "خدمة 1"
                    },
                    {
                        id: 2,
                        name: "خدمة 2"
                    },
                    {
                        id: 3,
                        name: "خدمة 3"
                    },
                    // يمكنك إضافة المزيد من الخدمات حسب احتياجاتك
                ],
            };
        },
    };
</script>

<style scoped>
    /* قم بتضمين الأنماط هنا */
    .styled-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .styled-list li {
        margin-bottom: 8px;
    }

    .styled-list li::before {
        content: '\2022';
        color: #2196F3;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
    }
</style>
