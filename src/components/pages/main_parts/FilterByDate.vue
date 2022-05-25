<template>
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-extrabold">App Specific</h3>
    <div class="flex items-center">
      <h3 class="text-xl mr-3">Filter</h3>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="20" height="18" rx="6" stroke="#222628" stroke-width="1.4" />
            <line x1="15.7" y1="0.7" x2="15.7" y2="3.3" stroke="#222628" stroke-width="1.4" stroke-linecap="round" />
            <line x1="6.7" y1="0.7" x2="6.7" y2="3.3" stroke="#222628" stroke-width="1.4" stroke-linecap="round" />
            <path d="M11.6998 7.99979C11.6998 8.38639 11.3864 8.69979 10.9998 8.69979C10.6132 8.69979 10.2998 8.38639 10.2998 7.99979C10.2998 7.61319 10.6132 7.29979 10.9998 7.29979C11.3864 7.29979 11.6998 7.61319 11.6998 7.99979Z" fill="#222628" />
            <path d="M16.6998 7.99979C16.6998 8.38639 16.3864 8.69979 15.9998 8.69979C15.6132 8.69979 15.2998 8.38639 15.2998 7.99979C15.2998 7.61319 15.6132 7.29979 15.9998 7.29979C16.3864 7.29979 16.6998 7.61319 16.6998 7.99979Z" fill="#222628" />
            <path d="M6.6998 7.99979C6.6998 8.38639 6.3864 8.69979 5.9998 8.69979C5.6132 8.69979 5.2998 8.38639 5.2998 7.99979C5.2998 7.61319 5.6132 7.29979 5.9998 7.29979C6.3864 7.29979 6.6998 7.61319 6.6998 7.99979Z" fill="#222628" />
            <path d="M11.6998 11.9998C11.6998 12.3864 11.3864 12.6998 10.9998 12.6998C10.6132 12.6998 10.2998 12.3864 10.2998 11.9998C10.2998 11.6132 10.6132 11.2998 10.9998 11.2998C11.3864 11.2998 11.6998 11.6132 11.6998 11.9998Z" fill="#222628" />
            <path d="M6.6998 11.9998C6.6998 12.3864 6.3864 12.6998 5.9998 12.6998C5.6132 12.6998 5.2998 12.3864 5.2998 11.9998C5.2998 11.6132 5.6132 11.2998 5.9998 11.2998C6.3864 11.2998 6.6998 11.6132 6.6998 11.9998Z" fill="#222628" />
            <path d="M16.6998 11.9998C16.6998 12.3864 16.3864 12.6998 15.9998 12.6998C15.6132 12.6998 15.2998 12.3864 15.2998 11.9998C15.2998 11.6132 15.6132 11.2998 15.9998 11.2998C16.3864 11.2998 16.6998 11.6132 16.6998 11.9998Z" fill="#222628" />
            <path d="M16.6998 15.9998C16.6998 16.3864 16.3864 16.6998 15.9998 16.6998C15.6132 16.6998 15.2998 16.3864 15.2998 15.9998C15.2998 15.6132 15.6132 15.2998 15.9998 15.2998C16.3864 15.2998 16.6998 15.6132 16.6998 15.9998Z" fill="#222628" />
            <path d="M11.6998 15.9998C11.6998 16.3864 11.3864 16.6998 10.9998 16.6998C10.6132 16.6998 10.2998 16.3864 10.2998 15.9998C10.2998 15.6132 10.6132 15.2998 10.9998 15.2998C11.3864 15.2998 11.6998 15.6132 11.6998 15.9998Z" fill="#222628" />
            <path d="M6.6998 15.9998C6.6998 16.3864 6.3864 16.6998 5.9998 16.6998C5.6132 16.6998 5.2998 16.3864 5.2998 15.9998C5.2998 15.6132 5.6132 15.2998 5.9998 15.2998C6.3864 15.2998 6.6998 15.6132 6.6998 15.9998Z" fill="#222628" />
          </svg>
        </div>
        <input name="start" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
      </div>
      <span class="mx-2 text-gray-500">-</span>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="20" height="18" rx="6" stroke="#222628" stroke-width="1.4" />
            <line x1="15.7" y1="0.7" x2="15.7" y2="3.3" stroke="#222628" stroke-width="1.4" stroke-linecap="round" />
            <line x1="6.7" y1="0.7" x2="6.7" y2="3.3" stroke="#222628" stroke-width="1.4" stroke-linecap="round" />
            <path d="M11.6998 7.99979C11.6998 8.38639 11.3864 8.69979 10.9998 8.69979C10.6132 8.69979 10.2998 8.38639 10.2998 7.99979C10.2998 7.61319 10.6132 7.29979 10.9998 7.29979C11.3864 7.29979 11.6998 7.61319 11.6998 7.99979Z" fill="#222628" />
            <path d="M16.6998 7.99979C16.6998 8.38639 16.3864 8.69979 15.9998 8.69979C15.6132 8.69979 15.2998 8.38639 15.2998 7.99979C15.2998 7.61319 15.6132 7.29979 15.9998 7.29979C16.3864 7.29979 16.6998 7.61319 16.6998 7.99979Z" fill="#222628" />
            <path d="M6.6998 7.99979C6.6998 8.38639 6.3864 8.69979 5.9998 8.69979C5.6132 8.69979 5.2998 8.38639 5.2998 7.99979C5.2998 7.61319 5.6132 7.29979 5.9998 7.29979C6.3864 7.29979 6.6998 7.61319 6.6998 7.99979Z" fill="#222628" />
            <path d="M11.6998 11.9998C11.6998 12.3864 11.3864 12.6998 10.9998 12.6998C10.6132 12.6998 10.2998 12.3864 10.2998 11.9998C10.2998 11.6132 10.6132 11.2998 10.9998 11.2998C11.3864 11.2998 11.6998 11.6132 11.6998 11.9998Z" fill="#222628" />
            <path d="M6.6998 11.9998C6.6998 12.3864 6.3864 12.6998 5.9998 12.6998C5.6132 12.6998 5.2998 12.3864 5.2998 11.9998C5.2998 11.6132 5.6132 11.2998 5.9998 11.2998C6.3864 11.2998 6.6998 11.6132 6.6998 11.9998Z" fill="#222628" />
            <path d="M16.6998 11.9998C16.6998 12.3864 16.3864 12.6998 15.9998 12.6998C15.6132 12.6998 15.2998 12.3864 15.2998 11.9998C15.2998 11.6132 15.6132 11.2998 15.9998 11.2998C16.3864 11.2998 16.6998 11.6132 16.6998 11.9998Z" fill="#222628" />
            <path d="M16.6998 15.9998C16.6998 16.3864 16.3864 16.6998 15.9998 16.6998C15.6132 16.6998 15.2998 16.3864 15.2998 15.9998C15.2998 15.6132 15.6132 15.2998 15.9998 15.2998C16.3864 15.2998 16.6998 15.6132 16.6998 15.9998Z" fill="#222628" />
            <path d="M11.6998 15.9998C11.6998 16.3864 11.3864 16.6998 10.9998 16.6998C10.6132 16.6998 10.2998 16.3864 10.2998 15.9998C10.2998 15.6132 10.6132 15.2998 10.9998 15.2998C11.3864 15.2998 11.6998 15.6132 11.6998 15.9998Z" fill="#222628" />
            <path d="M6.6998 15.9998C6.6998 16.3864 6.3864 16.6998 5.9998 16.6998C5.6132 16.6998 5.2998 16.3864 5.2998 15.9998C5.2998 15.6132 5.6132 15.2998 5.9998 15.2998C6.3864 15.2998 6.6998 15.6132 6.6998 15.9998Z" fill="#222628" />
          </svg>
        </div>
        <input name="end" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
      </div>
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