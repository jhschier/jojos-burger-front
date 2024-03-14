import axios from 'axios'

const apiJoJosBurger = axios.create({
  baseURL: 'https://jojos-burger-production.up.railway.app'
})

apiJoJosBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('jojosburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`

  return config
})
export default apiJoJosBurger
