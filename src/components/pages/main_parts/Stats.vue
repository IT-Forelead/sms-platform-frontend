<template>
  <div class="flex justify-between items-center mt-10">
    <h3 class="text-3xl font-extrabold">Raqamli statistika</h3>
  </div>
  <div class="grid grid-cols-4 grid-flow-row-2 auto-rows-max gap-5 mt-5">
    <div v-for="item in mitems" :key="item" class="flex items-center justify-center flex-col bg-white rounded-xl p-5 pt-10">
      <div class="flex items-center justify-center bg-teal-100 rounded-xl px-4 p-3 text-gray-500 text-3xl">
        <ion-icon :name="item.icon"></ion-icon>
      </div>
      <h1 class="text-2xl font-bold pt-2">{{ item.value }}</h1>
      <span>{{ item.title }}</span>
      <hr class="my-3 mt-5 w-full"/>
      <hr class="w-1/2"/>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import contactService from '../../../services/contact.service'
import templateService from '../../../services/template.service'
import holidayService from '../../../services/holiday.service'
import messageService from '../../../services/message.service'

const store = useStore()

const addContactInStore = () => {
  store.dispatch('contactsModule/get').then(
    (data) => {
      store.commit('setContacts', data)
    },
    (error) => {
      forbiddenChecker(error, 'Kontaktlarni olishda xatolik yuz berdi!')
    }
  )
}

const addSMSTemplateInStore = () => {
  store.dispatch('templatesModule/get').then(
    (data) => {
      store.commit('setSMSTemplate', data)
    },
    (error) => {
      forbiddenChecker(error, 'SMS shablonlarni olishda xatolik yuz berdi!')
    }
  )
}

const addHolidayInStore = () => {
  store.dispatch('holidaysModule/get').then(
    (data) => {
      store.commit('setHolidays', data)
    },
    (error) => {
      forbiddenChecker(error, 'Bayramlarni olishda xatolik yuz berdi!')
    }
  )
}

const addMessageInStore = () => {
  store.dispatch('messagesModule/get').then(
    (data) => {
      store.commit('setMessage', data)
    },
    (error) => {
      forbiddenChecker(error, 'Xabarlarni olishda xatolik yuz berdi!')
    }
  )
}

const mitems = computed(() => {
  return [
    {
      icon: 'people-outline',
      value: store.state.contacts.length,
      title: 'Kontaktlar',
    },
    {
      icon: 'chatbox-ellipses-outline',
      value: store.state.templates.length,
      title: 'SMS shablonlar',
    },
    {
      icon: 'gift-outline',
      value: store.state.holidays.length,
      title: 'Bayramlar',
    },
    {
      icon: 'mail-outline',
      value: store.state.messages.length,
      title: "Jo'natilgan SMSlar",
    },
  ]
})

onMounted(() => {
  addContactInStore(),
  addSMSTemplateInStore(),
  addHolidayInStore(),
  addMessageInStore()
})
</script>