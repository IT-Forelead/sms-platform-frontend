import { createStore } from 'vuex'
import { auth } from './auth.module'
import { singleUser } from './user.module'
import { contacts } from './contact.module'

const store = createStore({
  modules: {
    auth,
    singleUser,
    contacts
  },
  state() {
    return {
      isLogin: false,
      user: {},
      currentPage: '',
      contacts: [],
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setUser(state, data) {
      state.user = data
    },
    setSelectedPage(state, page) {
      state.currentPage = page
    },
    setContacts(state, data) {
      state.contacts = data
    }
  },
})
export default store
