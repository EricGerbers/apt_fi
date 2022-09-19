import { Button } from './shared/Form/Button';
import { useAptos } from '../hooks/useAptos';
import { splitAddress } from '../utils/function';
import {Popover} from '../components/shared/Popover'
import { PopoverContent } from './shared/Popover/PopoverContent'
import {useSelector} from 'react-redux'

export const ButtonConnect = ({ isInitData = false }) => {
  const { connect, disconnect } = useAptos(isInitData);
  const stateAccount = useSelector(state => state.account)

  if (stateAccount.connected) {
    return (
      <Popover
        placement='bottom'
        content={(
          <PopoverContent>
            <div className='popover-logout'>
              <div onClick={disconnect} className='link-logout'>Logout</div>
            </div>
          </PopoverContent>
        )}
      >
        <Button className='button-primary btn-info-account'>
          <p>{stateAccount.balance} APT</p>
          <p>{splitAddress(stateAccount.address)}</p>
        </Button>
      </Popover>
    );
  }
  return (
    <Button onClick={connect} className='button-primary btn-connect-account'>
      <i className='bi bi-wallet-fill'></i> Connect Wallet
    </Button>
  );
};
