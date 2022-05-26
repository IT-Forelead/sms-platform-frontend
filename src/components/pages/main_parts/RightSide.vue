<template>
  <div>
    <div class="bg-white rounded-lg p-3 mt-5">
      <Doughnut :chart-data="donutData" class="mx-24" />
    </div>
    <div class="bg-white rounded-lg p-5 my-5">
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">45%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">35%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-indigo-400 h-2.5 rounded-full" style="width: 35%"></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">75%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-red-400 h-2.5 rounded-full" style="width: 75%"></div>
      </div>
      <div class="flex justify-between mb-1">
        <span class="text-base font-medium text-blue-700 dark:text-white">Flowbite</span>
        <span class="text-sm font-medium text-blue-700 dark:text-white">87%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-2.5 mb-5">
        <div class="bg-green-400 h-2.5 rounded-full" style="width: 87%"></div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-5 mt-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero aliquam explicabo earum nemo aperiam.</p>
      <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
    </div>
  </div>
</template>
<script>
import { Doughnut } from 'vue-chartjs'
import { CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip, ArcElement } from 'chart.js'

import randomColor from 'randomcolor'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  components: { Doughnut },
  data() {
    return {
      donutData: {
        labels: ['test 1', 'Test 2'],
        datasets: [
          {
            backgroundColor: [randomColor(), randomColor()],
            data: [252, 340],
          },
        ],
      },
    }
  },
}
</script>