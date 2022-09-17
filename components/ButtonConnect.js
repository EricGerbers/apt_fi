import { Button } from './shared/Form/Button';
import { useAptos } from '../hooks/useAptos';
import { splitAddress } from '../utils/function';

export const ButtonConnect = ({ isInitData = false }) => {
  const { connect, connected, address, balance, disconnect } = useAptos(isInitData);
  if (connected) {
    return (
      <Button onClick={disconnect} className='button-secondary btn-info-account'>
        <p>{balance} APT</p>
        <p>{splitAddress(address)}</p>
      </Button>
    );
  }
  return (
    <Button onClick={connect} className='button-primary btn-connect-account'>
      <i className='bi bi-wallet-fill'></i> Connect Wallet
    </Button>
  );
};
