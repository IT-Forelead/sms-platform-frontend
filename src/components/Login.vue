<template>
  <div class="bg-emerald-100 h-screen w-screen">
    <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
      <div class="flex rounded-3xl shadow-lg w-full h-3/4 sm:w-4/5 lg:w-2/3 bg-white sm:mx-0">
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex items-center">
            <img src="../assets/images/logo.png" class="shrink-0 w-8 ml-2" alt="#" />
            <div class="grow font-semibold text-lg text-gray-900 ml-2">IT-Forelead</div>
          </div>
          <div class="flex flex-col flex-1 justify-center mb-5">
            <h3 class="text-4xl text-center font-semibold">SMS-PLATFORM</h3>
            <p class="text-center text-sm px-10 text-gray-500 my-5">Mijozlaringizni tug'ilgan kunlarida va bayramlarda hech qanday vaqt sarflamasdan avtamatik tarizda tabriklang!</p>
            <div class="w-full mt-8">
              <Form @submit="onSubmit" :validation-schema="schema" class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                <div class="flex flex-col mt-4">
                  <Field v-model="email" name="email" type="email" class="bg-gray-100 text-gray-500 p-4 text-md w-full rounded-xl focus:outline-none focus:bg-gray-200 outline-none border-0" placeholder="Emailni kiriting..." />
                  <ErrorMessage name="email" class="error-feedback text-rose-600 font-medium" />
                </div>
                <div class="flex flex-col mt-4">
                  <Field v-model="password" name="password" type="password" class="bg-gray-100 text-gray-500 p-4 text-md w-full rounded-xl focus:outline-none focus:bg-gray-200 outline-none border-0" placeholder="Parolni kiriting..." />
                  <ErrorMessage name="password" class="error-feedback text-rose-600 font-medium" />
                </div>
                <div class="flex flex-col mt-8">
                  <button type="submit" class="bg-gray-900 hover:bg-gray-800 text-white py-5 text-md w-full rounded-xl">Tizimga kirish</button>
                </div>
              </Form>
              <div class="text-center mt-8">
                <a class="no-underline hover:underline cursor-pointer text-rose-600 text-sm">Parolni unitdingizmi?</a>
              </div>
            </div>
          </div>
          <div class="text-xs text-gray-400 text-center dark:text-gray-400">All rights reserved. &copy; <a href="https://it-forelead.uz" class="hover:underline">IT-Forelead</a> 2022</div>
        </div>
        <div class="bg-image md:block md:w-2/3 rounded-r-3xl">
          <div class="flex justify-center items-center h-full">
            <div class="w-full text-white backdrop-blur-sm backdrop-contrast-50 rounded-xl px-10 py-16 mx-32">
              <h3 class="text-3xl font-semibold mb-5">Lorem ipsum, dolor sit amet consectetur elit.</h3>
              <p class="text-md">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit optio fuga, itaque deleniti facilis accusamus aliquam sint ad laborum nam?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import { useStore } from 'vuex'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import authService from '../services/auth.service'

const router = useRouter()

const store = useStore()

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
.bg-image {
  background: url('../assets/images/bg-login.jpg');
  background-size: cover;
  background-position: 855px center;
}
</style>