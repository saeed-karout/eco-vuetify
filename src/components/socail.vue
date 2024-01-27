<template>
   <v-row  justify="center" class="respons">
                      <v-col cols="auto" >
                          <v-btn icon color="blue" @click="openSocialNetwork('facebook')">
                              <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                      </v-col>
                      <v-col cols="auto"  >
                          <v-btn icon color="red" @click="openSocialNetwork('youtube')">
                              <v-icon>mdi-youtube</v-icon>
                          </v-btn>
                      </v-col>
                      <v-col cols="auto"  >
                          <v-btn icon color="purple" @click="openSocialNetwork('instagram')">
                              <v-icon>mdi-instagram</v-icon>
                          </v-btn>
                      </v-col>
                      <v-col cols="auto">
                          <v-btn icon color="black" @click="openSocialNetwork('GitHub')">
                              <v-icon>mdi-github</v-icon>
                          </v-btn>
                      </v-col>
                      <v-col cols="auto">
                          <v-btn icon color="blue" @click="openSocialNetwork('LinkedIn')">
                              <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                      </v-col>

                  </v-row>

</template>

<script>
export default {

  methods: {

    openSocialNetwork(network) {
      // يمكنك تعديل الروابط والسلوك حسب احتياجاتك
      switch (network) {
        case 'facebook':
          window.open('https://www.facebook.com/profile.php?id=61554177790514', '_blank');
          break;
        case 'youtube':
          window.open('https://www.youtube.com/channel/UC0XKFRCjpgjj4Q6FhhjAZEw', '_blank');
          break;
        case 'instagram':
          window.open('https://www.instagram.com/saeed_karout/?hl=ar', '_blank');
          break;
        case 'GitHub':
          window.open('https://github.com/saeed-karout','_blank');
          break;
          case 'LinkedIn':
          window.open('https://www.linkedin.com/in/saeed-karout/','_blank');
          break;
        // يمكنك إضافة حالات إضافية لشبكات أخرى
        default:

          break;
      }
    },
  },
}
</script>


<style scoped>

  @media (max-width: 600px) {
    .respons{
      display: flex;
      flex-direction: column !important;
    }
  }


</style>
