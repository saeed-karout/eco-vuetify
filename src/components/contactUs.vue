<!-- ContactUs.vue -->
<template>
  <v-container>
    <v-row>
      <!-- القسم الأيمن -->
      <v-col cols="6" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <v-img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Hero_ContactCenter_3840x2160:VP1-539x440?resMode=sharp2&op_usm=1.5,0.65,15,0&qlt=95" alt=" image is not found" containt></v-img>
      </v-col>

      <!-- القسم الأيسر -->
      <v-col cols="6">
        <v-form  data-aos="fade-left"
     
     data-aos-offset="500"
     data-aos-duration="500">
          <v-row>
            <v-col cols="12">
              <v-text-field label="Name" outlined v-model="name"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="E-mail" outlined v-model="email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="phone Number" outlined v-model="phone"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn @click="submitForm" color="green" width="100%">Send</v-btn>
            </v-col>
          </v-row>
        </v-form>

      </v-col>
    </v-row>


  </v-container>
</template>

<script>


export default {
  components:{

  }

  ,
  data() {
    return {
      name: '',
      email: '',
      phone: '',
    };
  },
  methods: {
    submitForm() {
      const alertMessage = `Data has been sent \n Name: ${this.name}\n e-mail: ${this.email}\n phone number : ${this.phone}`;
      alert(alertMessage);

    },


  },
};
</script>
