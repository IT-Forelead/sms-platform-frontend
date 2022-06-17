import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class ContactService {
  getContacts() {
    return axios.get(API_URL + 'contact', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  createContact(data) {
    return axios.post(API_URL + 'contact', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  updateContact(data) {
    return axios.put(API_URL + 'contact', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  deleteContact(id) {
    return axios.delete(API_URL + 'contact', { headers: authHeader(), data: `"${id}"` }).then((response) => {
      return response.data
    })
  }
}

export default new ContactService()
