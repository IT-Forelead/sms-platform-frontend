<template>
  <router-link :to="menu.url" @click="changePage(menu.name)"
               :class="{'active': page === menu.name || $router.currentRoute.value.path === menu.url}"
               class="flex items-center font-bold mx-5 my-2 text-lg py-6 px-6 h-12 rounded-lg overflow-hidden text-ellipsis whitespace-nowrap hover:text-violet-700 hover:bg-violet-100 transition duration-200 ease-in"
               data-mdb-ripple="true"
               data-mdb-ripple-color="primary"
  >
    <span class="font-bold flex items-center text-base"><ion-icon class="mr-5 text-2xl" :name="menu.icon"></ion-icon>{{ menu.name }}</span>
  </router-link>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore()

    const changePage = (page) => {
      store.commit('setSelectedPage', page)
    }

    const page = computed(() => {
      return store.state.currentPage
    })

    return {
      changePage,
      page,
    }
  },
}
</script>

<style scoped>
</style>