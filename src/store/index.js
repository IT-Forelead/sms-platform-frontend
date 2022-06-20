import { createStore } from 'vuex'
import { auth } from './auth.module'
import { singleUser } from './user.module'
import { contactsModule } from './contact.module'
import { holidaysModule } from './holiday.module'
import { templatesModule } from './template.module'
import { templateCategoriesModule } from './templateCategories.module'
import { settingsModule } from './setting.module'

const store = createStore({
  modules: {
    auth,
    singleUser,
    contactsModule,
    holidaysModule,
    templatesModule,
    templateCategoriesModule,
    settingsModule
  },
  state() {
    return {
      isLogin: false,
      user: {},
      currentPage: '',
      contacts: [],
      holidays: [],
      templates: [],
      templateCategories: [],
      settings: []
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
    setHolidays(state, data) {
      state.holidays = data
    },
    setSMSTemplate(state, data) {
      state.templates = data
    },
    setTemplateCategory(state, data) {
      state.templateCategories = data
    },
    setSetting(state, data) {
      state.settings = data
    }
  },
})

export default store
