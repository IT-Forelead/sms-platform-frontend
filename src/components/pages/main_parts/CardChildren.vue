<template>
  <div class="flex items-center justify-center flex-col bg-white rounded-xl p-5">
    <div class="flex items-center justify-center bg-teal-100 rounded-xl px-4 p-3 text-gray-500 text-3xl">
      <ion-icon :name="item.icon"></ion-icon>
    </div>
    <h1 class="text-2xl font-bold pt-2">{{ item.value }}</h1>
    <span>{{ item.title }}</span>
    <h3 class="text-green-400 font-bold pt-2"><i class="fa fa-arrow-up mr-3"></i>{{ item.change }}</h3>
  </div>
</template>
<script>
export default {
  name: 'CardChildren',
  props: {
    item: Object,
  },
}
</script>