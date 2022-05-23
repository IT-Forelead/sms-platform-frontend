<template>
  <router-link :to="menu.url" @click="changePage(menu.name)"
               :class="{'active': page === menu.name || $router.currentRoute.value.path === menu.url}"
               class="flex items-center font-bold mx-5 text-lg py-6 px-6 h-12 rounded-lg overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap hover:text-blue-700 hover:bg-blue-100"
               data-mdb-ripple="true"
               data-mdb-ripple-color="primary"
  >
    <span class="font-bold"><span class="text-gray-500 mr-3" :class="menu.icon"></span>{{ menu.name }}</span>
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