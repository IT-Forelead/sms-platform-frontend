<template>
  <div class="w-80 h-screen fixed" id="sidenavSecExample">
    <div class="p-2 pl-10 mt-3 ml-3">
      <router-link class="cursor-pointer" to="/">
        <div class="flex items-center">
          <img src="../../assets/images/logo.png" class="shrink-0 w-14" alt="#" />
          <h2 class="grow ml-3 font-semibold text-2xl text-zinc-900 dark:text-gray-300">IT-Forelead</h2>
        </div>
      </router-link>
    </div>
    <ul class="relative mt-5 ml-3">
      <li class="relative" v-for="menu of menus" :key="menu">
        <MenuItem :menu="menu" />
      </li>
    </ul>
    <div class="relative custom-top text-sm text-gray-400 text-center dark:text-gray-400">
      Copyright &copy; 2022 <a href="https://it-forelead.uz" class="hover:underline">IT-Forelead</a>. <br />
      All Rights Reserved.
    </div>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  data() {
    return {
      menus: [
        { id: 1, url: '/', icon: 'home-outline', name: 'Asosiy sahifa' },
        { id: 2, url: '/reports', icon: 'mail-unread-outline', name: 'Hisobotlar' },
        { id: 3, url: '/contacts', icon: 'people-outline', name: 'Kontaktlar' },
        { id: 4, url: '/sms-template', icon: 'chatbox-ellipses-outline', name: 'SMS shablonlar' },
        { id: 5, url: '/holidays', icon: 'gift-outline', name: 'Bayramlar' },
        { id: 6, url: '/settings', icon: 'settings-outline', name: 'Sozlamalar' },
      ],
    }
  },
  components: {
    MenuItem,
  },
}
</script>

<style scoped>
.active {
  background-color: rgb(237 233 254);
  color: rgb(139 92 246) !important;
}
.custom-top {
  top: 49vh;
}
</style>