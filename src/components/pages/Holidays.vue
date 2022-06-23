<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">Bayramlar</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="custom-height overflow-y-auto mt-3 px-1">
        <div class="grid grid-cols-2 gap-2">
          <div class="relative h-52 rounded-lg from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
            <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
              <div v-show="isShowModal.birthdayAction" class="flex justify-center items-center">
                <i @click="openAddTempToBirtdayModal(settings)" class="fa-solid fa-circle-plus text-gray-700 hover:text-green-600 mr-2"></i>
                <i @click="openInfoTempToBirtdayModal()" class="fa-solid fa-circle-info cursor-pointer text-gray-700 hover:text-blue-600"></i>
              </div>
              <i @click="showBirthdayActionFunction()" id="birthday-action" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
            </div>
            <div class="absolute bottom-0 w-full max-w-lg mx-auto bg-white rounded-b-lg">
              <div class="text-center -mt-10 mb-2">
                <div class="flex items-center justify-center text-4xl bg-blue-200 border-4 text-white border-white w-20 h-20 rounded-full mx-auto">
                  <i class="fa-solid fa-cake-candles"></i>
                </div>
              </div>
              <h3 class="text-lg text-center py-1 leading-normal mb-1 font-semibold text-black">Tug'ilgan kunlar</h3>
              <p class="text-gray-500 mb-1 py-1 text-center">Kontaktlarning tug'ilgan kunlari</p>
            </div>
          </div>
          <div v-for="(holiday, index) in holidays" :key="index" class="relative h-52 rounded-lg from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
            <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
              <div class="flex justify-center items-center hidden">
                <i @click="openModal(holiday)" class="fa-solid fa-circle-plus text-gray-700 hover:text-green-600 mr-2"></i>
                <i @click="openEditModal(holiday)" class="fa-solid fa-feather-pointed cursor-pointer text-gray-700 hover:text-blue-600 mr-2"></i>
                <i @click="deleteHoliday(holiday.id)" class="fa-solid fa-trash-can cursor-pointer text-gray-700 hover:text-red-600 mr-2"></i>
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
              <p class="text-gray-500 mb-1 py-1 text-center">{{ holiday.day }} - {{ holiday.month }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5">
          <h3 class="text-2xl font-extrabold mb-3">Bayram qo'shish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form @submit.prevent="createHoliday()">
            <div class="mb-6">
              <label for="name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram nomi</label>
              <input type="text" v-model="createHolidayParam.name" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bayram nomini kiriting..." />
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram kuni</label>
              <select id="gender-input" v-model="createHolidayParam.day" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram kunini tanlang</option>
                <option v-for="item in 31" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram oyi</label>
              <select id="gender-input" v-model="createHolidayParam.month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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

  <div v-show="isShowModal.addTemplate" id="add-template-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">Bayram tabrigi</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <form @submit.prevent="updateSMSIdsInHoliday()">
            <h3 class="text-lg font-semibold ml-3 mb-2">Erkaklar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-for="(template, index) in templatesForMan" :key="index" class="flex items-center border-b border-dashed py-1">
                <input v-model="editSMSIdsInHolidayParam.smsMenId" :value="template.id" :id="'man' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="men" />
                <label :for="'man' + template.id" class="block font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  <div class="text-md font-semibold">{{ template.title }}</div>
                  <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                </label>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-3" />
            <h3 class="text-lg font-semibold ml-3 mb-2">Ayollar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-for="(template, index) in templatesForWoman" :key="index" class="flex items-center border-b border-dashed py-1">
                <input v-model="editSMSIdsInHolidayParam.smsWomenId" :value="template.id" :id="'woman' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="women" />
                <label :for="'woman' + template.id" class="block font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  <div class="text-md font-semibold">{{ template.title }}</div>
                  <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                </label>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end items-center">
              <button type="button" @click="closeModal()" class="mr-3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" data-modal-toggle="popup-modal">Yopish</button>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isShowModal.addTempToBirthday" id="add-temp-birthday-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeAddTempToBirtdayModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">Tug'ilgan kun tabrigi</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <form @submit.prevent="updateSMSTemplateOfBirthday()">
            <h3 class="text-lg font-semibold ml-3 mb-2">Erkaklar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-for="(template, index) in templatesForMan" :key="index" class="flex items-center border-b border-dashed py-1">
                <input v-model="editSMSIdsOfBirthdayParam.smsMenId" :value="template.id" :id="'man-radio' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="men" />
                <label :for="'man-radio' + template.id" class="block font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  <div class="text-md font-semibold">{{ template.title }}</div>
                  <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                </label>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-3" />
            <h3 class="text-lg font-semibold ml-3 mb-2">Ayollar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-for="(template, index) in templatesForWoman" :key="index" class="flex items-center border-b border-dashed py-1">
                <input v-model="editSMSIdsOfBirthdayParam.smsWomenId" :value="template.id" :id="'woman-radio' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="women" />
                <label :for="'woman-radio' + template.id" class="block font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                  <div class="text-md font-semibold">{{ template.title }}</div>
                  <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                </label>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end items-center">
              <button type="button" @click="closeAddTempToBirtdayModal()" class="mr-3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" data-modal-toggle="popup-modal">Yopish</button>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isShowModal.infoTempToBirthday" id="info-temp-birthday-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeInfoTempToBirtdayModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">Tug'ilgan kun tabrigi</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
            <div class="text-center overflow-y-auto text-9xl text-gray-300">
              <ion-icon name="information-circle-outline"></ion-icon>
            </div>
            <div class="overflow-y-auto p-2 mb-6">
              Tug'ilgan kun tabrigi har bir kontaktning tug'ilgan kunida SMS tabrik jo'natadi. Buning uchun tug'ilgan kun tabrigi uchun SMS shablon biriktirib qoyishingiz kerak va sozlamalardan tug'ilgan kun uchun avto tabriklashni yoqib qo'yishingiz lozim.
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end items-center">
              <button type="button" @click="closeInfoTempToBirtdayModal()" class="mr-3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" data-modal-toggle="popup-modal">Yopish</button>
            </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isShowModal.editHoliday" id="edit-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeEditModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">Bayramni taxrirlash</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <form @submit.prevent="updateHoliday()">
            <div class="mb-6">
              <label for="edit-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram nomi</label>
              <input type="text" v-model="editHolidayParam.name" id="edit-name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bayram nomini kiriting..." />
            </div>
            <div class="mb-6">
              <label for="edit-day-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram kuni</label>
              <select id="edit-day-input" v-model="editHolidayParam.day" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram kunini tanlang</option>
                <option v-for="item in 31" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="edit-month-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram oyi</label>
              <select id="edit-month-input" v-model="editHolidayParam.month" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
import { onMounted, computed, reactive } from 'vue'
import { useStore } from 'vuex'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import holidayService from '../../services/holiday.service'
import settingService from '../../services/setting.service'
import templateService from '../../services/template.service'
import $ from 'jquery'

const store = useStore()

const isShowModal = reactive({
  addTemplate: false,
  editHoliday: false,
  addTempToBirthday: false,
  infoTempToBirthday: false,
  birthdayAction: false
})

const createHolidayParam = reactive({
  name: '',
  day: 'Bayram kunini tanlang',
  month: 'Bayram oyini tanlang'
})

const editHolidayParam = reactive({
  id: '',
  name: '',
  day: 'Bayram kunini tanlang',
  month: 'Bayram oyini tanlang'
})

const editSMSIdsInHolidayParam = reactive({
  id: '',
  smsWomenId: '',
  smsMenId: ''
})

const editSMSIdsOfBirthdayParam = reactive({
  smsWomenId: '',
  smsMenId: ''
})

function showBirthdayActionFunction() {
  isShowModal.birthdayAction = !isShowModal.birthdayAction
  $('#birthday-action').toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  $('#birthday-action').parent('.actions').toggleClass('w-11').toggleClass('w-24').toggleClass('shadow').toggleClass('right-1')
}

function openActions(id) {
  let x = $(`#st-${id}`)
  x.toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  x.parent('.actions').toggleClass('w-11').toggleClass('w-32').toggleClass('shadow').toggleClass('right-1')
  x.parent('.actions').children('div').toggleClass('hidden')
}

const openModal = (holiday) => {
  isShowModal.addTemplate = true
  editSMSIdsInHolidayParam.id = holiday.id
  editSMSIdsInHolidayParam.smsWomenId = holiday.smsWomenId
  editSMSIdsInHolidayParam.smsMenId = holiday.smsMenId
}

const closeModal = () => {
  isShowModal.addTemplate = false
  editSMSIdsInHolidayParam.id = ''
  editSMSIdsInHolidayParam.smsWomenId = ''
  editSMSIdsInHolidayParam.smsMenId = ''
}

const openAddTempToBirtdayModal = (setting) => {
  isShowModal.addTempToBirthday = true
  editSMSIdsOfBirthdayParam.smsWomenId = setting.smsWomenId
  editSMSIdsOfBirthdayParam.smsMenId = setting.smsMenId
}

const closeAddTempToBirtdayModal = () => {
  isShowModal.addTempToBirthday = false
  editSMSIdsOfBirthdayParam.smsWomenId = ''
  editSMSIdsOfBirthdayParam.smsMenId = ''
}

const openInfoTempToBirtdayModal = () => {
  isShowModal.infoTempToBirthday = true
}

const closeInfoTempToBirtdayModal = () => {
  isShowModal.infoTempToBirthday = false
}

const openEditModal = (holiday) => {
  isShowModal.editHoliday = true
  editHolidayParam.id = holiday.id
  editHolidayParam.name = holiday.name
  editHolidayParam.day = holiday.day
  editHolidayParam.month = holiday.month
}

const closeEditModal = () => {
  isShowModal.editHoliday = false
  editHolidayParam.id = ''
  editHolidayParam.name = ''
  editHolidayParam.day = 'Bayram kunini tanlang'
  editHolidayParam.month = 'Bayram oyini tanlang'
}

const addSettingInStore = () => {
  settingService.getSettings().then((data) => store.commit('setSetting', data))
}

const settings = computed(() => {
  return store.state.settings
})

const addHolidayInStore = () => {
  holidayService.getHolidays().then((data) => store.commit('setHolidays', data))
}

const holidays = computed(() => {
  return store.state.holidays
})

const showContent = computed(() => {
  return store.state.holidays.length > 0
})

const addSMSTemplateInStore = () => {
  templateService.getSMSTemplates().then((data) => store.commit('setSMSTemplate', data))
}

const templatesForMan = computed(() => {
  return store.state.templates.filter((e) => e.genderAccess !== 'female')
})

const templatesForWoman = computed(() => {
  return store.state.templates.filter((e) => e.genderAccess !== 'male')
})

const showContentForMan = computed(() => {
  return store.state.templates.filter((e) => e.genderAccess !== 'female').length > 0
})

const showContentForWoman = computed(() => {
  return store.state.templates.filter((e) => e.genderAccess !== 'male').length > 0
})

const createHoliday = () => {
  if (createHolidayParam.name === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram nomini kiriting!',
      position: 'bottomLeft',
    })
  } else if (createHolidayParam.day === 'Bayram kunini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram kunini tanlang!',
      position: 'bottomLeft',
    })
  } else if (createHolidayParam.month === 'Bayram oyini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram oyini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('holidaysModule/create', createHolidayParam).then(
      () => {
        notify.success({
          message: 'Bayram muvaffaqiyatli yaratildi!',
          position: 'bottomLeft',
        })
        addHolidayInStore()
        createHolidayParam.name = ''
        createHolidayParam.day = 'Bayram kunini tanlang'
        createHolidayParam.month = 'Bayram oyini tanlang'
      },
      (error) => {
        notify.error({
          message: 'Bayram yaratishda xatolik yuz berdi!',
          position: 'bottomLeft',
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
        position: 'bottomLeft',
      })
      addHolidayInStore()
    },
    (error) => {
      notify.error({
        message: "Bayramni o'chirishda xatolik yuz berdi!",
        position: 'bottomLeft',
      })
    }
  )
}

const updateHoliday = () => {
  if (editHolidayParam.name === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram nomini kiriting!',
      position: 'bottomLeft',
    })
  } else if (editHolidayParam.day === 'Bayram kunini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram kunini tanlang!',
      position: 'bottomLeft',
    })
  } else if (editHolidayParam.month === 'Bayram oyini tanlang') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, bayram oyini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('holidaysModule/update', editHolidayParam).then(
      () => {
        notify.success({
          message: 'Bayram muvaffaqiyatli taxrirlandi!',
          position: 'bottomLeft',
        })
        addHolidayInStore()
        closeEditModal()
      },
      (error) => {
        notify.error({
          message: 'Bayramni taxrirlashda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateSMSTemplateOfBirthday = () => {
  if (editSMSIdsOfBirthdayParam.smsWomenId === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, Ayollar uchun SMS shablon tanlang!',
      position: 'bottomLeft',
    })
  } else if (editSMSIdsOfBirthdayParam.smsMenId === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, Erkaklar uchun SMS shablonni tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('settingsModule/updateSMSIds', editSMSIdsOfBirthdayParam).then(
      () => {
        notify.success({
          message: "Tug'ilgan kun uchun SMS shablon muvaffaqiyatli biriktirildi!",
          position: 'bottomLeft',
        })
        addSettingInStore()
        closeAddTempToBirtdayModal()
      },
      (_) => {
        notify.error({
          message: "Tug'ilgan kun uchun SMS shablonni biriktirishda xatolik yuz berdi!",
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateSMSIdsInHoliday = () => {
  if (editSMSIdsInHolidayParam.smsWomenId === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, Ayollar uchun SMS shablon tanlang!',
      position: 'bottomLeft',
    })
  } else if (editSMSIdsInHolidayParam.smsMenId === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, Erkaklar uchun SMS shablonni tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('holidaysModule/updateSMSIds', editSMSIdsInHolidayParam).then(
      () => {
        notify.success({
          message: 'Bayram uchun SMS shablon muvaffaqiyatli biriktirildi!',
          position: 'bottomLeft',
        })
        addHolidayInStore()
        closeModal()
      },
      (error) => {
        notify.error({
          message: 'Bayram uchun SMS shablonni biriktirishda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

onMounted(() => addSettingInStore(), addHolidayInStore(), addSMSTemplateInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>