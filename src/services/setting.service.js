import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class SettingService {
  getSettings() {
    return axios.get(API_URL + 'setting', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  updateSettings(data) {
    return axios.put(API_URL + 'setting', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  updateSMSIds(data) {
    return axios.put(API_URL + 'setting/update-template', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }
}

export default new SettingService()
