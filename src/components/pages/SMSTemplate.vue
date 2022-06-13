<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">SMS shablonlar</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <div class="flex items-center justify-between">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex pl-1 items-center">
              <button type="submit" class="p-3 focus:outline-none focus:shadow-outline">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-gray-500 w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input type="search" name="search" class="bg-white text-gray-500 py-1.5 text-lg rounded-lg pl-12 focus:outline-none outline-none border-0" placeholder="Sarlavha bo'yicha izlash..." autocomplete="off" />
          </div>
          <div class="flex">
            <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200 cursor-pointer"><i class="fa fa-layer-group"></i> Bo'lim</div>
            <div class="bg-white rounded-xl px-5 p-2 ml-3 text-gray-500 font-semibold hover:bg-gray-200 cursor-pointer"><i class="fa fa-filter"></i> Shablon turi</div>
          </div>
        </div>
        <div class="custom-height overflow-y-auto mt-3 px-1">
          <blockquote v-for="(template, index) in templates" :key="index" class="flex flex-col w-full p-6 my-5 border-l-4 bg-white rounded-lg shadow relative" :class="genderAccessColor(template.genderAccess)">
            <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
              <div class="flex justify-center items-center hidden">
                <i class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2"></i>
                <i class="fa-solid fa-trash-can text-gray-700 hover:text-red-600 mr-2"></i>
              </div>
              <i @click="openActions(template.id)" :id="'st-' + template.id" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
            </div>
            <div class="flex text-gray-400">
              <div class="flex items-start">
                <svg class="w-10 h-10 fill-current sm:block text-wave-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                  <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                </svg>
              </div>
              <div class="flex flex-col ml-2">
                <h3 class="mt-2 text-bold font-medium text-gray-800 truncate">{{ template.title }}</h3>
                <p class="mt-2 text-base text-gray-600">{{ template.text }}</p>
              </div>
              <div class="flex flex-col justify-end">
                <svg class="mt-16 w-10 h-10 fill-current sm:block text-wave-500 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                  <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                </svg>
              </div>
            </div>
            <div class="w-1/2 mx-auto pt-3"><hr /></div>
            <div class="flex items-center justify-between mt-2">
              <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-layer-group mr-1"></i> {{ template.genderAccess }}</div>
              <div class="flex-1"><hr class="w-2/5 mx-auto" /></div>
              <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-user-tag mr-1"></i> {{ changeGenderAccess(template.genderAccess) }}</div>
            </div>
          </blockquote>
        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5">
          <h3 class="text-2xl font-extrabold mb-3">SMS shablon yaratish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form @submit.prevent="createSMSTemplate">
            <div class="mb-6">
              <label for="title-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" v-model="title_" id="title-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <label for="category-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
              <select v-model="templateCategoryId_" id="category-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bo'limni tanlang</option>
                <option v-for="(templateCategory, index) in templateCategories" :key="index" :value="templateCategory.id">{{ templateCategory.name }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" v-model="access_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Kim uchunligini tanlang</option>
                <option value="all">Barcha uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" v-model="text_" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SMS matnini kiriting..."></textarea>
              <p class="mt-5 text-sm text-gray-500">SMS matnida foydalanuvchining ismining o'rniga <strong class="text-black">[USER]</strong> tegini ishlatib keting. Tizim [USER] o'rniga avtomatik tarzda kontakt nomini joylab SMSni jo'natadi.</p>
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
import templateService from '../../services/template.service'
import templateCategoryService from '../../services/templateCategories.service'
import $ from 'jquery'

function openActions(id) {
  let x = $(`#st-${id}`)
  x.toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  x.parent('.actions').toggleClass('w-11').toggleClass('w-28').toggleClass('shadow').toggleClass('right-1')
  x.parent('.actions').children('div').toggleClass('hidden')
}

const store = useStore()

const templateCategoryId_ = ref("Bo'limni tanlang")
const title_ = ref('')
const text_ = ref('')
const access_ = ref('Kim uchunligini tanlang')

const addSMSTemplateInStore = () => {
  templateService.getSMSTemplates().then((data) => store.commit('setSMSTemplate', data))
}

const addTemplateCategoryInStore = () => {
  templateCategoryService.getTemplateCategories().then((data) => store.commit('setTemplateCategory', data))
}

const templates = computed(() => {
  return store.state.templates
})

const templateCategories = computed(() => {
  return store.state.templateCategories
})

const changeGenderAccess = (access) => {
  switch (access) {
    case 'all':
      return 'Barcha uchun'
    case 'male':
      return 'Erkaklar uchun'
    case 'female':
      return 'Ayollar uchun'
    default:
      break
  }
}

const genderAccessColor = (access) => {
  switch (access) {
    case 'all':
      return 'border-green-500'
    case 'male':
      return 'border-blue-500'
    case 'female':
      return 'border-red-500'
    default:
      break
  }
}

const createSMSTemplate = () => {
  if (templateCategoryId_.value === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (title_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (text_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (access_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    const templateData = {
      templateCategoryId: templateCategoryId_.value,
      title: title_.value,
      text: text_.value,
      genderAccess: access_.value,
    }
    store.dispatch('templatesModule/create', templateData).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli yaratildi!',
          position: 'bottomRight',
        })
        addSMSTemplateInStore()
        templateCategoryId_.value = "Bo'limni tanlang"
        title_.value = ''
        text_.value = ''
        access_.value = 'Kim uchunligini tanlang'
      },
      (error) => {
        notify.error({
          message: 'SMS shablon yaratishda xatolik yuz berdi!',
          position: 'bottomRight',
        })
      }
    )
  }
}

onMounted(() => addSMSTemplateInStore(), addTemplateCategoryInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
</style>