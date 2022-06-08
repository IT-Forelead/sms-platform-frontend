<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">SMS namunalar</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <blockquote class="flex flex-col w-full p-6 my-5 border-l-4 border-green-500 bg-white rounded-lg shadow relative">
          <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
            <div class="flex justify-center items-center hidden">
              <i class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2"></i>
              <i class="fa-solid fa-trash-can text-gray-700 hover:text-red-600 mr-2"></i>
            </div>
            <i @click="openActions(this)" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
          </div>
          <div class="flex text-gray-400">
            <div class="flex items-start">
              <svg class="w-10 h-10 fill-current sm:block text-wave-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>

            <div class="flex flex-col ml-2">
              <h3 class="mt-2 text-bold font-medium text-gray-800 truncate">Hayit bayrami uchun tabrik</h3>
              <p class="mt-2 text-base text-gray-600">Wave saved us hundreds of development hours. Creating a Software as a Service is now easier than ever with Wave.</p>
            </div>

            <div class="flex flex-col justify-end">
              <svg class="mt-16 w-10 h-10 fill-current sm:block text-wave-500 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>
          </div>
          <div class="w-1/2 mx-auto pt-3"><hr></div>
          <div class="flex items-center justify-between mt-2">
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-layer-group mr-1"></i> Hayit bayrami</div>
            <div class="flex-1"><hr class="w-2/5 mx-auto"></div>
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-user-tag mr-1"></i> Barcha uchun</div>
          </div>
        </blockquote>
        <blockquote class="flex flex-col w-full p-6 my-5 border-l-4 border-blue-500 bg-white rounded-lg shadow relative">
          <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
            <div class="flex justify-center items-center hidden">
              <i class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2"></i>
              <i class="fa-solid fa-trash-can text-gray-700 hover:text-red-600 mr-2"></i>
            </div>
            <i @click="openActions(this)" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
          </div>
          <div class="flex text-gray-400">
            <div class="flex items-start">
              <svg class="w-10 h-10 fill-current sm:block text-wave-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>

            <div class="flex flex-col ml-2">
              <h3 class="mt-2 text-bold font-medium text-gray-800 truncate">Hayit bayrami uchun tabrik</h3>
              <p class="mt-2 text-base text-gray-600">Wave saved us hundreds of development hours. Creating a Software as a Service is now easier than ever with Wave.</p>
            </div>

            <div class="flex flex-col justify-end">
              <svg class="mt-16 w-10 h-10 fill-current sm:block text-wave-500 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>
          </div>
          <div class="w-1/2 mx-auto pt-3"><hr></div>
          <div class="flex items-center justify-between mt-2">
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-layer-group mr-1"></i> Hayit bayrami</div>
            <div class="flex-1"><hr class="w-2/5 mx-auto"></div>
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-user-tag mr-1"></i> Erkaklar uchun</div>
          </div>
        </blockquote>
        <blockquote class="flex flex-col w-full p-6 my-5 border-l-4 border-red-500 bg-white rounded-lg shadow relative">
          <div class="actions absolute right-0 top-2 flex justify-end items-center px-1 w-11 cursor-pointer rounded-full">
            <div class="flex justify-center items-center hidden">
              <i class="fa-solid fa-feather-pointed text-gray-700 hover:text-blue-600 mr-2"></i>
              <i class="fa-solid fa-trash-can text-gray-700 hover:text-red-600 mr-2"></i>
            </div>
            <i @click="openActions(this)" class="fa-solid fa-ellipsis-vertical py-2.5 px-4 hover:shadow rounded-full"></i>
          </div>
          <div class="flex text-gray-400">
            <div class="flex items-start">
              <svg class="w-10 h-10 fill-current sm:block text-wave-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>

            <div class="flex flex-col ml-2">
              <h3 class="mt-2 text-bold font-medium text-gray-800 truncate">Hayit bayrami uchun tabrik</h3>
              <p class="mt-2 text-base text-gray-600">Wave saved us hundreds of development hours. Creating a Software as a Service is now easier than ever with Wave.</p>
            </div>

            <div class="flex flex-col justify-end">
              <svg class="mt-16 w-10 h-10 fill-current sm:block text-wave-500 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
              </svg>
            </div>
          </div>
          <div class="w-1/2 mx-auto pt-3"><hr></div>
          <div class="flex items-center justify-between mt-2">
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-layer-group mr-1"></i> Hayit bayrami</div>
            <div class="flex-1"><hr class="w-2/5 mx-auto"></div>
            <div class="mt-1 text-sm text-gray-500 truncate"><i class="fa-solid fa-user-tag mr-1"></i> Ayollar uchun</div>
          </div>
        </blockquote>
      </div>

      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 mt-5">
          <h3 class="text-2xl font-extrabold mb-3">SMS namuna yaratish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form>
            <div class="mb-6">
              <label for="title-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" id="title-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <label for="category-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
              <select id="category-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="cat1">Category 1</option>
                <option value="cat2">Category 2</option>
                <option value="cat3">Category 3</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="all">Hamma uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="SMS matnini kiriting..."></textarea>
              <p class="mt-5 text-sm text-gray-500">SMS matnida foydalanuvchining ismining o'rniga <strong class="text-black">[USER]</strong> tegini ishlatib keting. Tizim [USER] o'rniga avtomatik tarzda kontakt nomini joylab SMSni jo'natadi.</p>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" />
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jo'natish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import $ from 'jquery'

function openActions() {
  $('.actions > i').toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  $('.actions').toggleClass('w-11').toggleClass('w-28').toggleClass('shadow').toggleClass('right-1')
  $('.actions > div').toggleClass('hidden')
}
</script>