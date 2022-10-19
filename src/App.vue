<template>
  <Modal />
  <Mod />
  <CheckBattery/>
  <CheckNetwork/>
  <CheckOnline/>
  <CheckLocation/>
  <ReloadPWA />
  <router-view />
  <notifications position="bottom right" />
</template>

<script setup lang="ts">
import ReloadPWA from "./ReloadPWA.vue";
import Modal from "./components/modal.vue";
import Mod from "./components/Mod.vue";
import CheckBattery from "./components/CheckBattery.vue";
import CheckNetwork from "./components/CheckNetwork.vue";
import CheckOnline from "./components/CheckOnline.vue";
import CheckLocation from "./components/CheckLocation.vue";
</script>

<style scoped>
</style>
