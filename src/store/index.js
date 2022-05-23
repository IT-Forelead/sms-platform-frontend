import { createStore } from 'vuex'
import { auth } from './auth.module'
import { user } from './user.module'

const store = createStore({
  modules: {
    auth,
    user,
  },
  state() {
    return {
      isLogin: false,
      user: {},
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setUser(state, data) {
      state.user = data
    },
  },
})
export default store
