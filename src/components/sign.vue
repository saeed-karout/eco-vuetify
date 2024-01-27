
<template >
  <v-container max-width="430"  class="form">

    <form @submit.prevent="submit" elevation="8" flat  >
      <v-text-field
        v-model="name.value.value"
        :counter="25"
        :error-messages="name.errorMessage.value"
        label="Name"
      ></v-text-field>

      <v-text-field
        v-model="phone.value.value"
        :counter="7"
        :error-messages="phone.errorMessage.value"
        label="Phone Number"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="password"
      ></v-text-field>


      <v-select
        v-model="select.value.value"
        :items="items"
        :error-messages="select.errorMessage.value"
        label="Select"
      ></v-select>


       <v-text >
        We are not responsible for poor storage or defective merchandise after shipment
       </v-text>


      <v-checkbox
        v-model="checkbox.value.value"
        :error-messages="checkbox.errorMessage.value"
        value="1"
        label="Do you agree with our rules"
        type="checkbox"
      ></v-checkbox>

      <v-btn
        class="me-4"
        type="submit"
        color="green"
      >
        submit
      </v-btn>

      <v-btn color="red" @click="handleReset">
        clear
      </v-btn>

      <v-btn  class="mx-4" color="blue" to="/Login">
        LogIn
      </v-btn>
    </form>
  </v-container>
</template>
<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
      phone (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
      email (value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
      password (value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

          return 'password needs to be at least 9 digits.'
      },
      select (value) {
        if (value) return true

        return 'Select an item.'
      },
      checkbox (value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
  })
  const name = useField('name')
  const phone = useField('phone')
  const email = useField('email')
  const password =useField('password')
  const select = useField('select')
  const checkbox = useField('checkbox')

  const items = ref([
    'Male',
    'Female',

  ])

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>



<style scoped>
  .form{
    border: 1px solid #838282;
    border-radius: 5px;
    margin-top: 20px;
  }
</style>
