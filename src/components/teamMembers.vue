<template>
  <!-- <v-card class="mx-auto" max-width="344">
      <v-img :src="user.avatar" height="200px" containt></v-img> -->

      <!-- <v-card-title class="card-title text-h6">
          <v-row>
              <v-col cols="6">
                  {{ user . title }}
              </v-col>
              <v-col cols="3">

              </v-col>
              <v-col cols="3">
                  <v-btn  stacked>
                    {{ user . price }}$
                  </v-btn>

              </v-col>
          </v-row>

      </v-card-title> -->
<v-card max-width="344px" class="mx-auto" data-aos="flip-right">

  <v-card-title class="mx-auto pb-3 mb-5"  elevation="8"
        variant="text"
        show-arrows >

            <v-img :src="user.avatar" height="200px" containt></v-img>

            <v-list-item class="mb-2" :subtitle="user.title">
              <template v-slot:title>
                <strong class="text-h6 mb-2"> {{ user.name }}</strong>
              </template>
            </v-list-item>

            <div class="d-flex justify-space-between px-4">
              <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                <v-icon icon="mdi-email" start></v-icon>

                <div class="text-truncate">{{ user.email }}</div>

              </div>

              <div>{{ user.role }}</div>

            </div>
          </v-card-title>
</v-card>



      <!-- <v-card-subtitle>

      </v-card-subtitle>

      <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text">
              more deatels
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
      </v-card-actions>

      <v-expand-transition>
          <div v-show="show">
              <v-divider></v-divider>

              <v-img>

              </v-img>

              <v-card-text>
                  {{ user . bloodGroup }}
              </v-card-text>
          </div>
      </v-expand-transition>
  </v-card> -->
</template>



<script>
  export default {
      data: () => ({
          show: false,
      }),

      props: {
          user: {
              type: Object,
              required: true
          }
      }
  }
</script>



<style>
  .card-title {
      display: flex;
      justify-content: space-between;
  }
</style>
