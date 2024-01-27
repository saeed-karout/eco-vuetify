<template>

  <div class="carousel" data-aos="zoom-in-down">

    <v-carousel hide-delimiters cycle >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        height="800px"
        cover
        :title="item.title"
      >

          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h4">
              {{ item.title }}
            </div>
          </div>

    </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/4050388/pexels-photo-4050388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Ease of use"
          },
          {
            src: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"Electronic payment"
          },
          {
            src: 'https://images.pexels.com/photos/3943729/pexels-photo-3943729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:"No need for paper money"
          },
          {
            src: 'https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/societe/palestine-vaincra-150-personnes-se-rassemblent-a-lyon-4208119/60688931-1-fre-FR/Palestine-vaincra-150-personnes-se-rassemblent-a-Lyon.jpg',
            title:"I belong to Palestine"
          },
        ],
      }
    },
  }
</script>
