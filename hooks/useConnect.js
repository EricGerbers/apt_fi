
import {useState, useEffect} from 'react'
import { useWeb3React } from '@web3-react/core'

import { useDispatch } from 'react-redux'
import toast from '../utils/toast'


const useConnect = () => {
  const { active } = useWeb3React()
  const [tried, setTried] = useState(false)

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true)
      toast.success({ title: 'Login success', type: 'success' });
    }
  }, [tried, active])

  return tried
}

export default useConnect