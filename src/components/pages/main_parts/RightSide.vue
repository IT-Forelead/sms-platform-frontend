<template>
  <div>
    <div class="bg-white rounded-lg p-3 mt-5 dark:bg-gray-800">
      <Doughnut :chart-data="donutData" class="mx-24" />
    </div>
    <div class="bg-white rounded-lg p-5 my-5 dark:bg-gray-800">
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-gray-300">Yetkazilgan</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">{{ deleviredInfo }}%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-green-400 h-2.5 rounded-full" :style="fillProgress(deleviredInfo)"></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-gray-300">Noma'lum</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">{{ unknownInfo }}%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-blue-600 h-2.5 rounded-full" :style="fillProgress(unknownInfo)"></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-gray-300">Muvaffaqiyatsiz</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">{{ failedInfo }}%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-red-400 h-2.5 rounded-full" :style="fillProgress(failedInfo)"></div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-5 mt-5 dark:bg-gray-800">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Platforma haqida</h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Ushbu platforma IT-Forelead dasturchilar jamoasi tamonidan ishlab chiqilgan. Platforma bo'yicha talab va takliflar bo'lsa, biz bilan bog'laning.</p>
      <a href="https://it-forelead.uz" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Biz bilan bog'lanish <i class="fa-solid fa-arrow-right-long ml-2"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
import { Doughnut } from 'vue-chartjs'
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, ArcElement } from 'chart.js'
import messageService from '../../../services/message.service'
import randomColor from 'randomcolor'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const donutData = {
  labels: ["Jo'natilgan", 'Qoldiq'],
  datasets: [
    {
      backgroundColor: [randomColor(), randomColor()],
      data: [252, 340],
    },
  ],
}

const addMessageInStore = () => {
  messageService.getMessages().then((data) => store.commit('setMessage', data))
}

const deleviredInfo = computed(() => {
  return (parseFloat(store.state.messages.filter((msg) => msg.message.deliveryStatus === "delivered").length) / parseFloat(store.state.messages.length)) * 100
})

const failedInfo = computed(() => {
  return (parseFloat(store.state.messages.filter((msg) => msg.message.deliveryStatus === "failed").length) / parseFloat(store.state.messages.length)) * 100
})

const unknownInfo = computed(() => {
  return (parseFloat(store.state.messages.filter((msg) => msg.message.deliveryStatus === "unknown").length) / parseFloat(store.state.messages.length)) * 100
})

const fillProgress = (widthSize) => {
  return `width: ${widthSize}%`
}

onMounted(() => {
  addMessageInStore()
})
</script>