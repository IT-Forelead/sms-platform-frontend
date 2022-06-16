import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class HolidayService {
  getHolidays() {
    return axios.get(API_URL + 'holiday', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  createHoliday(data) {
    return axios.post(API_URL + 'holiday', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  updateHoliday(data) {
    return axios.put(API_URL + 'holiday', { ...data }, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  deleteHoliday(id) {
    return axios.delete(API_URL + 'holiday', { headers: authHeader(), data: `"${id}"` }).then((response) => {
      return response.data
    })
  }
}

export default new HolidayService()
