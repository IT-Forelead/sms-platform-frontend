<template>
  <h1 class="text-center text-indigo-700 text-3xl font-bold">SMS Platformaga xush kelibsiz! <br>{{ users }}</h1>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import userService from '../../services/user.service'

const store = useStore()

const addusersInStore = () => {
  userService.getAllUsers().then((data) => store.commit('setUsers', data))
}

const users = computed(() => {
  return store.state.users
})
onMounted(() => addusersInStore())
</script>