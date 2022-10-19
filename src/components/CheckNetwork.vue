<template>
  <div>
    <p>{{isOnline ? 'متصل بالشبكه' : 'غير متصل'}}</p>
    <p>{{offlineAt}}</p>
    <p>{{downlink}}</p>
    <p>{{effectiveType}}</p>
    <p>{{saveData}}</p>
    <p>{{type}}</p>
  </div>
</template>
    
<script setup lang="ts">
import { useNetwork } from '@vueuse/core'
const { isOnline, offlineAt, downlink, downlinkMax, effectiveType, saveData, type } = useNetwork()

</script>
    
<style scoped>
</style>
    