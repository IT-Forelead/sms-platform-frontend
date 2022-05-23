<template>
  <div class="w-80 h-screen fixed" id="sidenavSecExample">
    <div class="p-2 px-6 mt-4">
      <router-link class="cursor-pointer" to="/">
        <div class="flex items-center">
          <div class="shrink-0">
            <img src="../../assets/logo.png" class="w-10" alt="#"/>
          </div>
          <div class="grow ml-3">
            <h2 class="text-lg font-semibold text-zinc-900">Saroy SMS</h2>
          </div>
        </div>
      </router-link>
    </div>
    <ul class="relative mt-5">
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
        { id: 1, url: '/', icon: 'fa-solid fa-dashboard', name: 'Dashboard' },
        { id: 2, url: '/reports', icon: 'fa-solid fa-chart-line', name: 'Reports' },
        { id: 2, url: '/statistics', icon: 'fa-solid fa-chart-column', name: 'Statistics' },
        { id: 3, url: '/contacts', icon: 'fa-regular fa-address-book', name: 'Contancts' },
        { id: 4, url: '/settings', icon: 'fa-solid fa-gear', name: 'Settings' },
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
  background-color: rgb(219 234 254);
  color: rgb(29 78 216);
}
</style>