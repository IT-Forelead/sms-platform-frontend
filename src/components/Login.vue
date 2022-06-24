<template>
  <div class="h-screen w-screen bg-emerald-100">
    <div class="flex h-full flex-1 flex-col items-center justify-center px-4 sm:px-0">
      <div class="flex h-3/4 w-full rounded-3xl bg-white shadow-lg sm:mx-0 sm:w-4/5 lg:w-2/3">
        <div class="flex w-full flex-col p-4 md:w-1/2">
          <div class="flex items-center">
            <img src="../assets/images/logo.png" class="ml-2 w-8 shrink-0" alt="#" />
            <div class="ml-2 grow text-lg font-semibold text-gray-900">IT-Forelead</div>
          </div>
          <div class="mb-5 flex flex-1 flex-col justify-center">
            <h3 class="text-center text-4xl font-semibold">SMS-PLATFORM</h3>
            <p class="my-5 px-10 text-center text-sm text-gray-500">Mijozlaringizni tug'ilgan kunlarida va bayramlarda hech qanday vaqt sarflamasdan avtamatik tarizda tabriklang!</p>
            <div class="mt-8 w-full">
              <Form @submit="onSubmit" :validation-schema="schema" class="form-horizontal mx-auto w-3/4" method="POST" action="#">
                <div class="mt-4 flex flex-col">
                  <Field v-model="email" name="email" type="email" class="text-md w-full rounded-xl border-0 bg-gray-100 p-4 text-gray-500 outline-none focus:bg-gray-200 focus:outline-none" placeholder="Emailni kiriting..." />
                  <ErrorMessage name="email" class="error-feedback font-medium text-rose-600" />
                </div>
                <div class="mt-4 flex flex-col">
                  <Field v-model="password" name="password" type="password" class="text-md w-full rounded-xl border-0 bg-gray-100 p-4 text-gray-500 outline-none focus:bg-gray-200 focus:outline-none" placeholder="Parolni kiriting..." />
                  <ErrorMessage name="password" class="error-feedback font-medium text-rose-600" />
                </div>
                <div class="mt-8 flex flex-col">
                  <button type="submit" class="text-md w-full rounded-xl bg-gray-900 py-5 text-white hover:bg-gray-800">Tizimga kirish</button>
                </div>
              </Form>
              <div class="mt-8 text-center">
                <a class="cursor-pointer text-sm text-rose-600 no-underline hover:underline">Parolni unitdingizmi?</a>
              </div>
            </div>
          </div>
          <div class="text-center text-xs text-gray-400 dark:text-gray-400">All rights reserved. &copy; <a href="https://it-forelead.uz" class="hover:underline">IT-Forelead</a> 2022</div>
        </div>
        <div class="bg-image rounded-r-3xl md:block md:w-2/3">
          <div class="flex h-full items-center justify-center">
            <div class="mx-32 w-full rounded-xl px-10 py-16 text-white backdrop-blur-sm backdrop-contrast-50">
              <h3 class="mb-5 text-3xl font-semibold">Lorem ipsum, dolor sit amet consectetur elit.</h3>
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

const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i //email regex

const onSubmit = (user) => {
  if (!regex.test(user.email)) {
    iziToast.warning({
      message: "Iltimos, to'g'ri email kiriting! Masalan namuna@misol.uz",
      position: 'topRight',
    })
  } else {
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
          message: "Email toki parol noto'g'ri!",
          position: 'topRight',
        })
      }
    )
  }
}
</script>

<style scoped>
.bg-image {
  background: url('../assets/images/bg-login.jpg');
  background-size: cover;
  background-position: 855px center;
}
</style>
