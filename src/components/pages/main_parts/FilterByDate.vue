<template>
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-extrabold">Diagrammali statistika</h3>
    <div class="flex items-center">
      <h3 class="text-xl mr-3">Filtr</h3>
      <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
      <span class="mx-2 text-gray-500">-</span>
      <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
    </div>
  </div>
  <div class="bg-white rounded-lg p-5 my-3">
    <Bar :chart-data="chartData" :height="150" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'

import randomColor from 'randomcolor'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            label: 'Data 1',
            backgroundColor: [randomColor()],
            data: [20, 12],
          },
          {
            label: 'Data 2',
            backgroundColor: [randomColor()],
            data: [40, 30, 20, 10, 5, 2, 1],
          },
          {
            label: 'Data 3',
            backgroundColor: [randomColor()],
            data: [60, 50, 40, 30, 20, 10, 5],
          },
          {
            label: 'Data 4',
            backgroundColor: [randomColor()],
            data: [80],
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>