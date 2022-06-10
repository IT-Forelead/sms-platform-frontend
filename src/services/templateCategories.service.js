import axios from 'axios'
import authHeader from './auth-header.js'

const API_URL = 'http://localhost:9000/'

class TemplateCategoriesService {
  getTemplateCategories() {
    return axios.get(API_URL + 'template-category', { headers: authHeader() }).then((response) => {
      return response.data
    })
  }

  createTemplateCategory(data) {
    console.log(data);
    return axios.post(API_URL + 'template-category', {...data}, { headers: authHeader() }).then((response) => {
      return response.data
    })
  }
  
}

export default new TemplateCategoriesService()
