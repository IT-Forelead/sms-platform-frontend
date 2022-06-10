<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-1">Settings</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 my-3">
          <h3 class="text-2xl font-extrabold mb-3">Tizim sozlamalari</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <div class="mb-1">
            <div class="flex justify-between items-center py-3 border-b border-dotted">
              <div class="text-xl font-medium text-gray-900">Bayramlarda avtomatik tabrik jo'natish</div>
              <label for="holiday-toggle" class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="" id="holiday-toggle" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div class="mb-1">
            <div class="flex justify-between items-center py-3 border-b border-dotted">
              <div class="text-xl font-medium text-gray-900">Tug'ilgan kunlarda avtomatik tabrik jo'natish</div>
              <label for="birthday-toggle" class="inline-flex relative items-center cursor-pointer mr-3">
                <input type="checkbox" value="" id="birthday-toggle" class="sr-only peer" />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div class="mb-1">
            <div class="flex justify-between items-center py-3">
              <div class="text-xl font-medium text-gray-900">Tungi mavzuni</div>
              <label for="one-dark-toggle" class="inline-flex relative items-center mb-5 cursor-pointer mr-3">
                <input type="checkbox" value="" id="one-dark-toggle" class="sr-only peer" disabled />
                <div class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="p-3">
        
      </div>
    </div>
  </div>
</template>