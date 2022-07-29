<template>
  <div class="px-3">
    <h3 class="mb-3 ml-2 text-3xl font-extrabold dark:text-gray-300">SMS shablonlar</h3>
    <div class="mb-5 grid grid-cols-2 gap-1">
      <div class="p-3">
        <div class="flex items-center justify-between">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 flex items-center pl-1">
              <button type="submit" class="focus:shadow-outline p-3 focus:outline-none">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="h-5 w-5 text-gray-500"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
            </span>
            <input v-model="search" type="search" name="search" class="rounded-lg border-0 bg-white py-1.5 pl-12 text-lg text-gray-500 outline-none focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:placeholder:text-gray-500" placeholder="Sarlavha bo'yicha izlash..." autocomplete="off" />
          </div>
          <div class="flex">
            <div class="relative">
              <select v-model="sortByCategoryId" class="form-select m-0 block w-full appearance-none rounded-lg border-0 bg-white bg-clip-padding px-3 py-2 pr-7 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400" id="categories">
                <option value="">Bo'lim bo'yicha </option>
                <option v-for="(cat, idx) in templateCategories" :key="idx" :value="cat.id">{{ cat.name }}</option>
              </select>
            </div>
            <div class="relative pr-4" x-data="{open: false}">
              <div x-on:click="open = true" class="ml-3 cursor-pointer rounded-xl bg-white p-2 px-5 font-semibold text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
                <i class="fa fa-filter"></i> {{ sortByAccess === '' ? 'Shablon turi' : changeGenderAccess(sortByAccess) }} <i @click="clearAccessSort()" class="fa ml-1 cursor-pointer hover:text-red-500" :class="{ 'fa-times': sortByAccess !== '' }"></i>
              </div>
              <div x-show="open" x-on:click.outside="open = false" class="dropdown absolute right-0 top-12 z-10 w-44 rounded border bg-white shadow dark:bg-gray-800 dark:border-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li class="cursor-pointer border-b border-dotted dark:border-gray-600">
                    <a x-on:click="open = false" @click="sortByAccessFunc('all')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                      <i class="fa-solid fa-mars-and-venus mr-1"></i> Barcha uchun
                    </a>
                  </li>
                  <li class="cursor-pointer border-b border-dotted dark:border-gray-600">
                    <a x-on:click="open = false" @click="sortByAccessFunc('male')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                      <i class="fa-solid fa-mars mr-1"></i> Erkaklar uchun
                    </a>
                  </li>
                  <li class="cursor-pointer">
                    <a x-on:click="open = false" @click="sortByAccessFunc('female')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                      <i class="fa-solid fa-venus mr-1"></i> Ayollar uchun
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-height mt-3 overflow-y-auto px-1 pr-4">
          <div v-if="showContent">
            <blockquote v-for="(template, index) in filteredTemplates" :key="index" class="relative my-5 flex w-full flex-col rounded-lg border-l-4 bg-white dark:bg-gray-800 p-6 shadow" :class="genderAccessColor(template.genderAccess)">
              <div x-data="{open: false}" class="actions absolute right-0 top-2 flex w-11 cursor-pointer items-center justify-end rounded-full px-1">
                <div x-show="open" x-on:click.outside="open = false" class="flex items-center justify-center">
                  <i @click="openEditModal(template)" class="fa-solid fa-feather-pointed mr-2 cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"></i>
                  <i @click="deleteSMSTemplate(template.id)" class="fa-solid fa-trash-can mr-2 cursor-pointer text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"></i>
                </div>
                <i x-show="!open" x-on:click="open = true" class="fa-solid fa-ellipsis-vertical rounded-full py-2.5 px-4 hover:shadow dark:text-gray-300 dark:hover:text-gray-500"></i>
                <i x-show="open" x-on:click="open = false" class="fa-solid fa-times rounded-full py-2.5 px-4 hover:shadow dark:text-gray-300 dark:hover:text-gray-500"></i>
              </div>
              <div class="flex text-gray-400">
                <div class="flex items-start">
                  <svg class="text-wave-500 h-10 w-10 fill-current sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                </div>
                <div class="ml-2 flex flex-col">
                  <h3 class="text-bold truncate text-xl font-extrabold uppercase text-gray-800">{{ template.title }}</h3>
                  <p class="mt-2 text-base text-gray-600 dark:text-gray-300">{{ template.text }}</p>
                </div>
                <div class="flex flex-col justify-end">
                  <svg class="text-wave-500 mt-16 h-10 w-10 rotate-180 fill-current sm:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                    <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                  </svg>
                </div>
              </div>
              <div class="mx-auto w-1/2 pt-3"><hr class="dark:border-gray-600" /></div>
              <div class="mt-2 flex items-center justify-between">
                <div class="mt-1 truncate text-sm text-gray-500 dark:text-gray-300"><i class="fa-solid fa-layer-group mr-1"></i> {{ template.categoryName }}</div>
                <div class="flex-1"><hr class="mx-auto w-2/5 dark:border-gray-600" /></div>
                <div class="mt-1 truncate text-sm text-gray-500 dark:text-gray-300"><i class="fa-solid fa-user-tag mr-1"></i> {{ changeGenderAccess(template.genderAccess) }}</div>
              </div>
            </blockquote>
          </div>
          <div v-else class="rounded-lg bg-white px-5 py-10 text-lg dark:bg-gray-800">
            <h3 class="text-center text-red-700">SMS shablonlar mavjud emas!</h3>
          </div>
        </div>
      </div>
      <div class="p-3">
        <div class="rounded-lg bg-white p-3 px-5 dark:bg-gray-800">
          <h3 class="mb-3 text-2xl font-extrabold dark:text-gray-300">SMS shablon yaratish</h3>
          <hr class="bottom-1 mb-6 border-dotted border-gray-200 dark:border-gray-600" />
          <form @submit.prevent="createSMSTemplate()">
            <div class="mb-6">
              <label for="title-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" v-model="createSMSTemplateParam.title" id="title-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <div class="flex items-center justify-between">
                <label for="category-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
                <span @click="openModal()" class="cursor-pointer rounded bg-green-100 p-1 px-2 text-sm text-green-500 hover:bg-green-200 dark:bg-green-600 dark:text-gray-300">
                  <i class="fa fa-plus mr-1"></i> Bo'lim qo'shish
                </span>
              </div>
              <select v-model="createSMSTemplateParam.templateCategoryId" id="category-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option selected>Bo'limni tanlang</option>
                <option v-for="(templateCategory, index) in templateCategories" :key="index" :value="templateCategory.id">{{ templateCategory.name }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" v-model="createSMSTemplateParam.gender" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option selected>Kim uchunligini tanlang</option>
                <option value="all">Barcha uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" v-model="createSMSTemplateParam.text" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="SMS matnini kiriting..."></textarea>
              <p class="mt-5 text-sm text-gray-500 dark:text-gray-400">SMS matnida foydalanuvchining familyasi o'rniga <strong class="text-black dark:text-gray-400">[LASTNAME]</strong> ismining o'rniga <strong class="text-black dark:text-gray-400">[FIRSTNAME]</strong> tegini ishlatib keting. Tizim [FIRSTNAME] va [LASTNAME] o'rniga avtomatik tarzda mos ravishda kontaktning ism va familyasini joylab SMSni jo'natadi.</p>
            </div>
            <hr class="bottom-1 mb-6 border-dotted border-gray-200 dark:border-gray-600" />
            <div class="flex justify-end">
              <input type="reset" id="reset-form" class="mx-1 w-full rounded-lg bg-blue-200 px-5 py-2.5 text-center text-sm font-medium hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto" value="Tozalash" />
              <button type="submit" class="mx-1 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Jo'natish</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-show="isShowModal.addCategory" id="popup-modal" tabindex="-1" class="overlay fixed top-0 right-0 left-0 z-40 flex h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
      <div class="relative h-full w-full max-w-2xl p-4 text-gray-800 md:h-auto">
        <div class="relative z-50 rounded-lg bg-white shadow-lg dark:bg-gray-800">
          <button type="button" @click="closeModal()" class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-500" data-modal-toggle="popup-modal">
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <h3 class="ml-5 py-5 text-2xl font-extrabold dark:text-gray-300">Bo'lim boshqaruvi</h3>
          <div class="px-5">
            <form @submit.prevent="createTemplateCategory()">
              <div class="mb-6">
                <label for="category-name" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Bo'lim qo'shish</label>
                <div class="flex items-center">
                  <input type="text" v-model="categoryName_" id="category-name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Bo'lim nomini kiriting..." />
                  <button class="fa fa-plus ml-2 cursor-pointer rounded-md bg-green-400 p-3 text-white hover:bg-green-500 dark:bg-green-700 dark:text-gray-300 dark:hover:bg-green-800"></button>
                </div>
              </div>
            </form>
            <h3 class="text-md py-1 font-bold dark:text-gray-300">Bo'limlar ro'yhati</h3>
            <div v-if="showCategoryContent">
              <ul class="pb-5">
                <li v-for="(templateCategory, index) in templateCategories" :key="index">
                  <div class="flex items-center justify-between border-b py-2 px-1 dark:border-gray-600" :id="'f-' + templateCategory.id">
                    <div class="text-md dark:text-gray-300">
                      <i class="fa-solid fa-angles-right mr-2 text-sm"></i>
                      {{ templateCategory.name }}
                    </div>
                    <div>
                      <i @click="editTemplateCategory(templateCategory)" class="fa-solid fa-feather-pointed mr-3 cursor-pointer text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-600"></i>
                      <i @click="deleteTemplateCategory(templateCategory.id)" class="fa-solid fa-trash-can cursor-pointer text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-600"></i>
                    </div>
                  </div>
                  <div class="hidden border-b py-2  dark:border-gray-600 dark:text-gray-300" :id="'s-' + templateCategory.id">
                    <form @submit.prevent="updateTemplateCategory()" class="flex items-center">
                      <input type="text" v-model="editTemplateCategoryParam.name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Bo'lim nomini kiriting..." />
                      <button class="ml-2 cursor-pointer rounded-md bg-green-400 p-2 text-white hover:bg-green-500 dark:bg-green-700 dark:text-gray-300 dark:hover:bg-green-800">Saqlash</button>
                      <button @click="closeEditCategory(templateCategory.id)" type="button" class="ml-3 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-500" data-modal-toggle="popup-modal">
                        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
            <div v-else class="px-5 py-3 pb-5 text-lg">
              <h3 class="text-center text-red-700">Bo'limlar mavjud emas!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="isShowModal.editTemplate" id="edit-modal" tabindex="-1" class="overlay fixed top-0 right-0 left-0 z-40 flex h-modal w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full">
    <div class="relative h-full w-full max-w-2xl p-4 text-gray-800 md:h-auto">
      <div class="relative z-50 rounded-lg bg-white shadow-lg dark:bg-gray-800">
        <button type="button" @click="closeEditModal()" class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-300  dark:hover:text-gray-500" data-modal-toggle="popup-modal">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <h3 class="ml-5 py-5 text-2xl font-extrabold dark:text-gray-300">SMS shablonni taxrirlash</h3>
        <div class="max-content-h rounded-lg p-3 px-5">
          <form @submit.prevent="updateSMSTemplate()">
            <div class="mb-6">
              <label for="title-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Sarlavha</label>
              <input type="text" v-model="editSMSTemplateParam.title" id="title-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="Sarlavhani kiriting..." />
            </div>
            <div class="mb-6">
              <label for="category-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Bo'limi</label>
              <select v-model="editSMSTemplateParam.templateCategoryId" id="category-input" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option selected>Bo'limni tanlang</option>
                <option v-for="(templateCategory, index) in templateCategories" :key="index" :value="templateCategory.id">{{ templateCategory.name }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">Kim uchun</label>
              <select id="gender-input" v-model="editSMSTemplateParam.gender" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
                <option selected>Kim uchunligini tanlang</option>
                <option value="all">Barcha uchun</option>
                <option value="male">Erkaklar uchun</option>
                <option value="female">Ayollar uchun</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="text-input" class="mb-2 block text-lg font-medium text-gray-900 dark:text-gray-300">SMS matni</label>
              <textarea id="text-input" v-model="editSMSTemplateParam.text" rows="4" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500" placeholder="SMS matnini kiriting..."></textarea>
              <p class="mt-5 text-sm text-gray-500 dark:text-gray-400">SMS matnida foydalanuvchining familyasi o'rniga <strong class="text-black dark:text-gray-400">[LASTNAME]</strong> ismining o'rniga <strong class="text-black dark:text-gray-400">[FIRSTNAME]</strong> tegini ishlatib keting. Tizim [FIRSTNAME] va [LASTNAME] o'rniga avtomatik tarzda mos ravishda kontaktning ism va familyasini joylab SMSni jo'natadi.</p>
            </div>
            <hr class="bottom-1 mb-6 border-dotted border-gray-200 dark:border-gray-600" />
            <div class="flex items-center justify-end">
              <button type="button" @click="closeEditModal()" class="mr-3 w-full rounded-lg bg-gray-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-gray-500 dark:hover:bg-gray-600" data-modal-toggle="popup-modal">Yopish</button>
              <button type="submit" class="mx-1 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import templateService from '../../services/template.service'
import templateCategoryService from '../../services/templateCategories.service'
import $ from 'jquery'

const store = useStore()

const search = ref('')
const sortByCategoryId = ref('')
const sortByAccess = ref('')
const categoryName_ = ref('')

const clearAccessSort = () => (sortByAccess.value = '')
const clearCategorySort = () => (sortByCategoryId.value = '')

const isShowModal = reactive({
  addCategory: false,
  editTemplate: false,
})

const createSMSTemplateParam = reactive({
  templateCategoryId: "Bo'limni tanlang",
  title: '',
  text: '',
  gender: 'Kim uchunligini tanlang',
})

const editSMSTemplateParam = reactive({
  id: '',
  templateCategoryId: "Bo'limni tanlang",
  title: '',
  text: '',
  gender: 'Kim uchunligini tanlang',
})

const editTemplateCategoryParam = reactive({
  id: '',
  name: '',
})

const sortByAccessFunc = (access) => {
  sortByAccess.value = access
}

const openModal = () => {
  isShowModal.addCategory = true
}
const closeModal = () => {
  isShowModal.addCategory = false
}

const openEditModal = (template) => {
  isShowModal.editTemplate = true
  editSMSTemplateParam.id = template.id
  editSMSTemplateParam.templateCategoryId = template.templateCategoryId
  editSMSTemplateParam.title = template.title
  editSMSTemplateParam.text = template.text
  editSMSTemplateParam.gender = template.genderAccess
}

const closeEditModal = () => {
  isShowModal.editTemplate = false
  editSMSTemplateParam.id = ''
  editSMSTemplateParam.templateCategoryId = "Bo'limni tanlang"
  editSMSTemplateParam.title = ''
  editSMSTemplateParam.text = ''
  editSMSTemplateParam.gender = 'Kim uchunligini tanlang'
}

const editTemplateCategory = (category) => {
  store.state.templateCategories
    .filter((c) => c.id !== category.id)
    .map((a) => {
      $(`#s-${a.id}`).addClass('hidden')
      $(`#f-${a.id}`).removeClass('hidden')
    })
  $(`#f-${category.id}`).addClass('hidden')
  $(`#s-${category.id}`).removeClass('hidden')
  editTemplateCategoryParam.id = category.id
  editTemplateCategoryParam.name = category.name
}

const closeEditCategory = (category) => {
  $(`#f-${category}`).removeClass('hidden')
  $(`#s-${category}`).addClass('hidden')
  editTemplateCategoryParam.id = ''
  editTemplateCategoryParam.name = ''
}

const addSMSTemplateInStore = () => {
  store.dispatch('templatesModule/get').then(
    (data) => {
      store.commit('setSMSTemplate', data)
    },
    (error) => {
      forbiddenChecker(error, 'SMS shablonlarni olishda xatolik yuz berdi!')
    }
  )
}

const filteredTemplates = computed(() => {
  if (sortByCategoryId.value !== '' && sortByAccess.value !== '') {
    return store.state.templates
      .filter((temp) => temp.templateCategoryId === sortByCategoryId.value)
      .filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
      .filter((temp) => temp.genderAccess === sortByAccess.value)
      .filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else if (sortByCategoryId.value !== '') {
    return store.state.templates.filter((temp) => temp.templateCategoryId === sortByCategoryId.value).filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else if (sortByAccess.value !== '') {
    return store.state.templates.filter((temp) => temp.genderAccess === sortByAccess.value).filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  } else {
    return store.state.templates.filter((temp) => temp.title.toLowerCase().includes(search.value.toLowerCase()))
  }
})

const showContent = computed(() => {
  return store.state.templates.length > 0
})

const addTemplateCategoryInStore = () => {
  store.dispatch('templateCategoriesModule/get').then(
    (data) => {
      store.commit('setTemplateCategory', data)
    },
    (error) => {
      forbiddenChecker(error, 'Bo\'limlarni olishda xatolik yuz berdi!')
    }
  )
}

const templateCategories = computed(() => {
  return store.state.templateCategories
})

const showCategoryContent = computed(() => {
  return store.state.templateCategories.length > 0
})

const changeGenderAccess = (access) => {
  switch (access) {
    case 'all':
      return 'Barcha uchun'
    case 'male':
      return 'Erkaklar uchun'
    case 'female':
      return 'Ayollar uchun'
    default:
      break
  }
}

const genderAccessColor = (access) => {
  switch (access) {
    case 'all':
      return 'border-green-500'
    case 'male':
      return 'border-blue-500'
    case 'female':
      return 'border-red-500'
    default:
      break
  }
}

const createSMSTemplate = () => {
  if (createSMSTemplateParam.templateCategoryId === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.title === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.text === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (createSMSTemplateParam.gender === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templatesModule/create', createSMSTemplateParam).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli yaratildi!',
          position: 'bottomLeft',
        })
        addSMSTemplateInStore()
        createSMSTemplateParam.templateCategoryId = "Bo'limni tanlang"
        createSMSTemplateParam.title = ''
        createSMSTemplateParam.text = ''
        createSMSTemplateParam.gender = 'Kim uchunligini tanlang'
      },
      (error) => {
        notify.error({
          message: 'SMS shablon yaratishda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateSMSTemplate = () => {
  if (editSMSTemplateParam.templateCategoryId === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.title === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.text === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (editSMSTemplateParam.gender === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templatesModule/update', editSMSTemplateParam).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli taxrirlandi!',
          position: 'bottomLeft',
        })
        addSMSTemplateInStore()
        closeEditModal()
      },
      (error) => {
        notify.error({
          message: 'SMS shablonni taxrirlashda xatolik yuz berdi!',
          position: 'bottomLeft',
        })
      }
    )
  }
}

const updateTemplateCategory = () => {
  if (editTemplateCategoryParam.name === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'lim nomini kiriting!",
      position: 'bottomLeft',
    })
  } else {
    store.dispatch('templateCategoriesModule/update', editTemplateCategoryParam).then(
      () => {
        notify.success({
          message: "Bo'lim muvaffaqiyatli taxrirlandi!",
          position: 'bottomLeft',
        })
        addTemplateCategoryInStore()
        closeEditCategory(editTemplateCategoryParam.id)
      },
      (_) => {
        notify.error({
          message: "Bo'limni taxrirlashda xatolik yuz berdi!",
          position: 'bottomLeft',
        })
      }
    )
  }
}

const createTemplateCategory = () => {
  if (categoryName_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'lim nomini kiriting!",
      position: 'bottomLeft',
    })
  } else {
    const templateCategoryData = {
      name: categoryName_.value,
    }
    store.dispatch('templateCategoriesModule/create', templateCategoryData).then(
      () => {
        notify.success({
          message: "Bo'lim muvaffaqiyatli yaratildi!",
          position: 'bottomLeft',
        })
        addTemplateCategoryInStore()
        categoryName_.value = ''
      },
      (error) => {
        notify.error({
          message: "Bo'lim yaratishda xatolik yuz berdi!",
          position: 'bottomLeft',
        })
      }
    )
  }
}

const deleteSMSTemplate = (id) => {
  store.dispatch('templatesModule/delete', id).then(
    () => {
      notify.success({
        message: "SMS shablon muvaffaqiyatli o'chirildi!",
        position: 'bottomLeft',
      })
      addSMSTemplateInStore()
    },
    (error) => {
      notify.error({
        message: "SMS shablonni o'chirishda xatolik yuz berdi!",
        position: 'bottomLeft',
      })
    }
  )
}

const deleteTemplateCategory = (id) => {
  store.dispatch('templateCategoriesModule/delete', id).then(
    () => {
      notify.success({
        message: "Bo'lim muvaffaqiyatli o'chirildi!",
        position: 'bottomLeft',
      })
      addTemplateCategoryInStore()
      addSMSTemplateInStore()
    },
    (error) => {
      notify.error({
        message: "Bo'limni o'chirishda xatolik yuz berdi!",
        position: 'bottomLeft',
      })
    }
  )
}

onMounted(() => addSMSTemplateInStore(), addTemplateCategoryInStore())
</script>

<style scoped>
.custom-height {
  height: 75vh;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
