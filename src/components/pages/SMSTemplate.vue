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
            <input v-model="search" type="search" name="search" class="bg-white text-gray-500 py-1.5 text-lg rounded-lg pl-12 focus:outline-none outline-none border-0" placeholder="Sarlavha bo'yicha izlash..." autocomplete="off" />
          </div>
          <div class="flex">
            <div class="relative">
              <select v-model="sortByCategoryId" class="form-select appearance-none block w-full px-3 pr-7 rounded-lg py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border-0 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="categories">
                <option value="">Bo'lim bo'yicha</option>
                <option v-for="(cat, idx) in templateCategories" :key="idx" :value="cat.id">{{ cat.name }}</option>
              </select>
            </div>
            <div class="relative pr-4">
              <div id="filterByGenderBtn" @click="toggleDropDownFilterByGender()" class="bg-white rounded-xl px-5 p-2 ml-3 text-gray-500 font-semibold hover:bg-gray-200 cursor-pointer"><i class="fa fa-filter"></i> {{ sortByAccess === '' ? 'Shablon turi' : changeGenderAccess(sortByAccess) }} <i @click="clearAccessSort()" class="hover:text-red-500 ml-1 cursor-pointer fa" :class="{ 'fa-times': sortByAccess !== '' }"></i></div>
              <div id="filterByGender" class="dropdown-content absolute right-0 top-12 z-10 hidden bg-white border divide-y divide-gray-100 rounded shadow w-44">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li class="border-b border-dotted cursor-pointer">
                    <a @click="sortByAccessFunc('all')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-mars-and-venus mr-1"></i> Barcha uchun</a>
                  </li>
                  <li class="border-b border-dotted cursor-pointer">
                    <a @click="sortByAccessFunc('male')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-mars mr-1"></i> Erkaklar uchun</a>
                  </li>
                  <li class="border-b border-dotted cursor-pointer">
                    <a @click="sortByAccessFunc('female')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-venus mr-1"></i> Ayollar uchun</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-height overflow-y-auto mt-3 px-1 pr-4">
          <div v-if="showContent">
            <blockquote v-for="(template, index) in filteredTemplates" :key="index" class="flex flex-col w-full p-6 my-5 border-l-4 bg-white rounded-lg shadow relative" :class="genderAccessColor(template.genderAccess)">
              <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
                <div class="flex justify-center items-center hidden">
                  <i @click="openEditModal(template)" class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2 cursor-pointer"></i>
                  <i @click="deleteSMSTemplate(template.id)" class="fa-solid fa-trash-can cursor-pointer text-gray-700 hover:text-red-600 mr-2"></i>
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
                  <h3 class="text-bold text-xl uppercase font-extrabold text-gray-800 truncate">{{ template.title }}</h3>
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
                <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-layer-group mr-1"></i> {{ template.categoryName }}</div>
                <div class="flex-1"><hr class="w-2/5 mx-auto" /></div>
                <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-user-tag mr-1"></i> {{ changeGenderAccess(template.genderAccess) }}</div>
              </div>
            </blockquote>
          </div>
          <div v-else class="rounded-lg text-lg bg-white px-5 py-10">
            <h3 class="text-center text-red-700">SMS shablonlar mavjud emas!</h3>
          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5">
          <h3 class="text-2xl font-extrabold mb-3">SMS shablon yaratish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form @submit.prevent="createSMSTemplate()">
            <div class="mb-6">
              <label for="title-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" v-model="createSMSTemplateParam.title" id="title-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <div class="flex justify-between items-center">
                <label for="category-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
                <span @click="openModal()" class="p-1 px-2 bg-green-100 text-sm text-green-500 rounded cursor-pointer hover:bg-green-200"> <i class="fa fa-plus mr-1"></i> Bo'lim qo'shish </span>
              </div>
              <select v-model="createSMSTemplateParam.templateCategoryId" id="category-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bo'limni tanlang</option>
                <option v-for="(templateCategory, index) in templateCategories" :key="index" :value="templateCategory.id">{{ templateCategory.name }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" v-model="createSMSTemplateParam.gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Kim uchunligini tanlang</option>
                <option value="all">Barcha uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" v-model="createSMSTemplateParam.text" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SMS matnini kiriting..."></textarea>
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

    <div v-show="isShowModal.addCategory" id="popup-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
        <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
          <button type="button" @click="closeModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <h3 class="text-2xl font-extrabold py-5 ml-5">Bo'lim boshqaruvi</h3>
          <div class="px-5">
            <form @submit.prevent="createTemplateCategory()">
              <div class="mb-6">
                <label for="category-name" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bo'lim qo'shish</label>
                <div class="flex items-center">
                  <input type="text" v-model="categoryName_" id="category-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bo'lim nomini kiriting..." />
                  <button class="fa fa-plus p-3 bg-green-400 hover:bg-green-500 cursor-pointer text-white rounded-md ml-2"></button>
                </div>
              </div>
            </form>
            <h3 class="text-md font-bold py-1">Bo'limlar ro'yhati</h3>
            <div v-if="showCategoryContent">
              <ul class="pb-5">
                <li v-for="(templateCategory, index) in templateCategories" :key="index">
                  <div class="flex justify-between items-center py-2 px-1 border-b" :id="'f-' + templateCategory.id">
                    <div class="text-md">
                      <i class="fa-solid fa-angles-right text-sm mr-2"></i>
                      {{ templateCategory.name }}
                    </div>
                    <div>
                      <i @click="editTemplateCategory(templateCategory)" class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-3 cursor-pointer"></i>
                      <i @click="deleteTemplateCategory(templateCategory.id)" class="fa-solid fa-trash-can cursor-pointer text-gray-700 hover:text-red-600"></i>
                    </div>
                  </div>
                  <div class="py-2 border-b hidden" :id="'s-' + templateCategory.id">
                    <form @submit.prevent="updateTemplateCategory()" class="flex items-center">
                      <input type="text" v-model="editTemplateCategoryParam.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bo'lim nomini kiriting..." />
                      <button class="p-2 bg-green-400 hover:bg-green-500 cursor-pointer text-white rounded-md ml-2">Saqlash</button>
                      <button @click="closeEditCategory(templateCategory.id)" type="button" class="ml-3 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="text-lg bg-white px-5 py-3 pb-5">
              <h3 class="text-center text-red-700">Bo'limlar mavjud emas!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isShowModal.editTemplate" id="edit-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeEditModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">SMS shablonni taxrirlash</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <form @submit.prevent="updateSMSTemplate()">
            <div class="mb-6">
              <label for="title-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" v-model="editSMSTemplateParam.title" id="title-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <label for="category-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
              <select v-model="editSMSTemplateParam.templateCategoryId" id="category-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bo'limni tanlang</option>
                <option v-for="(templateCategory, index) in templateCategories" :key="index" :value="templateCategory.id">{{ templateCategory.name }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" v-model="editSMSTemplateParam.gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Kim uchunligini tanlang</option>
                <option value="all">Barcha uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" v-model="editSMSTemplateParam.text" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SMS matnini kiriting..."></textarea>
              <p class="mt-5 text-sm text-gray-500">SMS matnida foydalanuvchining ismining o'rniga <strong class="text-black">[USER]</strong> tegini ishlatib keting. Tizim [USER] o'rniga avtomatik tarzda kontakt nomini joylab SMSni jo'natadi.</p>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end items-center">
              <button type="button" @click="closeEditModal()" class="mr-3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" data-modal-toggle="popup-modal">Yopish</button>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import templateService from '../../services/template.service'
import templateCategoryService from '../../services/templateCategories.service'
import $ from 'jquery'

const store = useStore()

const search = ref('')
const sortByCategoryId = ref('')
const sortByAccess = ref('')
const categoryName_ = ref('')

const clearAccessSort = () => (sortByAccess.value = '')
const clearCategorySort = () => (sortByCategoryId.value = '')

const isShowModal = reactive({
  addCategory: false,
  editTemplate: false
})

const createSMSTemplateParam = reactive({
  templateCategoryId: "Bo'limni tanlang",
  title: '',
  text: '',
  gender: 'Kim uchunligini tanlang',
})

const editSMSTemplateParam = reactive({
  id: '',
  templateCategoryId: "Bo'limni tanlang",
  title: '',
  text: '',
  gender: 'Kim uchunligini tanlang',
})

const editTemplateCategoryParam = reactive({
  id: '',
  name: '',
})

const sortByAccessFunc = (access) => {
  sortByAccess.value = access
  toggleDropDownFilterByGender()
}

function openActions(id) {
  let x = $(`#st-${id}`)
  x.toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  x.parent('.actions').toggleClass('w-11').toggleClass('w-28').toggleClass('shadow').toggleClass('right-1')
  x.parent('.actions').children('div').toggleClass('hidden')
}

function toggleDropDownFilterByGender() {
  $('#filterByGender').toggleClass('hidden')
}

const openModal = () => {
  isShowModal.addCategory = true
}
const closeModal = () => {
  isShowModal.addCategory = false
}

const openEditModal = (template) => {
  isShowModal.editTemplate = true
  editSMSTemplateParam.id = template.id
  editSMSTemplateParam.templateCategoryId = template.templateCategoryId
  editSMSTemplateParam.title = template.title
  editSMSTemplateParam.text = template.text
  editSMSTemplateParam.gender = template.genderAccess
}

const closeEditModal = () => {
  isShowModal.editTemplate = false
  editSMSTemplateParam.id = ''
  editSMSTemplateParam.templateCategoryId = "Bo'limni tanlang"
  editSMSTemplateParam.title = ''
  editSMSTemplateParam.text = ''
  editSMSTemplateParam.gender = 'Kim uchunligini tanlang'
}

const editTemplateCategory = (category) => {
  store.state.templateCategories
    .filter((c) => c.id !== category.id)
    .map((a) => {
      $(`#s-${a.id}`).addClass('hidden')
      $(`#f-${a.id}`).removeClass('hidden')
    })
  $(`#f-${category.id}`).addClass('hidden')
  $(`#s-${category.id}`).removeClass('hidden')
  editTemplateCategoryParam.id = category.id
  editTemplateCategoryParam.name = category.name
}

const closeEditCategory = (category) => {
  $(`#f-${category}`).removeClass('hidden')
  $(`#s-${category}`).addClass('hidden')
  editTemplateCategoryParam.id = ''
  editTemplateCategoryParam.name = ''
}

const addSMSTemplateInStore = () => {
  templateService.getSMSTemplates().then((data) => store.commit('setSMSTemplate', data))
}

const filteredTemplates = computed(() => {
  if (sortByCategoryId.value !== '' && sortByAccess.value !== '') {
    return store.state.templates
      .filter((temp) => temp.templateCategoryId === sortByCategoryId.value)
      .filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
      .filter((temp) => temp.genderAccess === sortByAccess.value)
      .filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else if (sortByCategoryId.value !== '') {
    return store.state.templates.filter((temp) => temp.templateCategoryId === sortByCategoryId.value).filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else if (sortByAccess.value !== '') {
    return store.state.templates.filter((temp) => temp.genderAccess === sortByAccess.value).filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else {
    return store.state.templates.filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  }
})

const showContent = computed(() => {
  return store.state.templates.length > 0
})

const addTemplateCategoryInStore = () => {
  templateCategoryService.getTemplateCategories().then((data) => store.commit('setTemplateCategory', data))
}

const templateCategories = computed(() => {
  return store.state.templateCategories
})

const showCategoryContent = computed(() => {
  return store.state.templateCategories.length > 0
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
  if (createSMSTemplateParam.templateCategoryId === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.title === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.text === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.gender === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templatesModule/create', createSMSTemplateParam).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli yaratildi!',
          position: 'bottomLeft',
        })
        addSMSTemplateInStore()
        createSMSTemplateParam.templateCategoryId = "Bo'limni tanlang"
        createSMSTemplateParam.title = ''
        createSMSTemplateParam.text = ''
        createSMSTemplateParam.gender = 'Kim uchunligini tanlang'
      },
      (error) => {
        notify.error({
          message: 'SMS shablon yaratishda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateSMSTemplate = () => {
  if (editSMSTemplateParam.templateCategoryId === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.title === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.text === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.gender === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templatesModule/update', editSMSTemplateParam).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli taxrirlandi!',
          position: 'bottomLeft',
        })
        addSMSTemplateInStore()
        closeEditModal()
      },
      (error) => {
        notify.error({
          message: 'SMS shablonni taxrirlashda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateTemplateCategory = () => {
  if (editTemplateCategoryParam.name === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'lim nomini kiriting!",
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templateCategoriesModule/update', editTemplateCategoryParam).then(
      () => {
        notify.success({
          message: "Bo'lim muvaffaqiyatli taxrirlandi!",
          position: 'bottomLeft',
        })
        addTemplateCategoryInStore()
        closeEditCategory(editTemplateCategoryParam.id)
      },
      (_) => {
        notify.error({
          message: "Bo'limni taxrirlashda xatolik yuz berdi!",
          position: 'bottomLeft',
        })
      }
    )
  }
}

const createTemplateCategory = () => {
  if (categoryName_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'lim nomini kiriting!",
      position: 'bottomLeft',
    })
  } else {
    const templateCategoryData = {
      name: categoryName_.value,
    }
    store.dispatch('templateCategoriesModule/create', templateCategoryData).then(
      () => {
        notify.success({
          message: "Bo'lim muvaffaqiyatli yaratildi!",
          position: 'bottomLeft',
        })
        addTemplateCategoryInStore()
        categoryName_.value = ''
      },
      (error) => {
        notify.error({
          message: "Bo'lim yaratishda xatolik yuz berdi!",
          position: 'bottomLeft',
        })
      }
    )
  }
}

const deleteSMSTemplate = (id) => {
  store.dispatch('templatesModule/delete', id).then(
    () => {
      notify.success({
        message: "SMS shablon muvaffaqiyatli o'chirildi!",
        position: 'bottomLeft',
      })
      addSMSTemplateInStore()
    },
    (error) => {
      notify.error({
        message: "SMS shablonni o'chirishda xatolik yuz berdi!",
        position: 'bottomLeft',
      })
    }
  )
}

const deleteTemplateCategory = (id) => {
  store.dispatch('templateCategoriesModule/delete', id).then(
    () => {
      notify.success({
        message: "Bo'lim muvaffaqiyatli o'chirildi!",
        position: 'bottomLeft',
      })
      addTemplateCategoryInStore()
      addSMSTemplateInStore()
    },
    (error) => {
      notify.error({
        message: "Bo'limni o'chirishda xatolik yuz berdi!",
        position: 'bottomLeft',
      })
    }
  )
}

onMounted(() => addSMSTemplateInStore(), addTemplateCategoryInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>