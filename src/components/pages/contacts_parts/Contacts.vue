<template>
  <div class="p-3">
    <div class="flex items-center justify-center">
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Barchasi</div>
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Yangilari</div>
      <div class="bg-white rounded-xl px-5 p-2 mx-3 text-gray-500 font-semibold hover:bg-gray-200">Tug'ilgan kun</div>
    </div>
    <div class="bg-gray-200 mt-3 p-3 rounded-lg">

      <div v-for="(contact, index) in contacts" :key="index" class="relative bg-white px-5 py-2 my-2 flex items-center rounded-lg cursor-pointer hover:text-violet-700 hover:bg-violet-100">
        <div class="flex items-center justify-center bg-red-700 h-16 w-16 border-1 border-gray-200 rounded-full">
          <div class="text-center text-white">
            <div class="text-xl font-bold">{{contact.birthday.slice(8,10)}}</div>
            <div class="text-sm font-bold">{{contact.birthday.slice(5,7)}}</div>
          </div>
        </div>
        <div class="ml-4">
          <p class="text-2xl font-semibold  m-0 p-0">{{contact.phone}}</p>
          <p class="text-lg text-gray-500 -mt-0.5 font-semibold">{{contact.firstName + " " + contact.lastName}}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical p-1 absolute top-1 right-1"></i>
      </div>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TableItemForContacts',
    props: {
      contacts: {
        type: Object,
        required: true,
      },
    },
  }
</script>