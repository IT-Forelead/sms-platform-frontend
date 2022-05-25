<template>
  <div>
    <div class="bg-white rounded-lg p-3">
      <Doughnut :chart-data="donutData" :height="50"/>
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
            data: [252, 340]
          }
        ]
      }
    }
  },
}
</script>