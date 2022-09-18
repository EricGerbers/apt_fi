import { AptosClient } from 'aptos';
import { useEffect, useState } from 'react';
import { NODE_URL, TYPE_TAG } from '../utils/constants';
import toast from '../utils/toast';
import {convertAmountFromRawNumber, formatFixedDecimals, divide} from '../utils/bignumber'

// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);
// const cointClient = new CoinClient(client)
// const isConnected = await checkConnected()
// if(!isConnected){
//   return
// }
const client = new AptosClient(NODE_URL);

export const useAptos = (isInitData = false) => {
  const [address, setAddress] = useState(null);
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState('0');

  const firstCheckConnect = async () => {
    if(!window?.aptos){
      return
    }
    const result = await window.aptos.isConnected();
    if (result) {
      setConnected(true);
      isInitData && initData();
    }
  };
  const getBalance = async (balanceAdd) => {
    try {
      const resources = await client.getAccountResources(balanceAdd);
      const account = resources.find((item) => item.type === TYPE_TAG);
      return !!account?.data?.coin?.value ? formatFixedDecimals(convertAmountFromRawNumber(account.data.coin.value, 8),6) : '0';
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error
    }
  };
  const resetInfo = () => {
    setAddress(null);
    setConnected(false);
    setBalance('0');
  };
  const disconnect = async () => {
    if(!window?.aptos){
      return
    }
    try {
      await window.aptos.disconnect();
      toast.success({ title: 'Logout' });
      resetInfo();
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  const connect = async () => {    
    if(!window?.aptos){
      toast.error({ title: 'Please install wallet extension' });
      return
    }
    const result = await window.aptos.isConnected();
    if (result) {
      return;
    }
    try {
      await window.aptos.connect();
      await initData();
      setConnected(true);
      toast.success({ title: 'Login' });
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  const initData = async () => {
    try {
      const data = await window.aptos.account();
      const currentBalance = await getBalance(data.address);
      setBalance(currentBalance);
      setAddress(data.address);
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  useEffect(() => {    
    firstCheckConnect();    
  }, []);
  return {
    address,
    connected,
    connect,
    balance,
    disconnect,
  };
};
