<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> start your 14-day free trial </a>
        </p>
      </div>
      <form id="app" @submit="checkForm"
        class="mt-8 space-y-6" action="#" method="POST"
      >
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
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
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

<script>
import axios from 'axios' 

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      }
    }
  },
  mounted() {
    // this.checkAuth()
  },
  methods: {
    checkForm: function (e) {
      console.log("🚀 ~ file: Login.vue ~ line 64 ~ e", e)
      e.preventDefault();

      this.auth();
 
      // send get request
      // this.$http.get(url, this.form, function (data, status, request) {

      // // set data on vm
      // // this.response = data;

      // }).error(function (data, status, request) {
      //     // handle error
      // });

      e.preventDefault();
    },

  // checkAuth() {
  //   if (localStorage.getItem('token') === null) {
  //     window.location.replace('http://localhost:3000/login');
  //   } else {
  //     fetch('http://127.0.0.1:8000/auth/user/', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Token ${localStorage.getItem('token')}`
  //       }
  //     }).then(data => {
  //       return data.json()
  //     }).then(data => {
  //       console.log("📝 - file: HelloWorld.vue - line 31 - checkAuth - data", data)
  //     });
  //   } 
  // },


  auth() {
    let csrftoken =  this.$cookies.get('csrftoken');
    console.log("📝 - file: HelloWorld.vue - line 24 - created - csrftoken", csrftoken)

    const config = {
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRFToken': '8Fz6HbID7yTfhiBd4EtMVaYixoMOVbVd6gnmi2LFoPTDDpIerycdJc7F07sMncYV',
          // 'Authorization': 'Token o3byMw11upDVuq3KWcoAurw3AGy2Dq7SyhpmIqYimlaVpyQ6YDr7VMgFzQJTIcs9'
        }
    };
    const body = JSON.stringify(this.form);

    axios.post(`http://localhost:8000/auth/login/`, body, config).then(data => {
      console.log("🚀 ~ file: Login.vue ~ line 121 ~ axios.post ~ data", data)
      try {
        localStorage.setItem('token', data.data.key)
      } catch(e) {

      }
    });
  }
  },

}
</script>

<style>

</style>