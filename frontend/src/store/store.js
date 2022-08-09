import { defineStore } from 'pinia'
import { verifyToken, login } from '../services/AuthService'
// console.log("file: store.js ~ line 3 ~ isAuthenticated", isAuthenticated)

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuth: false,
    loading: false,
    error: null
  }),
  actions: {
    async userLogin(name, password) {
      // console.log("file: store.js ~ line 14 ~ userLogin ~ name, password", name, password)
      this.loading = true
      try {
        const response = await login(name, password)
        this.isAuth = response.status
        console.log("file: store.js ~ line 19 ~ userLogin ~ this.isAuth", this.isAuth)
        // return response
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async userVerify() {
      this.loading = true
      try {
        console.log("file: store.js ~ line 20 ~ verifyToken ~ verifyTokens", await verifyToken())
        return await verifyToken()
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  }, 
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
          console.log("file: store.js ~ line 23 ~ .then ~ response", response.json())
          response.json()
        }) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
  }
})