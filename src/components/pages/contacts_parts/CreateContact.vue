<template>
  <div class="bg-white rounded-lg p-3 px-5 mt-5">
    <h3 class="text-2xl font-extrabold mb-3">Create Contact</h3>
    <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
    <form @submit.prevent="createContact">
      <div class="mb-6">
        <label for="first-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Familiyasi</label>
        <input type="text" id="first-name-input" v-model="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Familiyani kiriting..." />
      </div>
      <div class="mb-6">
        <label for="last-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ismi</label>
        <input type="text" id="last-name-input" v-model="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismni kiriting..." />
      </div>
      <div class="mb-6">
        <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Jinsi</label>
        <select id="gender-input" v-model="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Jinsni tanlang</option>
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
      </div>
      <div class="mb-6">
        <label for="birthday-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Tug'ilgan kuni</label>
        <input type="date" id="birthday-input" v-model="birthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-6">
        <label for="phone-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Telefon raqami</label>
        <input type="text" id="phone-input" v-model="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqamni kiriting..." />
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
import { ref } from 'vue'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import ContactService from '../../../services/contact.service'

const store = useStore()

const firstName = ref('')
const lastName = ref('')
const gender = ref('Jinsni tanlang')
const birthday = ref('')
const phone = ref('')

const addContactsInStore = () => {
  ContactService.getContacts().then((data) => store.commit('setContacts', data))
}
const createContact = () => {
  if (firstName.value === '') {
    notify.warning({
      title: "Diqqat!",
      message: "Iltimos, familyani kiriting!",
      position: 'bottomLeft',
    })
  } else if (lastName.value === '') {
    notify.warning({
      title: "Diqqat!",
      message: "Iltimos, ismni kiriting!",
      position: 'bottomLeft',
    })
  } else if (gender.value === '') {
    notify.warning({
      title: "Diqqat!",
      message: "Iltimos, jinsni tanlang!",
      position: 'bottomLeft',
    })
  } else if (birthday.value === '') {
    notify.warning({
      title: "Diqqat!",
      message: "Iltimos, tug'ilgan kunni kiriting!",
      position: 'bottomLeft',
    })
  } else if (phone.value === '') {
    notify.warning({
      title: "Diqqat!",
      message: "Iltimos, telefon raqamni kiriting!",
      position: 'bottomLeft',
    })
  } else {
    const contactData = {
      firstName: firstName.value,
      lastName: lastName.value,
      gender: gender.value,
      birthday: birthday.value,
      phone: phone.value,
    }
    store.dispatch('contacts/create', contactData).then(
      () => {
        notify.success({
          message: 'Kontakt muvaffaqiyatli yaratildi!',
          position: 'bottomRight',
        })
        addContactsInStore()
        this.form.firstName = ""
        lastName = ref('')
        gender = ref('Jinsni tanlang')
        birthday = ref('')
        phone.value = ""
      },
      (error) => {
        notify.error({
          message: 'Kontakt yaratishda xatolik yuz berdi!' + error,
          position: 'bottomRight',
        })
      }
    )
  }
}
</script>