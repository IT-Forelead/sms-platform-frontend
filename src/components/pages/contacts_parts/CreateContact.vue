<template>
  <div class="bg-white rounded-lg p-3 px-5 mt-5">
    <h3 class="text-2xl font-extrabold mb-3">Create Contact</h3>
    <hr class="border-gray-200 border-dotted bottom-1 mb-6">
    <div class="mb-6">
        <label for="first-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Familiyasi</label>
        <input type="text" id="first-name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Familiyani kiriting..." required>
    </div> 
    <div class="mb-6">
        <label for="last-name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ismi</label>
        <input type="text" id="last-name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismni kiriting..." required>
    </div> 
    <div class="mb-6">
        <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Jinsi</label>
        <select id="gender-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Jinsni tanlang</option>
          <option value="male">Erkak</option>
          <option value="female">Ayol</option>
        </select>
    </div> 
    <div class="mb-6">
        <label for="birthday-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Tug'ilgan kuni</label>
        <input type="date" id="birthday-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div> 
    <div class="mb-6">
        <label for="phone-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Telefon raqami</label>
        <input type="text" id="phone-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Telefon raqamni kiriting..." required>
    </div>
    <hr class="border-gray-200 border-dotted bottom-1 mb-6">
    <div class="flex justify-end">
      <button type="submit" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tozalash</button>
      <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jo'natish</button>
    </div>
  </div>
</template>