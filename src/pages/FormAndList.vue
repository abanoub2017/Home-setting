<template>
    <button v-if="id" @click="handelToggle" type="button"
        class="text-blue-700 border rotate-180 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Back to List</span>
    </button>
    <AddForm v-if="!id" />
    <ListItem v-if="!id" v-on:editById="getItemId($event)" />
    <UpdateForm v-if="id" :id=id v-on:closeEditForm="closeEditForm()" />
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, watchEffect } from 'vue'
import AddForm from '../components/AddForm.vue'
import ListItem from '../components/ListItem.vue'
import UpdateForm from '../components/updateForm.vue'

const emit = defineEmits(['editById', 'closeEditForm'])
const id = ref('')
const toggle = ref(false)

const getItemId = (event: any) => {
    id.value = event
}
const closeEditForm = () => {
    id.value = ''
}
const handelToggle = () => {
    toggle.value = !toggle.value
    id.value = ''
}

watchEffect(() => {
    if (id) {
        toggle.value = true
    }
})

</script>
        
<style>

</style>