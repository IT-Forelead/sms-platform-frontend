<template>
  <div class="px-3">
    <div class="mb-5 grid grid-cols-2 gap-1">
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 my-3 dark:border-gray-600 dark:bg-gray-800">
          <h3 class="text-2xl font-extrabold mb-3 dark:text-gray-300">Tizim sozlamalari</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6 dark:border-gray-600"/>
          <form @submit.prevent="validateSetting(settings)">
            <div class="mb-1">
              <div class="flex items-center justify-between border-b border-dotted py-3 dark:border-gray-600">
                <div class="text-xl font-medium text-gray-900 dark:text-gray-300">Tug'ilgan kunlarda avtomatik tabrik jo'natish</div>
                <label for="birthday-toggle" class="relative mr-3 inline-flex cursor-pointer items-center">
                  <input v-model="autoSendBirthdayVal" type="checkbox" id="birthday-toggle" class="peer sr-only" />
                  <div class="h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
                </label>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex items-center justify-between border-b border-dotted py-3 dark:border-gray-600">
                <div class="text-xl font-medium text-gray-900 dark:text-gray-300">Bayramlarda avtomatik tabrik jo'natish</div>
                <label for="holiday-toggle" class="relative mr-3 inline-flex cursor-pointer items-center">
                  <input v-model="autoSendHolidayVal" :checked="settings.autoSendHoliday" type="checkbox" id="holiday-toggle" class="peer sr-only" />
                  <div class="h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
                </label>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex items-center justify-between py-3">
                <div class="text-xl font-medium text-gray-900 dark:text-gray-300">Tungi mavzuni yoqish</div>
                <label for="one-dark-toggle" class="inline-flex relative items-center mb-5 cursor-pointer mr-3">
                  <input type="checkbox" value="" id="one-dark-toggle" class="sr-only peer" disabled />
                  <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <hr class="bottom-1 mb-6 border-dotted border-gray-200 dark:border-gray-600"/>
            <div class="flex justify-end">
              <button type="submit" class="mx-1 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import settingService from '../../services/setting.service'

const store = useStore()

const editSettingParam = {
  autoSendBirthday: false,
  autoSendHoliday: false,
  darkTheme: false,
}

const autoSendHolidayVal = ref(false)
const autoSendBirthdayVal = ref(false)
const darkThemeVal = ref(false)

const addSettingInStore = () => {
  store.dispatch('settingsModule/get').then(
    (data) => {
      store.commit('setSetting', data)
    },
    (error) => {
      forbiddenChecker(error, 'Sozlamalarni olishda xatolik yuz berdi!')
    }
  )
}

const settings = computed(() => {
  return store.state.settings
})

autoSendBirthdayVal.value = store.state.settings.autoSendBirthday
autoSendHolidayVal.value = store.state.settings.autoSendHoliday
darkThemeVal.value = store.state.settings.darkTheme

const validateSetting = (settings) => {
  editSettingParam.autoSendBirthday = autoSendBirthdayVal.value
  editSettingParam.autoSendHoliday = autoSendHolidayVal.value
  editSettingParam.darkTheme = darkThemeVal.value
  updateSettings(editSettingParam)
}

const updateSettings = (editSettingParam) => {
  store.dispatch('settingsModule/update', editSettingParam).then(
    () => {
      notify.success({
        message: 'Sozlamalar muvaffaqiyatli saqlandi!',
        position: 'bottomLeft',
      })
      addSettingInStore()
    },
    (_) => {
      notify.error({
        message: 'Sozlamalarni saqlashda xatolik yuz berdi!',
        position: 'bottomLeft',
      })
    }
  )
}

onMounted(() => addSettingInStore())
</script>
