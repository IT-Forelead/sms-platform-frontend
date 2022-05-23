<template>
  <div class="bg-zinc-100 h-20 py-4 sticky-top mb-3 flex justify-between items-center">
      <div class="ml-5">
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex pl-2">
            <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="text-gray-500 w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
          <input type="search" name="search" class="bg-gray-200 text-gray-500 py-3 text-sm rounded-md pl-10 focus:outline-none focus:bg-gray-200" placeholder="Search..." autocomplete="off">
        </div>
      </div>
      <div class="mr-5">
        <button class='inline-block relative bg-white text-gray-500 p-2 mr-3 rounded-full hover:bg-gray-200'>
          <i class="fa fa-bell px-1 cursor-pointe"></i>
          <div class="absolute top-0.5 right-0 p-1.5 bg-rose-500 rounded-full"></div>
        </button>
        
        <div class="border-l-2 pl-3 inline-block">
          <div class="inline-block relative bg-white text-gray-500 p-2 rounded-full hover:bg-gray-200">
            <i class="fa fa-user px-1 cursor-pointe"></i>
          </div>
          <strong class="text-lg font-semibold px-2 cursor-pointer text-zinc-900 hover:text-rose-500 capitalize">Admin</strong>
          <a href="/login"><i class="fa-solid fa-chevron-down px-2 cursor-pointer text-gray-500 hover:text-rose-500" @click="onLogout()"></i></a>
        </div>
      </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import {computed} from "vue";

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    // const userInfo = computed(() => JSON.parse(localStorage.getItem('user')))
    function checkLogin(data) {
      store.commit('setLogin', data)
    }

    function onLogout() {
      store.dispatch('auth/logout').then(() => {
        checkLogin(false)
        router.push('/login')
      })
    }

    return {
      onLogout,
      // userInfo,
    }
  },
}
</script>

<style scoped>
</style>