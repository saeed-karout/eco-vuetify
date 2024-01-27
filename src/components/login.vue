<template>
  <v-sheet width="300" class="mx-auto mt-5">

    <v-form ref="form">
      <v-text-field
        v-model="mail"
        :counter="22"
        :rules="mailRoules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="name"
        :counter="15"
        :rules="nameRules"
        label="Password"
        required
      ></v-text-field>



      <v-checkbox
        v-model="checkbox"

        label="Do you Forget Password"
        required
      ></v-checkbox>

      <div class="d-flex flex-column">
        <v-btn
          color="success"
          class="mt-4"
          block
          @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
          color="error"
          class="mt-4"
          block
          @click="reset"
        >
          Reset Form
        </v-btn>

        <v-btn
          color="warning"
          class="mt-4"
          block
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      mail: '',
      mailRoules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 22) || 'Name must be less than 22 characters',
      ],
      pass:'',
     

      checkbox: false,
    }),

    methods: {
      async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Form is valid')
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
