<template>
  <div class="bg-zinc-100 dark:bg-gray-900 h-20 py-4 sticky-top flex justify-between items-center z-10">
    <div class="ml-5">
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex pl-2 items-center">
          <button type="submit" class="p-4 focus:outline-none focus:shadow-outline">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-gray-500 w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </span>
        <input type="search" name="search" class="bg-gray-200 text-gray-500 py-3 text-lg w-96 rounded-md pl-16 focus:outline-none focus:bg-gray-200 outline-none border-0 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:placeholder-gray-300" placeholder="Izlash..." autocomplete="off" />
      </div>
    </div>
    <div class="mr-5 flex items-center">
      <button id="dropdownNotificationBtn" @click="toggleDropDownNotification()" class="inline-block relative bg-white text-gray-500 p-2 mr-3 rounded-full hover:bg-gray-200 shadow dark:bg-gray-700 dark:hover:bg-gray-600">
        <BellIcon class="w-6 h-6 dark:text-gray-300 md:h-7 md:w-7" />
        <div v-show="showBadge">
          <div class="absolute top-0.5 right-0 p-1.5 bg-rose-500 rounded-full animate-ping"></div>
          <div class="absolute top-0.5 right-0 p-1.5 bg-rose-500 rounded-full"></div>
        </div>
      </button>
      <div id="dropdownNotification" class="hidden bg-white border rounded shadow w-96 dark:border-gray-600 dark:bg-gray-800">
        <div v-if="showBadge">
          <div v-if="settings" class="flex justify-between items-center text-md border-b dark:border-gray-600 px-5 py-3">
            <div class="flex mr-3 items-center px-1">
              <div class="relative mr-3 bottom-1.5">
                <div class="absolute top-0 right-0 p-1.5 bg-blue-500 rounded-full animate-ping"></div>
                <div class="absolute top-0 right-0 p-1.5 bg-blue-500 rounded-full"></div>
              </div>
              <div class="flex items-center justify-center bg-gray-200 h-10 w-10 rounded-full dark:bg-gray-700">
                <div class="text-center text-lg pt-1 font-bold text-gray-600 dark:text-gray-300">
                  <BookmarkIcon class="h-7 w-7" />
                </div>
              </div>
            </div>
            <div>
              <p class="font-semibold text-gray-900 dark:text-gray-300">Bildirishnoma</p>
              <p class="text-md text-gray-600 dark:text-gray-400">Tug'ilgan kun tabrigi uchun SMS shablon biriktiring!</p>
            </div>
          </div>
          <div v-for="(holiday, index) in holidays" :key="index" class="flex justify-between items-center text-md border-b px-5 py-3 dark:border-gray-600">
            <div class="flex mr-3 items-center px-1">
              <div class="relative mr-3 bottom-1.5">
                <div class="absolute top-0 right-0 p-1.5 bg-blue-500 rounded-full animate-ping"></div>
                <div class="absolute top-0 right-0 p-1.5 bg-blue-500 rounded-full"></div>
              </div>
              <div class="flex items-center justify-center bg-gray-200 h-10 w-10 rounded-full dark:bg-gray-700">
                <div class="text-center text-lg pt-1 font-bold text-gray-600 dark:text-gray-300">
                  <BookmarkIcon class="h-7 w-7" />
                </div>
              </div>
            </div>
            <div>
              <p class="font-semibold text-gray-900 dark:text-gray-300">Bildirishnoma</p>
              <p class="text-md text-gray-600 dark:text-gray-400">{{ holiday.name }} tabrigi uchun SMS shablon biriktiring!</p>
            </div>
          </div>
          <div class="flex justify-center items-center bg-gray-50 text-gray-600 text-sm border-b py-1 cursor-pointer dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600">Bildirishnomani yopish</div>
        </div>
        <div v-else class="flex justify-between flex-col items-center text-md border-b px-5 py-16 dark:border-gray-600">
          <div class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 h-16 w-16 rounded-full">
            <div class="text-center text-lg pt-1 font-bold text-gray-400">
              <BellIcon class="h-10 w-10" />
            </div>
          </div>
          <p class="text-lg text-gray-600 mt-10 dark:text-gray-400">Bildirishnomalar mavjud emas!</p>
        </div>
      </div>
      <div class="border-l-2 pl-3 flex items-center  dark:border-gray-600">
        <button id="dropdownBtn" @click="toggleDropDown()" class="text-center inline-flex items-center" type="button">
          <div class="inline-block relative bg-white text-gray-500 p-2 rounded-full hover:bg-gray-200 shadow dark:bg-gray-700 dark:hover:bg-gray-600">
            <UserIcon class="w-6 h-6 dark:text-gray-300 md:h-7 md:w-7" />
          </div>
          <strong class="text-lg font-semibold ml-2 px-2 cursor-pointer text-zinc-900 hover:text-rose-500 capitalize dark:text-gray-300">{{ name }}</strong>
          <svg class="w-4 h-4 ml-2 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="dropdownInformation" class="z-10 hidden bg-white rounded shadow w-60 dark:border-gray-600 dark:bg-gray-800">
          <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
            <li class="border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
              <router-link to="/profile" class="flex items-center px-4 py-2 text-md dark:text-gray-300">
                <UserIcon class="mr-2 text-xl dark:text-gray-300" /> Profil
              </router-link>
            </li>
            <li class="flex items-center justify-between px-3 py-2 border-b hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
              <div class="flex items-center">
                <BulbOffIcon v-if="isDark" class="w-6 h-6 mr-2" />
                <BulbOnIcon v-else class="w-6 h-6 mr-2" />
                Tungi rejim
              </div>
              <label v-if="isLight" for="checked-toggle-off" class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" id="checked-toggle-off" class="sr-only peer" />
                <div @click="toggleDark()"
                  class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700">
                </div>
              </label>
              <label v-else for="checked-toggle-on" class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" id="checked-toggle-on" class="sr-only peer" checked />
                <div @click="toggleDark()"
                  class="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-0.5 after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-600 dark:bg-gray-700">
                </div>
              </label>
            </li>
            <li class="hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600">
              <router-link to="/login" @click="onLogout()"
                class="flex items-center px-4 py-2 text-gray-700 text-md dark:text-gray-300">
                <LogoutIcon class="mr-2 text-xl dark:text-gray-300" />
                Chiqish
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogoutIcon from '../../assets/icons/LogoutIcon.vue'
import GearIcon from '../../assets/icons/GearIcon.vue'
import MenuIcon from '../../assets/icons/MenuIcon.vue'
import ListIcon from '../../assets/icons/ListIcon.vue'
import BellIcon from '../../assets/icons/BellIcon.vue'
import BulbOnIcon from '../../assets/icons/BulbOnIcon.vue'
import BulbOffIcon from '../../assets/icons/BulbOffIcon.vue'
import UserIcon from '../../assets/icons/UserIcon.vue'
import SearchIcon from '../../assets/icons/SearchIcon.vue'
import BookmarkIcon from '../../assets/icons/BookmarkIcon.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { useDark, useToggle } from '@vueuse/core'
import userService from '../../services/user.service'
import authService from '../../services/auth.service'
import holidayService from '../../services/holiday.service'
import settingService from '../../services/setting.service'
import $ from 'jquery'

const store = useStore()
const router = useRouter()

// Dark & Light mode
const isDark = useDark()
const toggleDark = useToggle(isDark)

const isLight = computed(() => {
  return localStorage.getItem('vueuse-color-scheme') === 'light'
})

function checkLogin(data) {
  store.commit('setLogin', data)
}

function onLogout() {
  store.dispatch('auth/logout').then(() => {
    checkLogin(false)
  })
}

const addUserInStore = () => {
  userService.getUser().then((data) => store.commit('setUser', data))
}

const name = computed(() => {
  return store.state.user.name
})

const showBadge = computed(() => {
  return store.state.holidays.filter((e) => e?.smsWomenId === null || e?.smsMenId === null).length > 0 || store.state.settings?.smsWomenId === null || store.state.settings?.smsMenId === null
})

const addHolidayInStore = () => {
  holidayService.getHolidays().then((data) => store.commit('setHolidays', data))
}

const holidays = computed(() => {
  return store.state.holidays.filter((e) => e?.smsWomenId === null || e?.smsMenId === null)
})

const addSettingInStore = () => {
  settingService.getSettings().then((data) => store.commit('setSetting', data))
}

const settings = computed(() => {
  return store.state.settings?.smsWomenId === null || store.state.settings?.smsMenId === null
})

function toggleDropDown() {
  $('#dropdownInformation').toggleClass('hidden')
}

$(document).click(function (event) {
  if (!$(event.target).closest('#dropdownBtn').length && !$(event.target).is('#dropdownBtn')) {
    $('#dropdownInformation').addClass('hidden')
  }
})

function toggleDropDownNotification() {
  $('#dropdownNotification').toggleClass('hidden')
}

$(document).click(function (event) {
  if (!$(event.target).closest('#dropdownNotificationBtn').length && !$(event.target).is('#dropdownNotificationBtn')) {
    $('#dropdownNotification').addClass('hidden')
  }
})

function autoLogout() {
  setTimeout(() => {
    if (!store.state.user.name) {
      authService.logout()
      checkLogin(false)
      router.go('/login')
    }
  }, 1000)
}

onMounted(() => addUserInStore(), autoLogout(), addHolidayInStore(), addSettingInStore())
</script>

<style scoped>
.hidden {
  display: none;
  transition: all 0.5s ease-in-out;
}
#dropdownInformation {
  position: absolute;
  top: 100%;
  right: 10px;
  z-index: 10;
}

#dropdownNotification {
  position: absolute;
  top: 100%;
  right: 180px;
  z-index: 10;
}
</style>