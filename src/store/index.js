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
    settingsModule,
    contactsModule,
    holidaysModule,
    templatesModule,
    templateCategoriesModule,
    messagesModule,
  },
  state() {
    return {
      isLogin: false,
      user: {},
      settings: {},
      currentPage: '',
      contacts: [],
      holidays: [],
      templates: [],
      templateCategories: [],
      messages: [],
    }
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload
    },
    setUser(state, data) {
      state.user = data
    },
    setSetting(state, data) {
      state.settings = data
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
    }
  },
})

export default store
