import { InjectedConnector } from '@web3-react/injected-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import {chainId} from './chains';
import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: process.env.RPC_URL_1 ,
  4: process.env.RPC_URL_4
}


export const injected = new InjectedConnector({ supportedChainIds: chainId })
export const bscConnector = new BscConnector({ supportedChainIds: chainId })
export const walletlink = new WalletLinkConnector({supportedChainIds: chainId})
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1]},
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const connectorsByName = {
  'injected': injected,
  'bsc': bscConnector,
  'walletconnect': walletconnect,
  'walletlink': walletlink,
}