import { Button } from './shared/Form/Button';
import { useAptos } from '../hooks/useAptos';
import { splitAddress } from '../utils/function';
import {Popover} from '../components/shared/Popover'
import { PopoverContent } from './shared/Popover/PopoverContent'

export const ButtonConnect = ({ isInitData = false }) => {
  const { connect, connected, address, balance, disconnect } = useAptos(isInitData);
  if (connected) {
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
          <p>{balance} APT</p>
          <p>{splitAddress(address)}</p>
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
