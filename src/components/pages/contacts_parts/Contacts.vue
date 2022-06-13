<template>
  <div class="p-3">
    <div class="flex items-center justify-center">
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Barchasi</div>
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Yangilari</div>
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Tug'ilgan kun</div>
    </div>
    <div class="mt-3 p-3 rounded-lg relative custom-height overflow-y-auto">
      <div v-for="(contact, index) in contacts" :key="index" class="relative test-p bg-white px-5 py-2 my-2 flex items-center rounded-lg cursor-pointer hover:text-violet-700 hover:bg-violet-100">
        <div class="flex items-center justify-center h-16 w-16 rounded-full" :class="phonePrefixColor(Number(contact.phone.slice(4,6)))">
          <div class="text-center text-white">
            <div class="text-xl font-bold">{{ contact.birthday.slice(8, 10) }}</div>
            <div class="text-sm font-bold">{{ month(contact.birthday.slice(5, 7)) }}</div>
          </div>
        </div>
        <div class="ml-4">
          <p class="text-2xl font-semibold m-0 p-0">{{ contact.phone }}</p>
          <p class="text-lg text-gray-500 -mt-0.5 font-semibold">{{ contact.firstName + ' ' + contact.lastName }}</p>
        </div>
        <i @click="toggleDropDown(index)" class="fa-solid fa-ellipsis-vertical p-1 absolute top-1 right-1 dropbtn"></i>
        <div :id="'cit-' + index" class="dropdown-content absolute right-1 top-7 z-10 hidden bg-white border divide-y divide-gray-100 rounded shadow w-44">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li class="border-b border-dotted">
              <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-user-pen mr-1"></i> Taxrirlash</a>
            </li>
            <li>
              <a href="#" @click="deleteContact(contact.id)" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-trash mr-1"></i> O'chirish</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import $ from 'jquery'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import contactService from '../../../services/contact.service'

const store = useStore()

const addContactInStore = () => {
  contactService.getContacts().then((data) => store.commit('setContacts', data))
}

const contacts = computed(() => {
  return store.state.contacts
})

const phonePrefixColor = (phonePrefix) => {
  switch (phonePrefix) {
    case 93 || 94:
      return 'bg-sky-500'
    case 97 || 88:
      return 'bg-red-500'
    case 90 || 91:
      return 'bg-yellow-300'
    case 95 || 98:
      return 'bg-green-500'
    case 99:
      return 'bg-blue-500'
    case 33:
      return 'bg-yellow-400'
    default:
      return 'bg-lime-500'
  }
}

const month = (index) => {
  const months = ['', 'YAN', 'FEV', 'MAR', 'APR', 'MAY', 'IYN', 'IYL', 'AVG', 'SEN', 'OKT', 'NOY', 'DEK']
  return months[Number(index)]
}

onMounted(() => addContactInStore())

function toggleDropDown(id) {
  let dropdowns = document.getElementsByClassName('dropdown-content')
  for (let i = 0; i < dropdowns.length; i++) {
    var closeDropdown = dropdowns[i]
    if (!closeDropdown.classList.contains('hidden')) {
      closeDropdown.classList.add('hidden')
    }
  }
  $(`#cit-${id}`).toggleClass('hidden')
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content')
    for (let i = 0; i < dropdowns.length; i++) {
      var closeDropdown = dropdowns[i]
      if (!closeDropdown.classList.contains('hidden')) {
        closeDropdown.classList.add('hidden')
      }
    }
  }
}

const addContactsInStore = () => {
  contactService.getContacts().then((data) => store.commit('setContacts', data))
}

const deleteContact = (id) => {
  store.dispatch('contactsModule/delete', id).then(
    () => {
      notify.success({
        message: 'Kontakt muvaffaqiyatli o`chirildi!',
        position: 'bottomRight',
      })
      addContactsInStore()
    },
    (error) => {
      notify.error({
        message: 'Kontakt o`chirishda xatolik yuz berdi!',
        position: 'bottomRight',
      })
    }
  )
}
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
</style>