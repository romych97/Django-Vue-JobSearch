<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          
          you are login now? {{ isLogin }}
          <!-- Or -->
          <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">

          </a> -->
        </p>
      </div>
      <form id="app" @submit="checkForm"
        class="mt-8 space-y-6" action="#" method="POST"
      >
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="mb-3">
            <label for="login-address" class="sr-only">login address</label>
            <input v-model="form.username" id="login-address" name="login" type="login" autocomplete="login" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="login address">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input v-model="form.password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
          </div>
        </div>

        <div>
          <button @click="auth" type="button" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

  import axios from 'axios' 
  import { storeToRefs } from 'pinia'
  import { usePostStore } from '/src/store/store'
  import { ref, reactive, onMounted } from 'vue' 
  import VueCookies from 'vue-cookies'
  import { useAuthStore } from '../../store/store';

  const { posts, loading, error } = storeToRefs(usePostStore())
  const { fetchPosts } = usePostStore()
  const authStore = useAuthStore();

  const form = reactive({ username: '', password: '', })

  const isLogin = ref(false)

  const auth = () => {
    authStore.userLogin(form)
    isLogin.value = authStore.isAuth
    console.log("file: Login.vue ~ line 78 ~ auth ~ isLogin", isLogin)
  }

</script>

<style>

</style>