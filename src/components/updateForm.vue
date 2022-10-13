<template>
    <!-- Add Items -->
    <form class="lg:w-[50%] m-auto" @submit.prevent="updateItem()">
        <!-- Add Name For Item -->
        <div class="mb-6">
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                Name</label>
            <input type="text" id="Name" v-model="itemValue.name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name" required>
        </div>
        <!-- Add Price For Item -->
        <div class="mb-6">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
            <input type="number" id="price" v-model="itemValue.price" placeholder="Price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required>
        </div>
        <!-- Add Price For Item -->
        <div class="mb-6">
            <label for="note" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Note</label>
            <textarea type="number" id="note" v-model="itemValue.note" placeholder="Note"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required> </textarea>
        </div>
        <!-- :disabled="!itemValue.name || !itemValue.price" -->
        <button type="submit"
            class=" disabled:opacity-75 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update  Item</button>
    </form>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted , watchEffect , watch} from 'vue'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '@/firebase'
import { v4 as uuidv4 } from 'uuid';
import { useRouter, useRoute } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";
const props = defineProps({
  id: {
    type: String ,
    required: false,
    default: '',
  },
})

let idItem = props.id

const route = useRoute();
const nameRoute = route.name
const newDate = new Date()
let time = newDate.toLocaleString();

const itemValue = ref(
    {
        id: uuidv4(),
        name: '',
        price: '',
        note: '',
        time: time,
    }
) as any

const getItemDetails = async (name: any) => {
    const docRef = doc(db, `${name}`, idItem);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        itemValue.value = docSnap.data()
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}


const updateItem = async () => {
    const updateItemData = doc(db, String(nameRoute), idItem);
    await updateDoc(updateItemData, itemValue.value);
    notify({
        text: "شاطره يا بطة عدلتيها خلاص 🎉",
        type: "success"
    });
    // emit('closeEditForm')
}

watchEffect(() =>  {
    if(props.id){
        idItem = props.id
        getItemDetails(route.name)
    }
})


const emit = defineEmits({
  closeEditForm: () => {
      return false
  },
})

onMounted(() => {
    if (idItem) {
        getItemDetails(route.name)
    }
})
</script>
        
<style>

</style>