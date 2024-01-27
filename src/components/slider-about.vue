<template>
  <h2 class="text-h3 d-flex justify-center">Services that we provide</h2>
  <v-card
  border
    flat
    rounded="0"
    class="mt-5"
    data-aos="zoom-in-down"
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="service in services"
        :key="service.id"

      >
        <v-card
          height="200"
          class="d-flex justify-center align-center"
          background="blue"
        >
          <span class="text-h2">
             {{ service.name }}
          </span>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        variant="plain"
        icon="mdi-chevron-left"
        @click="prev"
      ></v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot="{ isSelected, toggle }"
          :value="n"
        >
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
          ></v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        variant="plain"
        icon="mdi-chevron-right"
        @click="next"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    // data: () => ({
    //
    // }),

    data() {
      return {
        length: 3,
        onboarding: 0,

        services: [{
                        id: 1,
                        name:"All kinds of products at the cheapest prices",

                    },
                    {
                        id: 2,
                        name:"Instant delivery service",

                    },
                    {
                        id: 3,
                        name: "Shipping to all countries"
                    },
                    {
                        id: 4,
                        name: "Electronic payment"
                    },
                    // يمكنك إضافة المزيد من الخدمات حسب احتياجاتك
                ],
      }
    },
    methods: {
      next () {
        this.onboarding = this.onboarding + 1 > this.length
          ? 1
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 <= 0
          ? this.length
          : this.onboarding - 1
      },
    },
  }
</script>
