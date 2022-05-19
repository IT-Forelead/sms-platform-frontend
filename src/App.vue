<template>
  <div v-if="login">
    <div class="w-screen">
        <Navbar/>
        <router-view/>
    </div>
  </div>
  <div v-else>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/layout/Navbar.vue'
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {
    Navbar
  },
  setup() {
    const store = useStore()

    let login = computed(() => {
      return store.state.isLogin || (localStorage.getItem('user') !== null)
    })

    return {
      login
    }
  }
}
</script>

<style>
</style>