<template>
  <div class="p-3">
    <div class="flex items-center justify-between">
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex pl-1 items-center">
          <button type="submit" class="p-3 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-gray-500 w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input v-model="search" type="search" name="search" class="bg-white text-gray-500 py-1.5 text-lg rounded-lg pl-12 focus:outline-none outline-none border-0" placeholder="Raqam bo'yicha izlash..." autocomplete="off" />
      </div>
      <div class="relative pr-3" x-data="{sort: false}">
        <div x-on:click="sort = true" class="bg-white rounded-xl px-5 p-2 ml-3 text-gray-500 font-semibold hover:bg-gray-200 cursor-pointer"><i class="fa fa-filter"></i> {{ sortBy === '' ? 'Saralash' : changeSort(sortBy) }} <i @click="clearSort()" class="hover:text-red-500 ml-1 cursor-pointer fa" :class="{ 'fa-times': sortBy !== '' }"></i></div>
        <div x-show="sort" x-on:click.outside="sort = false" class="dropdown absolute right-0 top-12 z-10 bg-white border divide-y divide-gray-100 rounded shadow w-44">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li class="border-b border-dotted cursor-pointer">
              <a x-on:click="sort = false" @click="sortByFunc('soFarBirthday')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-users mr-1"></i> Tug'ilgan kun</a>
            </li>
            <li class="border-b border-dotted cursor-pointer">
              <a x-on:click="sort = false" @click="sortByFunc('male')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-mars mr-1"></i> Erkaklar</a>
            </li>
            <li class="border-b border-dotted cursor-pointer">
              <a x-on:click="sort = false" @click="sortByFunc('female')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-venus mr-1"></i> Ayollar</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="mt-3 pr-3 rounded-lg relative custom-height overflow-y-auto">
      <div v-if="showContent">
        <div x-data="{open: false}" v-for="(contact, index) in contacts" :key="index" class="relative bg-white px-5 py-2 my-2 flex items-center rounded-lg cursor-pointer hover:text-violet-700 hover:bg-violet-100">
          <div class="flex items-center justify-center h-16 w-16 rounded-full" :class="phonePrefixColor(Number(contact.phone.slice(4, 6)))">
            <div class="text-center text-white">
              <div class="text-xl font-bold">{{ contact.birthday.slice(8, 10) }}</div>
              <div class="text-sm font-bold">{{ month(contact.birthday.slice(5, 7)) }}</div>
            </div>
          </div>
          <div class="ml-4">
            <p class="text-2xl font-semibold m-0 p-0">{{ phoneStyle(contact.phone) }}</p>
            <p class="text-lg text-gray-500 -mt-0.5 font-semibold">{{ contact.firstName + ' ' + contact.lastName }}</p>
          </div>
          <i x-on:click="open = true" class="fa-solid fa-ellipsis-vertical p-1.5 px-3 absolute hover:bg-violet-400 hover:shadow hover:text-white top-1 right-1 rounded-full"></i>
          <div x-show="open" x-on:click.outside="open = false" class="dropdown-content-for-edit-contact absolute right-1 top-8 z-10 bg-white border divide-y divide-gray-100 rounded shadow w-44">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
              <li class="border-b border-dotted">
                <a @click="openEditModal(contact)" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-user-pen mr-1"></i> Taxrirlash</a>
              </li>
              <li>
                <a @click="deleteContact(contact.id)" class="block px-4 py-2 text-gray-700 hover:bg-gray-100"><i class="fa-solid fa-trash mr-1"></i> O'chirish</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div v-else class="rounded-lg text-lg bg-white px-5 py-10">
        <h3 class="text-center text-red-700">Kontaktlar mavjud emas!</h3>
      </div>
    </div>
  </div>

  <div v-show="isShowModal" id="edit-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeEditModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">Kontaktni taxrirlash</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <form @submit.prevent="updateContact()">
            <div class="mb-6">
              <label for="first-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Familiyasi</label>
              <input type="text" id="first-name-input" v-model="editContactParam.lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Familiyani kiriting..." />
            </div>
            <div class="mb-6">
              <label for="last-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ismi</label>
              <input type="text" id="last-name-input" v-model="editContactParam.firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismni kiriting..." />
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Jinsi</label>
              <select id="gender-input" v-model="editContactParam.gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Jinsni tanlang</option>
                <option value="male">Erkak</option>
                <option value="female">Ayol</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="birthday-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Tug'ilgan kuni</label>
              <input type="date" id="birthday-input" v-model="editContactParam.birthday" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="mb-6">
              <label for="phone-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Telefon raqami</label>
              <input type="text" id="phone-input" v-mask="'+### (##) ###-##-##'" v-model="editContactParam.phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+998 (99) 123-45-67" />
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
import contactService from '../../../services/contact.service'

const store = useStore()

const search = ref('')
const sortBy = ref('')
const isShowModal = ref(false)

const editContactParam = reactive({
  id: '',
  firstName: '',
  lastName: '',
  gender: 'Jinsni tanlang',
  birthday: '',
  phone: '',
})

const openEditModal = (contact) => {
  isShowModal.value = true
  editContactParam.id = contact.id
  editContactParam.firstName = contact.firstName
  editContactParam.lastName = contact.lastName
  editContactParam.gender = contact.gender
  editContactParam.birthday = contact.birthday
  editContactParam.phone = contact.phone
}

const closeEditModal = () => {
  isShowModal.value = false
  editContactParam.id = ''
  editContactParam.firstName = ''
  editContactParam.lastName = ''
  editContactParam.gender = 'Jinsni tanlang'
  editContactParam.birthday = ''
  editContactParam.phone = ''
}

const sortByFunc = (sort) => {
  sortBy.value = sort
}

const clearSort = () => (sortBy.value = '')

const addContactInStore = () => {
  contactService.getContacts().then((data) => store.commit('setContacts', data))
}

const contacts = computed(() => {
  if (sortBy.value !== '' && sortBy.value !== 'soFarBirthday') {
    return store.state.contacts.filter((con) => con.gender === sortBy.value)
  } else {
    return store.state.contacts.filter((con) => con.phone.includes(search.value))
  }
})

const showContent = computed(() => {
  return store.state.contacts.length > 0
})

const changeSort = (sort) => {
  switch (sort) {
    case 'soFarBirthday':
      return "Tug'ilgan kun"
    case 'male':
      return 'Erkaklar'
    case 'female':
      return 'Ayollar'
    default:
      break
  }
}

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

const phoneStyle = (phone) => {
  return `${phone.slice(0, 4)} (${phone.slice(4, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
}

const month = (index) => {
  const months = ['', 'YAN', 'FEV', 'MAR', 'APR', 'MAY', 'IYN', 'IYL', 'AVG', 'SEN', 'OKT', 'NOY', 'DEK']
  return months[Number(index)]
}

const addContactsInStore = () => {
  contactService.getContacts().then((data) => store.commit('setContacts', data))
}

const deleteContact = (id) => {
  store.dispatch('contactsModule/delete', id).then(
    () => {
      notify.success({
        message: 'Kontakt muvaffaqiyatli o`chirildi!',
        position: 'bottomLeft',
      })
      addContactsInStore()
    },
    (error) => {
      notify.error({
        message: 'Kontakt o`chirishda xatolik yuz berdi!',
        position: 'bottomLeft',
      })
    }
  )
}

const updateContact = () => {
  editContactParam.phone = editContactParam.phone.replace(')', '').replace('(', '').replace(' ', '').replace(' ', '').replace('-', '').replace('-', '')
  if (contacts.value.filter((i) => i.phone === editContactParam.phone)[0]) {
    notify.warning({
      title: 'Diqqat!',
      message: `Bu <strong style="color: #000;">${editContactParam.phone}</strong> kontakt allaqachon bazada mavjud!`,
      position: 'bottomLeft',
    })
  } else if (editContactParam.firstName === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, familyani kiriting!',
      position: 'bottomLeft',
    })
  } else if (editContactParam.lastName === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, ismni kiriting!',
      position: 'bottomLeft',
    })
  } else if (editContactParam.gender === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, jinsni tanlang!',
      position: 'bottomLeft',
    })
  } else if (editContactParam.birthday === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, tug'ilgan kunni kiriting!",
      position: 'bottomLeft',
    })
  } else if (editContactParam.phone === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, telefon raqamni kiriting!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('contactsModule/update', editContactParam).then(
      () => {
        notify.success({
          message: 'Kontakt muvaffaqiyatli taxrirlandi!',
          position: 'bottomLeft',
        })
        addContactsInStore()
        closeEditModal()
      },
      (error) => {
        notify.error({
          message: 'Kontaktni taxrirlashda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

onMounted(() => addContactInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>