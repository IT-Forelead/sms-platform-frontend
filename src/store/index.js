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
      users: [],
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setUsers(state, data) {
      state.users = data
    },
  },
})
export default store
