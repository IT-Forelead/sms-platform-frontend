<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-1">Settings</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5 my-3">
          <h3 class="text-2xl font-extrabold mb-3">Profilni taxrirlash</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form>
            <div class="mb-6">
              <label for="name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Ismingiz</label>
              <input type="text" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ismingizni kiriting..." disabled/>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Jinsingizni</label>
              <select id="gender-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled>
                <option>Jinsingizni tanlang</option>
                <option value="male">Erkak</option>
                <option value="female">Ayol</option>
              </select>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" disabled/>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled>Jo'natish</button>
            </div>
          </form>
        </div>

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
        <div class="bg-white rounded-lg p-3 px-5 my-3">
          <h3 class="text-2xl font-extrabold mb-3">Emailni taxrirlash</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form>
            <div class="mb-6">
              <label for="email-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input type="email" id="email-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yangi emailni kiriting..." disabled/>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" disabled/>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled>Jo'natish</button>
            </div>
          </form>
        </div>

        <div class="bg-white rounded-lg p-3 px-5 my-3">
          <h3 class="text-2xl font-extrabold mb-3">Parolni taxrirlash</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form>
            <div class="mb-6">
              <label for="password-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Hozirgi parol</label>
              <input type="password" id="password-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hozirgi parolni kiriting..." disabled/>
            </div>
            <div class="mb-6">
              <label for="password-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Yangi parol</label>
              <input type="password" id="password-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yangi parolni kiriting..." disabled/>
            </div>
            <div class="mb-6">
              <label for="password-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Yangi parolni takrorlang</label>
              <input type="password" id="password-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yangi parolni takrorlang..." disabled/>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" disabled/>
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled>Jo'natish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>