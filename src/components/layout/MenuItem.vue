<template>
  <router-link :to="menu.url" @click="changePage(menu.name)"
               :class="{'active': page === menu.name || $router.currentRoute.value.path === menu.url}"
               class="flex items-center border-gray-900 text-sm py-4 px-6 h-12 overflow-hidden text-gray-500 text-ellipsis border-l-4 whitespace-nowrap hover:text-gray-200 hover:border-l-4 hover:border-gray-100 hover:bg-gray-800 transition duration-300 ease-in-out"
               data-mdb-ripple="true"
               data-mdb-ripple-color="primary"
  >
    <span class="font-medium"><i class="fa mr-3" :class="menu.icon"></i>{{ menu.name }}</span>
  </router-link>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore()

    let page = computed(() => {
      return store.state.selectedPage
    })

    const changePage = (page) => {
      store.commit('setSelectedPage', page)
    }

    return {
      page,
      changePage
    }
  }
}
</script>

<style scoped>
</style>