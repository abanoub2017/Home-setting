<template>
   <ReloadPWA/>
  <router-view />
  <notifications  position="bottom right"/>
</template>

<script setup lang="ts">
  import ReloadPWA from './ReloadPWA.vue'
</script>

<style scoped>
</style>
