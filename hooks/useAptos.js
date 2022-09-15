
import { AptosClient } from 'aptos';
import { useEffect, useState } from 'react';
import toast from '../utils/toast';

const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";
const APTOS_COIN = "0x1::aptos_coin::AptosCoin";
const typeTag = `0x1::coin::CoinStore<${APTOS_COIN}>`;


// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);
      // const cointClient = new CoinClient(client)
      // const isConnected = await checkConnected()
      // if(!isConnected){
      //   return
      // }   

      
export const useAptos = () => {  
  const [address, setAddress] = useState(null)
  const [connected, setConnected] = useState(false)
  const [balance, setBalance] = useState('0')
  
  const firstCheckConnect = async () => {
    const result = await window.aptos.isConnected()
    if(result){
      setConnected(true)
      initData()
    }
  }
  const getBalance = async (balanceAdd) => {
      const client = new AptosClient(NODE_URL);
      const resources = await client.getAccountResources(balanceAdd)      
      const account = resources.find(item => item.type === typeTag)
      return !!account?.data?.coin?.value ? account.data.coin.value : '0'
  }
  const resetInfo = () => {
    setAddress(null)
    setConnected(false)
    setBalance('0')
  }
  const disconnect = async () => {    
    try {
      await window.aptos.disconnect()
      toast.success({ title: 'Logout' })
      resetInfo()
    } catch (error) {
      toast.error({ title: error.message, description: error.errors })
      return error
    }    
  }
  const connect = async () => {
    const result = await window.aptos.isConnected()
    if(result){
      return
    }
    try {
      await window.aptos.connect()      
      await initData()
      setConnected(true)
      toast.success({ title: 'Login' })
    } catch (error) {
      toast.error({ title: error.message, description: error.errors })
      return error
    }    
  }
  const initData = async () => {
    try {      
                     
      const data = await window.aptos.account()
      const currentBalance = await getBalance(data.address)
      setBalance(currentBalance)
      setAddress(data.address)
    } catch (error) {
      toast.error({ title: error.message, description: error.errors })
      return error
    }
  }
  useEffect(() => {
    firstCheckConnect()
  }, [])
  return {
    address,
    connected,
    connect,
    balance,
    disconnect
  }
}