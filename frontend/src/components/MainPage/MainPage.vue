<script lang="ts" setup>

  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router';
  // import RightMenu from '../../library/modules/Menu/RightMenu.vue'

  const router = useRouter()

  const projects = ref<any>([])

  onMounted(() => {
    axios.get(`http://localhost:8000/api/projects/`, { 
        // headers: {
        //   "Authorization" : `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU5ODI1ODg4LCJpYXQiOjE2NTk4MjU1ODgsImp0aSI6ImZlNTU3YzNjNGJjMDQ4MTFhYTM5ZWQwYzMyNWJiZTYwIiwidXNlcl9pZCI6Mn0.jygiqil4TF72__g6MNGgkInQEMZnHL2yR3CgmZda3fw'}`
        // } 
      }).then((response: any) => {
        console.log("file: MainPage.vue ~ line 18 ~ onMounted ~ response", response)
        try {
          projects.value = response.data
        } catch (e) {

        }
    });
  })
</script>

<template>
  <div class="flex h-screen container mx-auto dark:bg-gray-900" 
    :class="{ 'overflow-hidden': ''}
  ">

    <div class="flex flex-col flex-1">

      <main class="h-full pb-16 overflow-y-auto">

        <div class="block md:grid md:grid-flow-row-dense md:grid-cols-2 mr-10 md:grid-rows-2 ">
          <div class="col-span-2">
            <div v-for="project in projects" :key="project.pk" class="bg-white shadow rounded-lg mt-10">
              <div role="button" 
                @click="router.push('/project/' + project.pk)" 
                class="flex flex-row px-2 py-3 mx-3"
              >
                <div class="w-auto h-auto rounded-full border-2 border-green-500">
                  <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar"
                    src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200">
                </div>
                <div class="flex flex-col mb-2 ml-4 mt-1">
                  <div class="text-gray-600 text-sm font-semibold">Sara Lauren</div>
                  <div class="flex w-full mt-1">
                    <div class="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                      UX Design
                    </div>
                    <div class="text-gray-400 font-thin text-xs">
                      • 1 day ago
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    {{ project.fields.title }}
                  </div>
                  <div>
                    {{ project.fields.text }}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>

    <div>
      <RightMenu />
    </div>
    
  </div>

</template>