<template>
  <div class="w-64 h-screen fixed pr-5" id="sidenavSecExample">
    <div class="h-20 py-4 sticky-top mb-3 flex justify-center items-center text-center">
      <router-link to="/">
        <div class="flex items-center">
          <div class="shrink-0">
            <img src="../../assets/logo.png" class="w-10" alt="#"/>
          </div>
          <div class="grow ml-3">
            <h2 class="text-lg font-semibold text-zinc-900 hover:text-gray-200">Saroy SMS</h2>
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
  background-color: rgb(231,226,248);
  color: rgb(110,65,243);
}
</style>