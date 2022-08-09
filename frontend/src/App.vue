
<script setup lang="ts">

  import { onMounted } from 'vue';
  import TopMenu from './library/modules/Menu/TopMenu.vue'
  // import { isAuthenticated } from './services/AuthService'

  import { useAuthStore } from './store/store';

  // const authStore = useAuthStore();
  // console.log("file: App.vue ~ line 11 ~ authStore", authStore.isAuth)
  // const isAuth = isAuthenticated()
  // console.log("file: App.vue ~ line 10 ~ onMounted ~ isAuth", authStore.userVerify())


</script>

<template>
  <div>
    <div>
      
    </div>

    <TopMenu />
    <!-- <RightMenu /> -->
    
    <router-view></router-view>

  </div>
</template>

