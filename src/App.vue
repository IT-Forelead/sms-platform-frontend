<template>
  <div v-if="login">
    <div class="flex">
      <Sidebar />
      <div class="ml-80 flex-1">
        <Navbar />
        <router-view />
      </div>
    </div>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/layout/Navbar.vue'
import Sidebar from './components/layout/Sidebar.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  components: {
    Navbar,
    Sidebar,
  },
  setup() {
    const store = useStore()

    let login = computed(() => {
      return store.state.isLogin || localStorage.getItem('user') !== null
    })

    return {
      login,
    }
  },
}
</script>

<style>
</style>