import axios from 'axios'
const url = process.env.VUE_APP_API_URL

export default {
  login: data => axios.post(`${url}/login`, data)
}
