<template>
  <carusele />
  <div>

    <v-img src="../assets/about.png" class="my-5" width="100%" height="400px" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"></v-img>
  </div>
  <about />
  <teamMembersList />
</template>

<script setup>
import carusele from '@/components/carusele.vue';
import about from '@/components/about.vue';
import teamMembersList from '@/components/teamMembersList.vue';
</script>
