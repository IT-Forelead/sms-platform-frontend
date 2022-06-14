<template>
  <div class="flex justify-between items-center">
    <h3 class="text-3xl font-extrabold">Raqamli statistika</h3>
  </div>
  <div class="grid grid-cols-4 grid-flow-row-2 auto-rows-max gap-5 mt-3">
    <div v-for="mitem in mitems" :key="mitem">
      <CardChildren :item="mitem" />
    </div>
  </div>
</template>

<script>
import CardChildren from './CardChildren.vue'

export default {
  components: {
    CardChildren,
  },
  data() {
    return {
      mitems: [
        {
          icon: 'people-outline',
          value: '1,000',
          title: 'Kontaktlar',
          change: '+1.5%',
        },
        {
          icon: 'chatbox-ellipses-outline',
          value: '1,000',
          title: 'SMS shablonlar',
          change: '+1.5%',
        },
        {
          icon: 'gift-outline',
          value: '1,000',
          title: 'Bayramlar',
          change: '+1.5%',
        },
        {
          icon: 'mail-outline',
          value: '1,000',
          title: "Jo'natilgan SMSlar",
          change: '+1.5%',
        }
      ],
    }
  },
}
</script>

<style>
</style>