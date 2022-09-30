import { Button } from './shared/Form/Button';
import { splitAddress } from '../utils/function';
import {Popover} from '../components/shared/Popover'
import { PopoverContent } from './shared/Popover/PopoverContent'
import {useSelector, useDispatch} from 'react-redux'


import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react';
// import { modalOpen } from '../store/reducers/modal';
import useConnect from '../hooks/useConnect';
import useInactiveListener from '../hooks/useInactiveEvent';

import { getErrorMessage } from '../utils/web3React';
import { connectorsByName } from '../utils/connectors';
import Web3 from 'web3';
import { chainIdSupported, listChainSupp } from '../utils/chains';
import toast from '../utils/toast';
import { updateAccount } from '../store/account/action';
import { ModalSelectWallet } from './ModalSelectWallet';
import { AnimatePresence } from 'framer-motion';
import { convertAmountFromRawNumber, formatFixedDecimals } from '../utils/bignumber';
import {getCurrencyUnit} from '../utils/utilities'

export const ButtonConnect = ({showInfo = true}) => {
  const stateAccount = useSelector(state => state.account);
  const [isOpenModal, setOpenModal] = useState(false)
  const [activatingConnector, setActivatingConnector] = useState()
  const { connector, account, active, library, chainId, error, deactivate } = useWeb3React()
  const dispatch = useDispatch();  

  const handleLogout = () => {
    try {
      deactivate();
      toast.success({ title: 'Logout.', type: 'success' });
    } catch (error) {
      console.log(error);
      toast.error({ title: 'Something went wrong.', type: 'error' });
      return null;
    }
  }


  useEffect(() => {
    if (connectorsByName[stateAccount.type] === connector) {
      setActivatingConnector(undefined)
    }
  }, [stateAccount.type, connector])

  const triedEager = useConnect();

  const handleRequestChangeNetwork = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [listChainSupp[0]]
      })
    } catch (error) {
      console.log('quite', error)
    }
  }
  useInactiveListener(!triedEager || !!activatingConnector);

  useEffect(() => {
    if (!!account && !!library) {
      let stale = false

      library
        .getBalance(account)
        .then((balance) => {
          if (!stale) {
            dispatch(updateAccount({ balance }))
          }
        })
        .catch(() => {
          if (!stale) {
            dispatch(updateAccount({ balance: 0 }))
          }
          return
        })
    }
  }, [account, library, chainId])

  useEffect(() => {    
    if(!chainIdSupported.includes(chainId) && connector){
      handleRequestChangeNetwork()
      return 
    }
    connector?.getProvider().then(provider => {
      console.log('r', provider)
      if(provider){
        const web3 = new Web3(provider);
        console.log('w', web3)
        if(web3 && web3.eth && account){
          web3.eth.getBalance(account).then(number => {            
            dispatch(updateAccount({ web3, balance: number }))
          }).catch(() => {
            toast.error({ title: 'Something went wrong.', type: 'error' });
          })
        }
      }
      
    
    })
  }, [connector, chainId])
  useEffect(() => {
    if (error) {
      let message = getErrorMessage(error);
      toast.error({ title: message, type: 'error' });
    }
  }, [error])

  if (!active) {
    return (
      <>
        <Button onClick={() => setOpenModal(true)} className='button-primary btn-connect-account'>        
          <i className='bi bi-wallet-fill'></i> Connect Wallet    
        </Button>
        <AnimatePresence initial={false}>
        {isOpenModal && (
          <ModalSelectWallet
            onClose={() => setOpenModal(false)}            
          />
        )}
      </AnimatePresence>
      </>
    )
  }
  if(showInfo){
    return (
      <Popover
        placement='bottom'
        content={(
          <PopoverContent>
            <div className='popover-logout'>
              <div onClick={handleLogout} className='link-logout'>Logout</div>
            </div>
          </PopoverContent>
        )}
      >
        <Button className='button-primary btn-info-account'>
          <p>{formatFixedDecimals(convertAmountFromRawNumber(stateAccount.balance), 4)} {getCurrencyUnit(chainId)}</p>
          <p>{splitAddress(account)}</p>
        </Button>
      </Popover>
    )
  }
  return null
}