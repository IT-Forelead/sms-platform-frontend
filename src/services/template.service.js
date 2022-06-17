import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class SMSTemplateService {
  getSMSTemplates() {
    return axios.get(API_URL + 'sms-template', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  createSMSTemplate(data) {
    return axios.post(API_URL + 'sms-template', {...data}, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  updateSMSTemplate(data) {
    return axios.put(API_URL + 'sms-template', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  deleteSMSTemplate(id) {
    return axios.delete(API_URL + 'sms-template', { headers: authHeader(), data: `"${id}"` }).then((response) => {
      return response.data
    })
  }
  
}

export default new SMSTemplateService()
