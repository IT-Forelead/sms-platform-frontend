<template>
  <div class="w-80 h-screen fixed" id="sidenavSecExample">
    <div class="p-2 pl-10 mt-3 ml-3">
      <router-link class="cursor-pointer" to="/">
        <div class="flex items-center">
          <div class="shrink-0">
            <img src="../../assets/logo.png" class="w-16" alt="#"/>
          </div>
          <div class="grow ml-3">
            <h2 class="font-semibold text-2xl text-zinc-900">IT-Forelead</h2>
          </div>
        </div>
      </router-link>
    </div>
    <ul class="relative mt-5 ml-3">
      <li class="relative" v-for="menu of menus" :key="menu">
        <MenuItem :menu="menu" />
      </li>
    </ul>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {
  data() {
    return {
      menus: [
        { id: 1, url: '/', icon: 'grid-outline', name: 'Dashboard' },
        { id: 2, url: '/reports', icon: 'analytics-outline', name: 'Reports' },
        { id: 3, url: '/statistics', icon: 'trending-up-outline', name: 'Statistics' },
        { id: 4, url: '/contacts', icon: 'people-outline', name: 'Contancts' },
        { id: 4, url: '/sms-template', icon: 'chatbox-ellipses-outline', name: 'SMS Template' },
        { id: 5, url: '/settings', icon: 'settings-outline', name: 'Settings' },
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
  color: rgb(139 92 246);
}
</style>