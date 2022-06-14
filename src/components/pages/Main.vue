<template>
  <div class="px-3">
    <div class="grid grid-cols-3 gap-4 px-3 mb-5">
      <div class="col-span-2 p-3">
        <FilterByDate />
        <Stats />
      </div>
      <div class="p-3">
        <h3 class="text-3xl font-extrabold">SMS ma'lumotlari</h3>
        <RightSide />
      </div>
    </div>
  </div>
</template>
<script setup>
import FilterByDate from './main_parts/FilterByDate.vue'
import Stats from './main_parts/Stats.vue'
import RightSide from './main_parts/RightSide.vue'
</script>