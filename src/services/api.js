import axios from 'axios'

const apiJoJosBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

export default apiJoJosBurger
