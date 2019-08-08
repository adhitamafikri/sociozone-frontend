import axios from 'axios'
import { API_URL } from '../config/api'

// Login
export const postLogin = (params) => {
  console.log('Posting Login!', params)
  // axios.post(`${API_URL}/login`, params)
}


// Registration
export const postRegistration = (params) => {
  console.log('Posting Registration!', params)
  axios.post(`${API_URL}/register`, params)
    .then(response => console.log(response))
    .catch(err => console.log(err))
}
