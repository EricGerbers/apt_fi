import axios from 'axios'

const authInstance = axios.create({
  withCredentials: true,
})

export default authInstance


export const getPrice = () => {
  return authInstance.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum-wormhole&vs_currencies=usd')
}
