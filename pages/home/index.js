import { AptosClient, FaucetClient, CoinClient } from 'aptos';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components/header';
import { useAptos } from '../../hooks/useAptos';
import { HomeBanner } from '../../src/Home/Banner';
import { userLogin, userUpdate } from '../../store/reducer/user';

// Create an AptosClient to interact with devnet.

// const NODE_URL = process.env.APTOS_NODE_URL || "https://fullnode.devnet.aptoslabs.com";
// const FAUCET_URL = process.env.APTOS_FAUCET_URL || "https://faucet.devnet.aptoslabs.com";
// const APTOS_COIN = "0x1::aptos_coin::AptosCoin";
// const client = new AptosClient(NODE_URL);
// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL, null);
// const cointClient = new CoinClient(client)
const Home = (props) => {

  return (
    <>
      <HomeBanner />
    </>
  );
}


export default Home
