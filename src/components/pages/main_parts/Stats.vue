<template>
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-extrabold">Sales Metrics</h3>
  </div>
  <div class="grid grid-cols-4 grid-flow-row-2 auto-rows-max gap-5 mt-3">
    <div v-for="mitem in mitems" :key="mitem">
      <CardChildren :item="mitem" />
    </div>
  </div>
</template>

<script>
import CardChildren from './CardChildren.vue'
import { ref } from 'vue'

export default {
  components: {
    CardChildren,
  },
  data() {
    return {
      mitems: [
        {
          icon: 'fa-user',
          value: '1,000',
          title: 'Users',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-cart',
          value: '1,000',
          title: 'Orders',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-bag',
          value: '1,000',
          title: 'Products',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-basket',
          value: '1,000',
          title: 'Sales',
          change: '+1.5%',
        },
        {
          icon: 'fa-user',
          value: '1,000',
          title: 'Users',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-cart',
          value: '1,000',
          title: 'Orders',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-bag',
          value: '1,000',
          title: 'Products',
          change: '+1.5%',
        },
        {
          icon: 'fa-shopping-basket',
          value: '1,000',
          title: 'Sales',
          change: '+1.5%',
        },
      ],
    }
  },
}
</script>

<style>
</style>