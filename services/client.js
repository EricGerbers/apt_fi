import axios from 'axios'

const authInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export default authInstance

export { instance }
