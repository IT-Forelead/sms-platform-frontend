<template>
  <div class="px-3">
    <h3 class="text-3xl font-extrabold mb-3 ml-2">Bayramlar</h3>
    <div class="grid grid-cols-2 gap-1 mb-5">
      <div class="custom-height overflow-y-auto mt-3 px-1">
        <div class="grid grid-cols-2 gap-2">
          
          <div class="relative h-52 rounded-lg from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
            <div class="absolute bottom-0 w-full max-w-lg mx-auto bg-white rounded-b-lg">
              <div class="text-center -mt-10 mb-2">
                <div class="flex items-center justify-center text-4xl bg-blue-200 border-4 text-white border-white w-20 h-20 rounded-full mx-auto">
                  <i class="fa-solid fa-gift"></i>
                </div>
              </div>
              <h3 class="text-lg text-center py-1 leading-normal mb-1 font-semibold text-black">Yangi yil bayrami</h3>
              <p class="text-gray-500 mb-1 py-1 text-center">31-dekabr</p>
            </div>
          </div>
          
          <div class="relative h-52 rounded-lg from-blue-100 via-blue-300 to-blue-500 bg-gradient-to-br">
            <div class="absolute bottom-0 w-full max-w-lg mx-auto bg-white rounded-b-lg">
              <div class="text-center -mt-10 mb-2">
                <div class="flex items-center justify-center text-4xl bg-blue-200 border-4 text-white border-white w-20 h-20 rounded-full mx-auto">
                  <i class="fa-solid fa-gift"></i>
                </div>
              </div>
              <h3 class="text-lg text-center py-1 leading-normal mb-1 font-semibold text-black">Yangi yil bayrami</h3>
              <p class="text-gray-500 mb-1 py-1 text-center">31-dekabr</p>
            </div>
          </div>

        </div>
      </div>
      <div class="p-3">
        <div class="bg-white rounded-lg p-3 px-5">
          <h3 class="text-2xl font-extrabold mb-3">Bayram qo'shish</h3>
          <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
          <form>
            <div class="mb-6">
              <label for="name-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram nomi</label>
              <input type="text" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bayram nomini kiriting..." />
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram kuni</label>
              <select id="gender-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram kunini tanlang</option>
                <option v-for="item in 31" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
            <div class="mb-6">
              <label for="gender-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">Bayram oyi</label>
              <select id="gender-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Bayram oyini tanlang</option>
                <option value="1">Yanvar</option>
                <option value="2">Fevral</option>
                <option value="3">Mart</option>
                <option value="4">Aprel</option>
                <option value="5">May</option>
                <option value="6">Iyun</option>
                <option value="7">Iyul</option>
                <option value="8">Avgust</option>
                <option value="9">Sentabr</option>
                <option value="10">Oktyabr</option>
                <option value="11">Noyabr</option>
                <option value="12">Dekabr</option>
              </select>
            </div>
            <hr class="border-gray-200 border-dotted bottom-1 mb-6" />
            <div class="flex justify-end">
              <input type="reset" id="reset-form" class="mx-1 bg-blue-200 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Tozalash" />
              <button type="submit" class="mx-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jo'natish</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'
import notify from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import templateService from '../../services/template.service'
import templateCategoryService from '../../services/templateCategories.service'
import $ from 'jquery'

function openActions(id) {
  let x = $(`#st-${id}`)
  x.toggleClass('fa-ellipsis-vertical').toggleClass('fa-times')
  x.parent('.actions').toggleClass('w-11').toggleClass('w-28').toggleClass('shadow').toggleClass('right-1')
  x.parent('.actions').children('div').toggleClass('hidden')
}

const store = useStore()

const templateCategoryId_ = ref("Bo'limni tanlang")
let title_ = ref('')
const text_ = ref('')
const access_ = ref('Kim uchunligini tanlang')

const addSMSTemplateInStore = () => {
  templateService.getSMSTemplates().then((data) => store.commit('setSMSTemplate', data))
}

const addTemplateCategoryInStore = () => {
  templateCategoryService.getTemplateCategories().then((data) => store.commit('setTemplateCategory', data))
}

const templates = computed(() => {
  return store.state.templates
})

const templateCategories = computed(() => {
  return store.state.templateCategories
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
  if (templateCategoryId_.value === "Bo'limni tanlang") {
    notify.warning({
      title: 'Diqqat!',
      message: "Iltimos, bo'limni tanlang!",
      position: 'bottomLeft',
    })
  } else if (title_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, sarlavhani kiriting!',
      position: 'bottomLeft',
    })
  } else if (text_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, matnni kiriting!',
      position: 'bottomLeft',
    })
  } else if (access_.value === '') {
    notify.warning({
      title: 'Diqqat!',
      message: 'Iltimos, kim uchunligini tanlang!',
      position: 'bottomLeft',
    })
  } else {
    const templateData = {
      templateCategoryId: templateCategoryId_.value,
      title: title_.value,
      text: text_.value,
      genderAccess: access_.value,
    }
    store.dispatch('templatesModule/create', templateData).then(
      () => {
        notify.success({
          message: 'SMS shablon muvaffaqiyatli yaratildi!',
          position: 'bottomRight',
        })
        addSMSTemplateInStore()
        title_ = ref('')
        $('#ggg')[0].reset()
      },
      (error) => {
        notify.error({
          message: 'SMS shablon yaratishda xatolik yuz berdi!' + error,
          position: 'bottomRight',
        })
      }
    )
  }
}

onMounted(() => addSMSTemplateInStore(), addTemplateCategoryInStore())
</script>
<style scoped>
.custom-height {
  height: 75vh;
}
</style>