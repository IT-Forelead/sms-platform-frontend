<template>
  <div class="w-60 h-screen fixed" id="sidenavSecExample">
    <div class="pt-4 pb-2 px-6 mt-4">
      <router-link to="/">
        <div class="flex items-center">
          <div class="shrink-0">
            <img src="../../assets/logo.png" class="w-10" alt="Avatar" />
          </div>
          <div class="grow ml-3">
            <p class="text-sm font-semibold text-gray-400 uppercase hover:text-gray-200 transition duration-300 ease-in-out">Air SMS</p>
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
        { id: 1, url: '/', icon: 'fa-dashboard', name: 'Dashboard' },
        { id: 2, url: '/statistics', icon: 'fa-magnifying-glass-plus', name: 'Statistics' },
        { id: 3, url: '/contacts', icon: 'fa-users', name: 'Contancts' },
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
  
}
</style>