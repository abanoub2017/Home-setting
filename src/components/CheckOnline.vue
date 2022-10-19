<template>
    <div>
      <p>{{online ? 'اون لاين' : 'اوفلاين'}}</p>

    </div>
  </template>
      
  <script setup lang="ts">
import { useOnline } from '@vueuse/core'
const online = useOnline()  
  </script>
      
  <style scoped>
  </style>
      