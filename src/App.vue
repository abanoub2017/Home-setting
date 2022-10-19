<template>
  <Modal />
  <div class="dark-mode">
    <button @click="toggleDark()">
    Mode
    <template v-if="isDark">
      <!-- <span class="dark">&#9788;</span> -->
      <img height="30" width="30" src="@/assets/light.png" alt="dark" srcset="">
    </template>
    <template v-else>
      <!-- <span class="light">&#9789;</span> -->
      <img height="30" width="30" src="@/assets/dark.png" alt="dark" srcset="">
    </template>
  </button>
  </div>
  <ReloadPWA />
  <router-view />
  <notifications position="bottom right" />
</template>

<script setup lang="ts">
import ReloadPWA from './ReloadPWA.vue'
import Modal from './components/modal.vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped>
.dark-mode{
  display: flex;
    justify-content: flex-end;
    padding: 15px 57px;
    font-weight: 600;
}
img{
  display: inline;
}
.dark{
color: #ffc83d;
}
.light{

}
</style>
