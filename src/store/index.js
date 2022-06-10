import { createStore } from 'vuex'
import { auth } from './auth.module'
import { singleUser } from './user.module'
import { contactsModule } from './contact.module'
import { templatesModule } from './template.module'
import { templateCategories } from './templateCategories.module'

const store = createStore({
  modules: {
    auth,
    singleUser,
    contactsModule,
    templatesModule
  },
  state() {
    return {
      isLogin: false,
      user: {},
      currentPage: '',
      contacts: [],
      templates: []
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
    },
    setSMSTemplate(state, data) {
      state.templates = data
    },
    setTemplateCategory(state, data) {
      state.templateCategories = data
    }
  },
})
export default store
