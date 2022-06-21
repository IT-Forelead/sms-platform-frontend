import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class MessageService {
  getMessages() {
    return axios.get(API_URL + 'messages', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }
}

export default new MessageService()
