import { AptosClient, FaucetClient, CoinClient } from 'aptos';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAptos } from '../../hooks/useAptos';
import { userLogin, userUpdate } from '../../store/reducer/user';

// Create an AptosClient to interact with devnet.

const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";
const APTOS_COIN = "0x1::aptos_coin::AptosCoin";
const client = new AptosClient(NODE_URL);
const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);
const cointClient = new CoinClient(client)
const Home = (props) => {

  const {address, balance, disconnect, connect} = useAptos()
  // console.log('st', stateAptos)
  const state = useSelector(state => state.user)
  // const dispatch = useDispatch()
  // const initData = async () => {
  //   try {
  //     console.log('check conencted', window.aptos)    
  //     const check = await window.aptos.isConnected()
  //     console.log('check', check)
  //     dispatch(userLogin({isConnected: true}))
  //     const data = await window.aptos.account()
  //     if(data){
  //       dispatch(userUpdate({address: data.address}))
  //       const typeTag = `0x1::coin::CoinStore<${APTOS_COIN}>`;
  //       const resources = await client.getAccountResources(data.address)
  //       const account = resources.find(item => item.type === typeTag)
  //       // const test = await faucetClient
  //       // const checkBalance  = await cointClient.checkBalance(data)
  //       console.log('info account', account)
  //       // console.log('checkBalance', checkBalance)
  //     }
  //   } catch (error) {
  //     console.log('error', error)
  //   }
  // }

  
  // console.log('user', state)
  console.log('stateAptos', address)
  return (
    <div className="App">
      {
        address
      }
      <p>Balance : {balance}</p>
      <a href='/other'>other</a>
      <div className='' onClick={disconnect}>Disc</div>
      <div className='' onClick={connect}>Connect</div>
    </div>
  );
}

const AccountInfo = () => {
  const stateAptos = useAptos()
  return (
    <div>{stateAptos.address}</div>
  )
}


export default Home
