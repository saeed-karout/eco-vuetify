<!-- <template >
  <v-sheet
    class="mx-auto my-10"

    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-primary"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          color="grey-lighten-1"
          :class="['ma-4', selectedClass]"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                size="48"
                icon="mdi-close-circle-outline"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
      >
        <div class="d-flex fill-height align-center justify-center">
          <h3 class="text-h6">
            Selected {{ model }}
          </h3>
        </div>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>



<script>
  export default {
    data: () => ({
      model: null,
    }),
    created() {
            fetch('https://dummyjson.com/products')
                .then(res => res.json())
                .then(products => this.products = products.products)
        },
  }
</script> -->

<template>

  <v-vontainer >

    <v-data-iterator
      :items="desserts"
      item-value="name"
    >
      <template v-slot:default="{ items, isExpanded, toggleExpand }">
        <v-row>
          <v-col
            v-for="item in items"
            :key="item.raw.name"
            cols="12"
            sm="12"
            md="4"

          >
            <v-card class="mx-auto" max-width="380" data-aos="fade-up"
     data-aos-duration="3000">
              <v-card-title class="d-flex align-center justify-space-between ">
                <v-icon
                  :color="item.raw.color"
                  :icon="item.raw.icon"
                  start
                  size="22"
                ></v-icon>

                <h4>{{ item.raw.name }}</h4>
              </v-card-title>

              <v-card-text>
                {{ item.raw.description }}
              </v-card-text>

              <div class="px-4">
                <v-switch
                  :model-value="isExpanded(item)"
                  :label="`${isExpanded(item) ? 'Hide' : 'Show'} details`"
                  density="compact"
                  inset
                  @click="() => toggleExpand(item)"
                ></v-switch>
              </div>

              <v-divider></v-divider>

              <v-expand-transition>
                <div v-if="isExpanded(item)">
                  <v-list density="compact" :lines="false">
                    <v-list-item :title="` Sending Date:${item.raw.date}`" active></v-list-item>

                  </v-list>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-vontainer>
</template>
<script>
  export default {
    data: () => ({
      desserts: [
        {
          name: 'mohamad saeed',
          description: 'You did a good job. I wish you success. Fast service, competitive prices, and beautiful merchandise',
          icon: 'mdi-message-check-outline',
          color: '#6EC1E4',
          date:'2023/8/30',

        },
        {
          name: 'Mariam Hamza',
          description: 'I hope you continue to do the best. Your services are very useful and your prices are acceptable',
          color: '#FFADAD',
          icon: 'mdi-chat',
          date:'2023/9/11',
        },
        {
          name: 'omar alhomsey',
          description: 'Super fast delivery',
          icon: 'mdi-message',
          color: '#F4A261',
          date:'2023/12/5',

        },
        {
          name: 'Joudy Ebraheem',
          description: 'competitive prices. I would like to share the site with my friends',
          icon: 'mdi-message-star-outline',
          color: '#6D4C41',
          date:'2023/11/20',

        },
      ],
    }),
  }
</script>
