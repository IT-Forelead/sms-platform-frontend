<template>
  <div class="bg-white rounded-lg p-3 px-5 mt-3 max-content-h">
    <h3 class="text-2xl font-extrabold mb-3">Kontakt yaratish</h3>
    <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
    <form @submit.prevent="createContact">
      <div class="mb-6">
        <label for="first-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Familiyasi</label>
        <input type="text" id="first-name-input" v-model="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Familiyani kiriting..." />
      </div>
      <div class="mb-6">
        <label for="last-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ismi</label>
        <input type="text" id="last-name-input" v-model="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismni kiriting..." />
      </div>
      <div class="mb-6">
        <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Jinsi</label>
        <select id="gender-input" v-model="gender_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Jinsni tanlang</option>
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="birthday-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Tug'ilgan kuni</label>
        <input type="date" id="birthday-input" v-model="birthday_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-6">
        <label for="phone-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Telefon raqami</label>
        <input type="text" id="phone-input" v-mask="'+### (##) ###-##-##'" v-model="phone_" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+998 (99) 123-45-67" />
      </div>
      <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
      <div class="flex justify-end">
        <input type="reset" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" />
        <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jo'natish</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import ContactService from '../../../services/contact.service'

const store = useStore()

const first_name = ref('')
const last_name = ref('')
const gender_ = ref('Jinsni tanlang')
const birthday_ = ref('')
const phone_ = ref('')

const contacts = computed(() => {
  return store.state.contacts
})

const addContactsInStore = () => {
  ContactService.getContacts().then((data) => store.commit('setContacts', data))
}

const createContact = () => {
  phone_.value = phone_.value.replace(')', '').replace('(', '').replace(' ', '').replace(' ', '').replace('-', '').replace('-', '')
  if (contacts.value.filter(i => i.phone === phone_.value)[0]) {
    notify.warning({
      title: 'Diqqat!',
      message: `Bu <strong style="color: #000;">${phone_.value}</strong> kontakt allaqachon bazada mavjud!`,
      position: 'bottomLeft',
    })
  } else if (last_name.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, familyani kiriting!',
      position: 'bottomLeft',
    })
  } else if (last_name.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, ismni kiriting!',
      position: 'bottomLeft',
    })
  } else if (gender_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, jinsni tanlang!',
      position: 'bottomLeft',
    })
  } else if (birthday_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, tug'ilgan kunni kiriting!",
      position: 'bottomLeft',
    })
  } else if (phone_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, telefon raqamni kiriting!',
      position: 'bottomLeft',
    })
  } else {
    const contactData = {
      firstName: first_name.value,
      lastName: last_name.value,
      gender: gender_.value,
      birthday: birthday_.value,
      phone: phone_.value,
    }
    store.dispatch('contactsModule/create', contactData).then(
      () => {
        notify.success({
          message: 'Kontakt muvaffaqiyatli yaratildi!',
          position: 'bottomLeft',
        })
        addContactsInStore()
        first_name.value = ''
        last_name.value = ''
        gender_.value = 'Jinsni tanlang'
        birthday_.value = ''
        phone_.value = ''
      },
      (error) => {
        notify.error({
          message: 'Kontakt yaratishda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}
</script>