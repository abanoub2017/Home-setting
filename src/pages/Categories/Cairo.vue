<template>
    <ListCategory/>
    <div class=" container mx-auto px-6">
      <h1>Cairo</h1>
      <FormAndList/>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import AddForm from '@/components/AddForm.vue'
  import ListItem from '@/components/ListItem.vue'
  import ListCategory from '@/components/ListCategory.vue'
import FormAndList from '../FormAndList.vue'
  
  export default defineComponent({
    components: { AddForm, ListItem, ListCategory, FormAndList }
  })
  </script>
    
  <style>
  
  </style>