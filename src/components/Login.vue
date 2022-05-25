<template>
  <div class="bg-cover bg-fixed w-100 h-screen" style="background-image: url('./src/assets/images/main-bg.jpg')">
    <div class="h-screen bg-slate-900/75 flex justify-center items-center big-wrapper">
      <div class="form-wrapper xl:w-4/12 lg:w-5/12 md:w-6/12 bg-slate-900/50 p-10 rounded-xl backdrop-blur-sm">
        <div id="clock" class="text-9xl text-white text-center font-medium">00:00</div>
        <div id="fullDate" class="text-4xl text-white text-center font-medium my-5 mb-10 uppercase">weekday 00 Month 0000</div>
        <Form @submit="onSubmit" :validation-schema="schema" class="mb-5">
          <div class="mb-6">
            <Field name="email" type="email" placeholder="Elektron pochta" v-model="email" class="bg-white/25 border border-white text-white text-xl placeholder:text-white outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4" />
            <ErrorMessage name="email" class="error-feedback text-red-600 font-medium" />
          </div>
          <div class="mb-6">
            <Field name="password" type="password" placeholder="Parol" v-model="password" class="bg-white/25 border border-white text-white text-xl placeholder:text-white outline-none rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-4" />
            <ErrorMessage name="password" class="error-feedback text-red-600 font-medium" />
          </div>
          <button type="submit" class="text-white bg-blue-700/75 hover:bg-blue-800/100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-xl w-full px-5 py-4 text-center">Kirish</button>
        </Form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import $ from 'jquery'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import { useStore } from 'vuex'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import authService from '../services/auth.service'

const router = useRouter()
const store = useStore()

const updateClock = () => {
  let currentTime = new Date()
  let currentMinutes = currentTime.getMinutes()
  currentMinutes = (currentMinutes < 10 ? '0' : '') + currentMinutes
  $('#clock').text(currentTime.getHours() + ':' + currentMinutes)
}
const fullDate = () => {
  let now = new Date()
  let days = ['Yak', 'Du', 'Se', 'Chor', 'Pay', 'Juma', 'Shanba']
  const monthNames = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr']
  let date = days[now.getDay()] + ' ' + now.getDate() + ' ' + monthNames[now.getMonth()] + ' ' + now.getFullYear()
  $('#fullDate').text(date)
}
onMounted(() => {
  fullDate()
  setInterval(updateClock, 1000)
})

const email = ref('')
const password = ref('')

const schema = yup.object().shape({
  email: yup.string().required('Iltimos. Emailni kitiring!'),
  password: yup.string().required('Iltimos. Parolni kitiring!'),
})

function checkLogin(data) {
  store.commit('setLogin', data)
}

const onSubmit = (user) => {
  store.dispatch('auth/login', user).then(
    () => {
      router.push('/')
      checkLogin(true)
      setInterval(() => {
        authService.logout()
        router.push('/login')
        checkLogin(false)
      }, 500 * 60 * 60)
    },
    (error) => {
      iziToast.error({
        message: (error.response && error.response.data && error.response.data.message) || error.message || error.toString(),
        position: 'topRight',
      })
    }
  )
}
</script>
<style scoped>
.bg-cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
}
</style>