
import { useDispatch } from 'react-redux';
import { updateAccount } from '../../store/account/action';
import {Modal} from '../shared/Modal'

export const ModalSelectWallet = ({ onClose, onSelect, ...props }) => {
  const dispatch = useDispatch()
  const handleSelectWallet = (type) => {
    dispatch(updateAccount({
      type
    }))
    localStorage.setItem('selectedWallet', type)
    onSelect(type)
  }
  return (
    <Modal {...props} className='modal-wallet' onClose={onClose}>
      <div className='wallet-list'>
        <div className='wallet-list-item' onClick={() => handleSelectWallet('aptos')}>
          <img src='./images/Petra.jpeg' width={40}/>
          <span>Petra Aptos Wallet</span>
        </div>
        <div className='wallet-list-item' onClick={() => handleSelectWallet('pontem')}>
          <img src='./images/Pontem.jpeg' width={40}/>
          <span>Pontem Aptos Wallet</span>
        </div> 
        <div className='wallet-list-item' onClick={() => handleSelectWallet('martian')}>
          <img src='./images/Martian.jpeg' width={40}/>
          <span>Martian Aptos Wallet</span>
        </div>
      </div>
    </Modal>
  );
};
