<template>
    <div class="flex items-center justify-center flex-row flex-wrap flex-row-reverse">
      <div v-for="category in Categories" :key="category.name" class="my-3 basis-1/10" >
        <router-link :to="category.to" class="shadow-lg block text-white p-2 mx-2 bg-cyan-400 rounded-full">{{category.name}}</router-link>
      </div>
    </div>
</template>
<script setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
const Categories = ref([
{
    to: '/',
    name: 'الرئيسية'
  },
  {
    to: 'tithes',
    name: 'العشور'
  },
  {
    to: 'car',
    name: 'السياره'
  },
  {
    to: 'home-facilities',
    name: 'مرافق البيت'
  },
  {
    to: 'compliments-birthdays',
    name: 'مجاملات و اعياد ميلاد'
  },
  {
    to: 'exit-release',
    name: 'خروجات وفسح'
  },
  {
    to: 'analysis-doctors',
    name: 'تحليل و دكاتره'
  },
  {
    to: 'other-houses',
    name: 'البيوت الاخره'
  },
  {
    to: 'cairo',
    name: 'القاهرة'
  },
  {
    to: 'emergency',
    name: 'الطوارئ'
  },
  {
    to: 'save',
    name: 'التحويش'
  },
])
</script>
    
<style>

</style>