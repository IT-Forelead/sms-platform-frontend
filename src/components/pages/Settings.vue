<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold ml-2 mb-1">Settings</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <h3 class="text-2xl font-extrabold mb-3">Tug'ilgan kun tabrigi</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-3" />
          <form @submit.prevent="updateSMSTemplateOfBirthday()">
            <h3 class="text-lg font-semibold mb-2">Erkaklar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-if="showContentForMan">
                <div v-for="(template, index) in templatesForMan" :key="index" class="flex items-center border-b border-dashed py-1">
                  <input v-model="editSMSIdsOfBirthdayParam.smsMenId" :value="template.id" :id="'man' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="man" />
                  <label :for="'man' + template.id" class="block font-medium text-gray-900 dark:text-gray-300">
                    <div class="text-md font-semibold">{{ template.title }}</div>
                    <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                  </label>
                </div>
              </div>
              <div v-else class="text-lg">
                <h3 class="text-center text-red-700">Erkaklar uchun SMS shablonlar mavjud emas!</h3>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-3" />
            <h3 class="text-lg font-semibold mb-2">Ayollar uchun</h3>
            <div class="max-h-40 overflow-y-auto p-3 mb-6">
              <div v-if="showContentForWoman">
                <div v-for="(template, index) in templatesForWoman" :key="index" class="flex items-center border-b border-dashed py-1">
                  <input v-model="editSMSIdsOfBirthdayParam.smsWomenId" :value="template.id" :id="'woman' + template.id" class="my-auto transform scale-125 mr-5" type="radio" name="woman" />
                  <label :for="'woman' + template.id" class="block font-medium text-gray-900 dark:text-gray-300">
                    <div class="text-md font-semibold">{{ template.title }}</div>
                    <div class="text-sm">{{ template.text.length > 180 ? template.text.slice(0, 180) + '...' : template.text }}</div>
                  </label>
                </div>
              </div>
              <div v-else class="text-lg">
                <h3 class="text-center text-red-700">Ayollar uchun SMS shablonlar mavjud emas!</h3>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 my-3">
          <h3 class="text-2xl font-extrabold mb-3">Tizim sozlamalari</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form @submit.prevent="validateSetting(settings)">
            <div class="mb-1">
              <div class="flex justify-between items-center py-3 border-b border-dotted">
                <div class="text-xl font-medium text-gray-900">Bayramlarda avtomatik tabrik jo'natish</div>
                <label for="holiday-toggle" class="inline-flex relative items-center cursor-pointer mr-3">
                  <input v-model="editSettingParam.autoSendHoliday" :value="settings.autoSendHoliday" :checked="settings.autoSendHoliday" type="checkbox" id="holiday-toggle" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex justify-between items-center py-3 border-b border-dotted">
                <div class="text-xl font-medium text-gray-900">Tug'ilgan kunlarda avtomatik tabrik jo'natish</div>
                <label for="birthday-toggle" class="inline-flex relative items-center cursor-pointer mr-3">
                  <input v-model="editSettingParam.autoSendBirthday" :value="settings.autoSendBirthday" :checked="settings.autoSendBirthday" type="checkbox" id="birthday-toggle" class="sr-only peer" />
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <div class="mb-1">
              <div class="flex justify-between items-center py-3">
                <div class="text-xl font-medium text-gray-900">Tungi mavzuni</div>
                <label for="one-dark-toggle" class="inline-flex relative items-center mb-5 cursor-pointer mr-3">
                  <input type="checkbox" value="" id="one-dark-toggle" class="sr-only peer" disabled />
                  <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
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
import settingService from '../../services/setting.service'
import templateService from '../../services/template.service'

const store = useStore()

const editSettingParam = reactive({
  autoSendBirthday: false,
  autoSendHoliday: false,
  darkTheme: false,
})

const editSMSIdsOfBirthdayParam = reactive({
  smsWomenId: '',
  smsMenId: '',
})

const addSettingInStore = () => {
  settingService.getSettings().then((data) => store.commit('setSetting', data))
}

const settings = computed(() => {
  return store.state.settings
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

const saveSettings = (setting) => {
  editSettingParam.autoSendBirthday = setting.autoSendBirthday
  editSettingParam.autoSendHoliday = setting.autoSendHoliday
  editSettingParam.darkTheme = setting.darkTheme
}
saveSettings(store.state.settings)

const saveTemplatesOfBirthday = (setting) => {
  editSMSIdsOfBirthdayParam.smsWomenId = setting.smsWomenId
  editSMSIdsOfBirthdayParam.smsMenId = setting.smsMenId
}
saveTemplatesOfBirthday(store.state.settings)

const validateSetting = (setting) => {
  if (editSettingParam.autoSendBirthday === undefined && editSettingParam.autoSendHoliday === undefined && editSettingParam.darkTheme === undefined) {
    notify.warning({
      message: 'Tizim sozlamalarini o`zgartirmadingiz!',
      position: 'bottomLeft',
    })
  } else if (editSettingParam.autoSendBirthday === true || editSettingParam.autoSendBirthday === false) {
    editSettingParam.autoSendHoliday = setting.autoSendHoliday
    editSettingParam.darkTheme = setting.darkTheme
    updateSettings()
  } else if (editSettingParam.autoSendHoliday === true || editSettingParam.autoSendHoliday === false) {
    editSettingParam.autoSendBirthday = setting.autoSendBirthday
    editSettingParam.darkTheme = setting.darkTheme
    updateSettings()
  }
}

const updateSettings = () => {
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
        addSMSTemplateInStore()
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
onMounted(() => addSettingInStore(), addSMSTemplateInStore())
</script>