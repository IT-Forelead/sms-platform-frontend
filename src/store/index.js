import { createStore } from 'vuex'
import { auth } from './auth.module'
import { singleUser } from './user.module'
import { contactsModule } from './contact.module'
import { holidaysModule } from './holiday.module'
import { templatesModule } from './template.module'
import { templateCategoriesModule } from './templateCategories.module'
import { messagesModule } from './message.module'
import { settingsModule } from './setting.module'

const store = createStore({
  modules: {
    auth,
    singleUser,
    contactsModule,
    holidaysModule,
    templatesModule,
    templateCategoriesModule,
    messagesModule,
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
      messages: [],
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
    setMessage(state, data) {
      state.messages = data
    },
    setSetting(state, data) {
      state.settings = data
    }
  },
})

export default store
