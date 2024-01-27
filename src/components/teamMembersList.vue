<template>
  <v-container>
      <v-row>
          <v-col
           v-for="user in items "
           :key="user.id"
            cols="12"
            sm="12"
            md="6"

            xl="4"

            class="my-5 mx-auto " 

            >
            <teamMembers :user="user" ></teamMembers>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import teamMembers from '@/components/teamMembers.vue'
  export default {
    components:{
      teamMembers
    },
      created(){
        fetch('https://api.escuelajs.co/api/v1/users')
          .then(res=>res.json())
          .then(users => this.users = users)
      },

      data() {
          return {
              users:[]
          }
      },
      computed:{
          items(){
            if(this.all){
              return this.users
            }
            return this.users.filter(a => a.id <4)
          }
        }

  }
</script>
