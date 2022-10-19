<template>
  <div>
    <p>{{ charging ? 'بيشحن' : 'مش بيشحن' }}</p>
    <p>{{ level *100 +'%'}} : نسبة الشحن </p>
    <!-- <UseBattery v-slot="{ charging }"> Is Charging: {{ charging }} </UseBattery> -->
  </div>
</template>
  
  <script setup lang="ts">
import { useBattery } from "@vueuse/core";
// import { UseBattery } from "@vueuse/components";
const { charging, chargingTime, dischargingTime, level } = useBattery()
</script>
  
  <style scoped>
</style>
  