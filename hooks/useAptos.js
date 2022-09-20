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

const getWalletInstance = (type) => {
  if(type === 'pontem'){
    return window.pontem
  }
  if(type === 'martian'){
    return window.martian
  }
  return window.aptos
}
export const useAptos = () => {
  const [address, setAddress] = useState(null);
  const stateAccount = useSelector(state => state.account)
  const dispatch = useDispatch()
  // const firstCheckConnect = async () => {
  //   const type = localStorage.getItem('selectedWallet') || 'aptos'
  //   const windowInstance = getWalletInstance(type)
  //   if(!windowInstance){
  //     return
  //   }
  //   if(stateAccount.connected){
  //     return
  //   }
  //   const result = await windowInstance.isConnected();
  //   if (result) {
  //     dispatch(updateAccount({
  //       connected: true
  //     }))
  //     isInitData && initData();
  //   }
  // };
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
    const windowInstance = getWalletInstance(stateAccount.type)
    if(!windowInstance){
      return
    }
    try {
      await windowInstance.disconnect();
      toast.success({ title: 'Logout' });
      resetInfo();
      dispatch(updateAccount({
        connected: false,
        balance: 0,
        address: '',
        type: ''
      }))
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  const connect = async (type) => { 
    const windowInstance = getWalletInstance(type)
    if(!windowInstance){
      toast.error({ title: 'Please install wallet extension' });
      return
    }
    if(stateAccount.connected){
      return
    }
    try {
      const r = await windowInstance.connect();
      await initData(r?.address ? r.address : true);
      dispatch(updateAccount({
        connected: true
      }))
      toast.success({ title: 'Login' });
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  const initData = async (add) => {
    try {
      const windowInstance = getWalletInstance(stateAccount.type)
      if(!windowInstance){
        toast.error({ title: 'Please install wallet extension' });
        return
      }
      let address = add
      if(typeof add === 'boolean'){
        const data = await windowInstance.account();
        address = data.address
      }
    
      const currentBalance = await getBalance(address);
      dispatch(updateAccount({
        balance: currentBalance,
        address: address
      }))
    } catch (error) {
      toast.error({ title: error.message, description: error.errors });
      return error;
    }
  };
  // useEffect(() => {    
  //   firstCheckConnect();    
  // }, []);
  return {
    address,
    connect,
    disconnect,
  };
};
