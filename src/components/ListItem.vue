<template>

    <!-- Filter by Date -->
  <div class="filter my-3">
    <div class="lg:w-[50%] m-auto">
        <h4>Filter By</h4>
    <button type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="GetAllData('price')">Price</button>
    <button type="button"
        class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
        @click="GetAllData('name')">Alphabetic</button>

    </div>
  </div>
    <!-- Update Fees -->
    <div class="update-show-fees">
        <div class="update-fees text-center my-3">
            <input type="number" v-model="updateMonthFees" id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  mx-2 m-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="add new Price" required>
            <button @click="updateItemSum" type="button"
                class=" my-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                new Price for Month</button>
        </div>
        <h6 class="text-center">
            <span> <strong>Total</strong> {{reciveTotalPrice}} EGP - {{getCalcPrice}} {{calcAllPriceItem}} EGP = </span>
            <span> {{finalCalcFromMonth}} EGP</span>
        </h6>
    </div>
    <!-- List Items -->
    <div class="p-4 my-3 m-auto lg:w-[50%] md:w-auto bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flow-root" v-if="listItem">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li v-for="item in listItem" :key="item.id" class="py-3 sm:py-4">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        <div class=" ">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {{item.name}}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {{item.price}}
                            </p>
                            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                                {{item.note}}
                            </p>
                            <small>{{item.time}}</small>
                        </div>
                        <div
                            class="flex justify-center my-2 items-center text-base font-semibold text-gray-900 dark:text-white">
                            <div class="actions">
                                <button type="button" @click="updateItem(item.id)"
                                    class="drop-shadow-lg hover:drop-shadow-xl text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</button>
                                <button type="button" @click="Delete(item.id)"
                                    class="drop-shadow-lg hover:drop-shadow-xl text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, watchEffect, watch, computed } from 'vue'
import { collection, getDocs, onSnapshot, doc, deleteDoc, updateDoc, query, where, orderBy } from "firebase/firestore";
import { db } from '@/firebase'
import { useRouter, useRoute } from 'vue-router'
import { notify } from "@kyvg/vue3-notification";
import { useLocalStorage } from '@vueuse/core'

const nameAdded = useLocalStorage('name', name).value


const listItem = ref([]) as any
const TotalPrice = ref() as any
// Get Price and Calc them
const allPriceItem = ref([]) as any
const getCalcPrice = ref()
const reciveTotalPrice = ref([]) as any
const finalCalcFromMonth = ref('') as any
const idCalc = ref('') as any
const updateMonthFees = ref('') as any
const route = useRoute();
const nameRoute = route.name as any


const GetAllData = async (filterName: any) => {
    // let col = query(collection(db, `${nameRoute}`) , orderBy('name', "desc"))
    // let col = query(collection(db, `${nameRoute}`) , orderBy('note', "desc"))
    // let col = query(collection(db, `${nameRoute}`) , orderBy('time', "desc"))
    // let col = query(collection(db, `${nameRoute}`) , orderBy('id', "desc"))
    let col = query(collection(db, `${nameRoute}`), orderBy(`${filterName}`, "desc"))
    const querySnapshot = await getDocs(col);
    listItem.value = []
    querySnapshot.forEach((doc) => {
        allPriceItem.value.push(doc.data().price);
        listItem.value.push({
            id: doc.id,
            name: doc.data().name,
            price: doc.data().price,
            note: doc.data().note,
            time: doc.data().time,
        })
    });
}

const RealTimeDate = (name: any) => {
    onSnapshot(collection(db, `${name}`), (querySnapshot) => {
        listItem.value = []
        querySnapshot.forEach((doc) => {
            allPriceItem.value.push(doc.data().price);
            listItem.value.push({
                id: doc.id,
                name: doc.data().name,
                price: doc.data().price,
                note: doc.data().note,
                time: doc.data().time,
            })
        });
    });
}

const getTotalPriceForMonth = () => {
    onSnapshot(collection(db, `total-price`), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            idCalc.value = doc.id
            reciveTotalPrice.value = doc.data()[String(nameRoute)]
            getfinalClacFromMonth(reciveTotalPrice.value)
        });
    });
}

const getfinalClacFromMonth = (totalForMonth: any) => {
    if (allPriceItem._rawValue.length != 0) {        
        setTimeout(() => {
            if (allPriceItem._rawValue.length == 1) {
                getCalcPrice.value = allPriceItem.value[0]
                return finalCalcFromMonth.value = totalForMonth - (allPriceItem.value[0]);
            } else {
                let sumItem = allPriceItem.value.reduce(function (previousValue: any, currentValue: any) {
                    return (previousValue + currentValue);
                })
                return finalCalcFromMonth.value = totalForMonth - sumItem
            }
        }, 1000)
    }
}

const calcAllPriceItem = computed(() => {

    if (allPriceItem.value != 0) {
        setTimeout(() => {
        allPriceItem.value.reduce(function (previousValue: any, currentValue: any) {
            getCalcPrice.value = previousValue + currentValue
            return previousValue + currentValue;
        })
    }, 1000);
    }

})

const updateItemSum = async () => {
    const updateItemData = doc(db, `total-price`, idCalc.value);
    let sendUpdate = {} as any
    sendUpdate[String(nameRoute)] = updateMonthFees.value

    await updateDoc(updateItemData, sendUpdate);
}

onMounted(() => {
    // GetAllData()
    if (route.name) {
        RealTimeDate(route.name)
        getTotalPriceForMonth()
    }
})

const Delete = async (id: any) => {
    await deleteDoc(doc(db, String(nameRoute), id));
    notify({
        text: `?????????? ???? ${nameAdded} ???????????? ???????? ????`,
        type: "success"
    });
}
const emit = defineEmits({
    editById: (id) => {
        return id
    },
})
const updateItem = async (id: any) => {
    emit('editById', id)
}

</script>
        
<style>

</style>