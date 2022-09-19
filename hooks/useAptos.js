import { AptosClient } from 'aptos';
import { useEffect, useState } from 'react';
import { NODE_URL, TYPE_TAG } from '../utils/constants';
import toast from '../utils/toast';
import {convertAmountFromRawNumber, formatFixedDecimals} from '../utils/bignumber'
import {useSelector, useDispatch} from 'react-redux'
import {updateAccount} from '../store/account/action'

// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);
// const cointClient = new CoinClient(client)
// const isConnected = await checkConnected()
// if(!isConnected){
//   return
// }
const client = new AptosClient(NODE_URL);

export const useAptos = (isInitData = false) => {
  const [address, setAddress] = useState(null);
  const stateAccount = useSelector(state => state.account)
  const dispatch = useDispatch()
  const firstCheckConnect = async () => {
    if(!window?.aptos){
      return
    }
    if(stateAccount.connected){
      return
    }
    const result = await window.aptos.isConnected();
    if (result) {
      dispatch(updateAccount({
        connected: true
      }))
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
  };
  const disconnect = async () => {
    if(!window?.aptos){
      return
    }
    try {
      await window.aptos.disconnect();
      toast.success({ title: 'Logout' });
      resetInfo();
      dispatch(updateAccount({
        connected: false,
        balance: 0,
        address: ''
      }))
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
    if(stateAccount.connected){
      return
    }
    const result = await window.aptos.isConnected();
    if (result) {
      return;
    }
    try {
      await window.aptos.connect();
      await initData();
      dispatch(updateAccount({
        connected: true
      }))
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
      dispatch(updateAccount({
        balance: currentBalance,
        address: data.address
      }))
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
    connect,
    disconnect,
  };
};
