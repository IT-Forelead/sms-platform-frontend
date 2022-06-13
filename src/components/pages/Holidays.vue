<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">Bayramlar</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="custom-height overflow-y-auto mt-3 px-1">
        <div class="grid grid-cols-2 gap-2">
          
          <div v-for="(holiday, index) in holidays" :key="index" class="relative h-52 rounded-lg from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
            <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
              <div class="flex justify-center items-center hidden">
                <i class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2"></i>
                <i @click="deleteHoliday(holiday.id)" class="fa-solid fa-trash-can text-gray-700 hover:text-red-600 mr-2"></i>
              </div>
              <i @click="openActions(holiday.id)" :id="'st-' + holiday.id" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
            </div>
            <div class="absolute bottom-0 w-full max-w-lg mx-auto bg-white rounded-b-lg">
              <div class="text-center -mt-10 mb-2">
                <div class="flex items-center justify-center text-4xl bg-blue-200 border-4 text-white border-white w-20 h-20 rounded-full mx-auto">
                  <i class="fa-solid fa-gift"></i>
                </div>
              </div>
              <h3 class="text-lg text-center py-1 leading-normal mb-1 font-semibold text-black">{{ holiday.name }}</h3>
              <p class="text-gray-500 mb-1 py-1 text-center">{{ holiday.day }} - {{ holiday.month}}</p>
            </div>
          </div>

        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5">
          <h3 class="text-2xl font-extrabold mb-3">Bayram qo'shish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form @submit.prevent="createHoliday">
            <div class="mb-6">
              <label for="name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram nomi</label>
              <input type="text" v-model="name_" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bayram nomini kiriting..." />
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram kuni</label>
              <select id="gender-input" v-model="day_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram kunini tanlang</option>
                <option v-for="item in 31" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram oyi</label>
              <select id="gender-input" v-model="month_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram oyini tanlang</option>
                <option value="january">Yanvar</option>
                <option value="february">Fevral</option>
                <option value="march">Mart</option>
                <option value="april">Aprel</option>
                <option value="may">May</option>
                <option value="june">Iyun</option>
                <option value="july">Iyul</option>
                <option value="august">Avgust</option>
                <option value="september">Sentabr</option>
                <option value="october">Oktyabr</option>
                <option value="november">Noyabr</option>
                <option value="december">Dekabr</option>
              </select>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" id="reset-form" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" />
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jo'natish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import holidayService from '../../services/holiday.service'
import $ from 'jquery'

function openActions(id) {
  let x = $(`#st-${id}`)
  x.toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  x.parent('.actions').toggleClass('w-11').toggleClass('w-28').toggleClass('shadow').toggleClass('right-1')
  x.parent('.actions').children('div').toggleClass('hidden')
}

const store = useStore()

const templateCategoryId_ = ref("Bo'limni tanlang")
const name_ = ref('')
const day_ = ref('Bayram kunini tanlang')
const month_ = ref('Bayram oyini tanlang')

const addHolidayInStore = () => {
  holidayService.getHolidays().then((data) => store.commit('setHolidays', data))
}

const holidays = computed(() => {
  return store.state.holidays
})

const createHoliday = () => {
  if (name_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram nomini kiriting!',
      position: 'bottomLeft',
    })
  } else if (day_.value === 'Bayram kunini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram kunini tanlang!',
      position: 'bottomLeft',
    })
  } else if (month_.value === 'Bayram oyini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram oyini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    const holidayData = {
      name: name_.value,
      day: day_.value,
      month: month_.value,
    }
    store.dispatch('holidaysModule/create', holidayData).then(
      () => {
        notify.success({
          message: 'Bayram muvaffaqiyatli yaratildi!',
          position: 'bottomRight',
        })
        addHolidayInStore()
        name_.value = ''
        day_.value = 'Bayram kunini tanlang'
        month_.value = 'Bayram oyini tanlang'
      },
      (error) => {
        notify.error({
          message: 'Bayram yaratishda xatolik yuz berdi!',
          position: 'bottomRight',
        })
      }
    )
  }
}

const deleteHoliday = (id) => {
  store.dispatch('holidaysModule/delete', id).then(
    () => {
      notify.success({
        message: "Bayram muvaffaqiyatli o'chirildi!",
        position: 'bottomRight',
      })
      addHolidayInStore()
    },
    (error) => {
      notify.error({
        message: "Bayramni o'chirishda xatolik yuz berdi!",
        position: 'bottomRight',
      })
    }
  )
}

onMounted(() => addHolidayInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
</style>