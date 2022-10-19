<template>
    <div>
        <!-- First modal -->
        <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content"
            :click-to-close="false" :esc-to-close="false" :prevent-click="false" :max-width="Infinity"
            :max-height="Infinity" :resize="false" :resize-directions="['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']"
            :fit-parent="true" :min-width="0" :min-height="0" :drag="true">
            <button class="modal__close" @click="showModal = false">
                <mdi-close></mdi-close>
            </button>
            <span class="modal__title"> &#128525;يا صباح او مساء النور يا جميل </span>
            <div class="modal__content">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        &#128584; ممكن نكتب الاسم بس يا جميل </label>
                    <input type="text" id="first_name" v-model="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="&#128514; بطة مثلا " required>
                </div>
            </div>
            <div class="modal__action " :disabled="name.length == 0">
                <button highlight :disabled="name.length == 0" class="confirm" @click="confirm">يلا &#128076;</button>
            </div>
        </vue-final-modal>
    </div>
</template>

<script  setup lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import $vfm from 'vue-final-modal'
import ModalsContainer from 'vue-final-modal'
import { VueFinalModal} from 'vue-final-modal'
import { useLocalStorage } from '@vueuse/core'

const showModal = ref(true)
const showConfirmModal = ref(false)

const name = useLocalStorage('name', '')

const nameAv = ['بطة', 'بطه', 'بيبو', 'بينو', 'مارينا', 'ابانوب', 'abanoub', 'beno', 'bebo', 'marina', 'bata', '']

const confirm = () => {
    if (name) {
        if (nameAv.includes(name.value)) {
            showConfirmModal.value = false
            showModal.value = false
        }

    }
}

</script>

<style scoped>
::v-deep .modal-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    max-height: 90%;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
}

.modal__title {
    margin: 0 0 0.5rem 2rem;
    font-size: 1.5rem;

    font-weight: 700;
}

.modal__content {
    flex-grow: 1;
    overflow-y: auto;

}

.modal__content>div {}

label,
input {
    text-align: right;
}

.modal__action {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 1rem 0 0;
}

.confirm {
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 8px 15px;
    border-radius: 33px;
    background: #000;
    color: #fff;
}

.modal__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
}



.dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
}
</style>
