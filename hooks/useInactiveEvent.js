import { useEffect} from 'react';
import { useWeb3React } from '@web3-react/core'
import {injected} from '../utils/connectors';
import { chainIdSupported } from '../utils/chains';
import toast from '../utils/toast';

const useInactiveListener = (suppress = false) => {
  const { active, error, activate, deactivate } = useWeb3React()
  useEffect(()=> {
    const { ethereum } = window;
    if (ethereum && ethereum.on  && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event")        
        activate(injected)
      }
      const handleChainChanged = async (chainId) => {
        console.log("Handling 'chainChanged' event with payload", chainId)        
        toast.error({ title: 'Changed chainId', type: 'success' });
        activate(injected)
      }
      const handleAccountsChanged = (accounts) => {
        console.log("Handling 'accountsChanged' event with payload", accounts)
        if (accounts.length > 0) {
          toast.error({ title: 'Changed Account', type: 'success' });
          activate(injected)
        }
      }
      const handleNetworkChanged = (networkId) => {
        console.log("Handling 'networkChanged' event with payload", networkId)
        if(!chainIdSupported.includes(+networkId)){
          deactivate();
          toast.error({ title: 'Logout.', type: 'sucess' });
        }else{
          toast.error({ title: 'Changed network', type: 'success' });
          activate(injected)
        }        
      }

      ethereum.on('connect', handleConnect)
      ethereum.on('chainChanged', handleChainChanged)
      ethereum.on('accountsChanged', handleAccountsChanged)
      ethereum.on('networkChanged', handleNetworkChanged)

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect)
          ethereum.removeListener('chainChanged', handleChainChanged)
          ethereum.removeListener('accountsChanged', handleAccountsChanged)
          ethereum.removeListener('networkChanged', handleNetworkChanged)
        }
      }
    }
  }, [active, error, suppress, activate])
}

export default useInactiveListener