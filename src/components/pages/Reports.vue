<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">Bayramlar</h3>
    <div class="w-full mb-8 overflow-hidden rounded-lg">
      <table class="w-full divide-y divide-gray-300">
        <thead class="bg-gray-50">
          <tr class="text-md font-semibold tracking-wide text-left text-gray-900">
            <th scope="col" class="px-4 py-3">Kontakt</th>
            <th scope="col" class="px-4 py-3">Yuborilgan vaqti</th>
            <th scope="col" class="px-4 py-3">Yuborish sababi</th>
            <th scope="col" class="px-4 py-3">SMS matni</th>
            <th scope="col" class="px-4 py-3">Statistika</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <tr @click="openModal()" class="text-gray-700" data-modal-toggle="default-modal">
            <td class="whitespace-nowrap px-4 py-3 text-md">
              <div class="flex items-center">
                <div class="flex items-center justify-center bg-red-500 h-10 w-10 border border-gray-50 rounded-full">
                  <div class="text-center text-md font-bold text-white">I</div>
                </div>
                <div class="flex items-center justify-center bg-sky-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">T</div>
                </div>
                <div class="flex items-center justify-center bg-orange-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">F</div>
                </div>
                <div class="flex items-center justify-center bg-yellow-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">S</div>
                </div>
                <div class="text-md ml-4 font-semibold">Jami 35 kontakt</div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 text-md">12.02.2022</td>
            <td class="whitespace-nowrap px-4 py-3 text-md">Yangi yil</td>
            <td class="whitespace-nowrap px-4 py-3 text-xs">Assalomu alaykum [USER]! Sizni...</td>
            <td class="whitespace-nowrap px-6 py-3 text-xs align-middle">
              <div class="flex items-center">
                <span class="mr-2">60%</span>
                <div class="relative w-full">
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                    <div style="width: 60%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="whitespace-nowrap px-4 py-3 text-md">
              <div class="flex items-center">
                <div class="flex items-center justify-center bg-red-500 h-10 w-10 border border-gray-50 rounded-full">
                  <div class="text-center text-md font-bold text-white">I</div>
                </div>
                <div class="flex items-center justify-center bg-sky-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">T</div>
                </div>
                <div class="flex items-center justify-center bg-orange-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">F</div>
                </div>
                <div class="flex items-center justify-center bg-yellow-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">S</div>
                </div>
                <div class="text-md ml-4 font-semibold">Jami 35 kontakt</div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 text-md">12.02.2022</td>
            <td class="whitespace-nowrap px-4 py-3 text-md">Yangi yil</td>
            <td class="whitespace-nowrap px-4 py-3 text-xs">Assalomu alaykum [USER]! Sizni...</td>
            <td class="whitespace-nowrap px-6 py-3 text-xs align-middle">
              <div class="flex items-center">
                <span class="mr-2">90%</span>
                <div class="relative w-full">
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                    <div style="width: 90%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="whitespace-nowrap px-4 py-3 text-md">
              <div class="flex items-center">
                <div class="flex items-center justify-center bg-red-500 h-10 w-10 border border-gray-50 rounded-full">
                  <div class="text-center text-md font-bold text-white">I</div>
                </div>
                <div class="flex items-center justify-center bg-sky-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">T</div>
                </div>
                <div class="flex items-center justify-center bg-orange-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">F</div>
                </div>
                <div class="flex items-center justify-center bg-yellow-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">S</div>
                </div>
                <div class="text-md ml-4 font-semibold">Jami 35 kontakt</div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 text-md">12.02.2022</td>
            <td class="whitespace-nowrap px-4 py-3 text-md">Yangi yil</td>
            <td class="whitespace-nowrap px-4 py-3 text-xs">Assalomu alaykum [USER]! Sizni...</td>
            <td class="whitespace-nowrap px-6 py-3 text-xs align-middle">
              <div class="flex items-center">
                <span class="mr-2">100%</span>
                <div class="relative w-full">
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-emerald-500">
                    <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="text-gray-700">
            <td class="whitespace-nowrap px-4 py-3 text-md">
              <div class="flex items-center">
                <div class="flex items-center justify-center bg-red-500 h-10 w-10 border border-gray-50 rounded-full">
                  <div class="text-center text-md font-bold text-white">I</div>
                </div>
                <div class="flex items-center justify-center bg-sky-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">T</div>
                </div>
                <div class="flex items-center justify-center bg-orange-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">F</div>
                </div>
                <div class="flex items-center justify-center bg-yellow-500 h-10 w-10 border border-gray-50 rounded-full -ml-5">
                  <div class="text-center text-md font-bold text-white">S</div>
                </div>
                <div class="text-md ml-4 font-semibold">Jami 35 kontakt</div>
              </div>
            </td>
            <td class="whitespace-nowrap px-4 py-3 text-md">12.02.2022</td>
            <td class="whitespace-nowrap px-4 py-3 text-md">Yangi yil</td>
            <td class="whitespace-nowrap px-4 py-3 text-xs">Assalomu alaykum [USER]! Sizni...</td>
            <td class="whitespace-nowrap px-6 py-3 text-xs align-middle">
              <div class="flex items-center">
                <span class="mr-2">73%</span>
                <div class="relative w-full">
                  <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                    <div style="width: 73%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="w-full mb-8 overflow-hidden rounded-lg">
      <div class="w-full overflow-x-auto">
        <div v-if="showMessages">
          <table class="w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900">
                <th scope="col" class="px-4 py-3">Kontakt</th>
                <th scope="col" class="px-4 py-3">Yuborilgan vaqti</th>
                <th scope="col" class="px-4 py-3">SMS matni</th>
                <th scope="col" class="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="(message, index) in messages" :key="index" class="text-gray-700">
                <td class="whitespace-nowrap px-4 py-3">
                  <div class="flex items-center text-md">
                    <div :class="phonePrefixColor(Number(message.contact.phone.slice(4, 6)))" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                      <div class="text-center text-md font-bold text-white">{{ message.contact.firstName.slice(0, 1) }}</div>
                    </div>
                    <div>
                      <p class="font-semibold text-gray-900">{{ phoneStyle(message.contact.phone) }}</p>
                      <p class="text-sm text-gray-600">{{ message.contact.firstName + ' ' + message.contact.lastName }}</p>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-4 py-3 text-md">{{ message.message.sentDate }}</td>
                <td class="whitespace-nowrap px-4 py-3 text-md">{{ message.template.text.slice(0, 25) + '...' }}</td>
                <td class="whitespace-nowrap px-4 py-3 text-sm">
                  <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">{{ deliveryStatusTranslate(message.message.deliveryStatus) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="rounded-lg text-lg bg-white px-5 py-10">
          <h3 class="text-center text-red-700">Yuborilgan SMSlar mavjud emas!</h3>
        </div>
      </div>
    </div>
  </div>

  <div v-show="showModal" id="info-temp-birthday-modal" tabindex="-1" class="overflow-y-auto w-full overlay overflow-x-hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-center md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-5xl h-full md:h-auto text-gray-800">
      <div class="relative bg-white rounded-lg shadow-lg dark:bg-gray-700 z-50">
        <button type="button" @click="closeModal()" class="absolute top-3 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="text-2xl font-extrabold py-5 ml-5">To'liq ma'lumot</h3>
        <div class="bg-white rounded-lg p-3 px-5 max-content-h">
          <div class="w-full overflow-x-auto">
            <table class="w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900">
                  <th scope="col" class="px-4 py-3">Kontakt</th>
                  <th scope="col" class="px-4 py-3">Yuborilgan vaqti</th>
                  <th scope="col" class="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody class="custom-height divide-y divide-gray-200 bg-white">
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
                <tr class="text-gray-700">
                  <td class="whitespace-nowrap px-4 py-3">
                    <div class="flex items-center text-md">
                      <div :class="phonePrefixColor(93)" class="flex mr-3 items-center justify-center h-10 w-10 border border-gray-50 rounded-full">
                        <div class="text-center text-md font-bold text-white">S</div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">+998 (93) 747-59-95</p>
                        <p class="text-sm text-gray-600">Jumaniyozov Surojiddin</p>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-4 py-3 text-md">Assalomu alaykum [USER]! Sizni...</td>
                  <td class="whitespace-nowrap px-4 py-3 text-sm">
                    <span class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-lg">Yetkazildi</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <div class="flex justify-end items-center">
            <button type="button" @click="closeModal()" class="mr-3 text-white bg-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" data-modal-toggle="popup-modal">Yopish</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import messageService from '../../services/message.service'

const store = useStore()

const showModal = ref(false)

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

const messages = computed(() => {
  return store.state.messages
})

const showMessages = computed(() => {
  return store.state.messages.length > 0
})

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
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

const deliveryStatusTranslate = (status) => {
  switch (status) {
    case 'sent':
      return 'Yuborildi'
    case 'delivered':
      return 'Yetkazildi'
    case 'failed':
      return 'Yetkazilmadi'
    case 'unknown':
      return "Noma'lum"
    default:
      return ''
  }
}

const phoneStyle = (phone) => {
  return `${phone.slice(0, 4)} (${phone.slice(4, 6)}) ${phone.slice(6, 9)}-${phone.slice(9, 11)}-${phone.slice(11, 13)}`
}

onMounted(() => addMessageInStore())
</script>

<style scoped>
.custom-height {
  height: 60vh;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>