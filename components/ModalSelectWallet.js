import { useWeb3React } from '@web3-react/core';
import { useDispatch } from 'react-redux';
import { updateAccount } from '../store/account/action';
import { connectorsByName } from '../utils/connectors';
import { Modal } from './shared/Modal';


export const ModalSelectWallet = ({ onClose, ...props }) => {
  const dispatch = useDispatch();
  const {activate} = useWeb3React();

  const handleConnect = (type) => {
    let inject = connectorsByName[type];
    dispatch(updateAccount({type}))
    activate(inject);
    onClose();
  }
  return (
    <Modal {...props} className='modal-default modal-login' onClose={onClose}>
      <div>
        <div className='modal-header'>
          <h2 className='modal-title' id='exampleModalLabel'>
            Connect to wallet
          </h2>
        </div>
        <div className='modal-body text-center'>
          <h5 className='modal-icon-login' onClick={() => handleConnect('injected')}>
            <img src='./images/metamask.png' alt='Logo Metamask' width={60}/>
            <span>Metamask Wallet - <b>Desktop</b></span>
          </h5>
          <h5 className='modal-icon-login' onClick={() => handleConnect('walletlink')}>
            <img src='./images/coinbase.svg' alt='Logo wallet connect' width={60}/>
            <span>Coinbase Wallet</span>
          </h5>
          <h5 className='modal-icon-login' onClick={() => handleConnect('walletconnect')}>
            <img src='./images/walletconnect.svg' alt='Logo wallet connect' width={60}/>
            <span>Connect Wallet</span>
          </h5>
        </div>
      </div>
    </Modal>
  );
};
