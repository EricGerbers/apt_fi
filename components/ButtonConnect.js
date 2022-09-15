import { Button } from "./shared/Form/Button"
import {useAptos} from '../hooks/useAptos'
import { splitAddress } from "../utils/function"

export const ButtonConnect = () => {
  const {connect, connected, address, balance, disconnect} = useAptos()
  console.log('aa', address, connected)
  if(connected){
    return (
      <Button onClick={disconnect} className='button-secondary btn-info-account'>
        <p>{balance} APT</p>
        <p>{splitAddress(address)}</p>
      </Button>
    )
  }
  return (
    <Button onClick={connect} className='button-primary'>Connect</Button>
  )
}