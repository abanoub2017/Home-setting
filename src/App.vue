<template>
  <Header />
  <ReloadPWA />
  <router-view />
  <notifications position="bottom right" />
</template>

<script setup lang="ts">
import ReloadPWA from "./ReloadPWA.vue";
import Header from "./components/Header.vue";
</script>

<style scoped>
</style>
