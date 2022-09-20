import { useState } from 'react';
import { Input } from '../../components/shared/Form/Input';
import { Sol } from '../../icons/tokens/Sol';
import { Button } from '../../components/shared/Form/Button';
import { Tooltip } from '../../components/shared/Tooltip';
import { FormTooltip } from './';
import {useSelector} from 'react-redux'
import { ButtonOnlyConnect } from '../../components/ButtonOnlyConnect';

export const FormStake = () => {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');
  const stateAccount = useSelector(store => store.account)
  const {connected, balance} = stateAccount
  const handleSubmit = () => {
    if (amount === 0 || amount === '') {
      setError('Please input amount');
      return;
    }
  };
  const handleSetMax = () => {
    setAmount(balance);
  };

  return (
    <div>
      <h5>Stake</h5>
      <Input
        type='number'
        error={error !== ''}
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        prefixIcon={<Sol />}
        placeholder='Amount'
        suffix={
          <Button className='btn-stake-max' disabled={(!connected)} onClick={handleSetMax}>
            Max
          </Button>
        }
      />
      {error !== '' && <div className='text-red-900 form-stake-error'>{error}</div>}
      {connected ? (
        <Button className='button-primary btn-form-amount' onClick={handleSubmit}>
          Submit
        </Button>
      ) : (
        <ButtonOnlyConnect className='button-primary btn-form-amount'>
          Connect Wallet
        </ButtonOnlyConnect>
      )}
      <div className='form-pool-note'>
        <div className='form-pool-note__label'>
          You will receive
          <Tooltip
            content={
              <FormTooltip message='Transaction cost and one time rent exemption fees will be deducted from your SOL balance' />
            }
            placement='bottom'
          >
            <i className='bi bi-question-circle'></i>
          </Tooltip>
        </div>
        <div>~{+amount * 0.7} stSOL</div>
      </div>
      <div className='form-pool-note'>
        <div className='form-pool-note__label'>
          Exchange rate
          <Tooltip
            content={
              <FormTooltip message='Updates at the end of an epoch. Rising exchange rate indicates an appreciation in stSOL value' />
            }
            placement='bottom'
          >
            <i className='bi bi-question-circle'></i>
          </Tooltip>
        </div>
        <div>1 SOL = ~0.9458 stSOL</div>
      </div>
      <div className='form-pool-note'>
        <div className='form-pool-note__label'>Transaction cost</div>
        <div>~ 0.000005 SOL ($0.00016)</div>
      </div>
      <div className='form-pool-note'>
        <div className='form-pool-note__label'>
          Staking rewards fee
          <Tooltip
            content={
              <FormTooltip message='Please note: This fee applies to staking rewards/earnings only, and is NOT taken from your staked amount. It is a fee on earnings only. This fee is split between node operators, the DAO treasury, and Lido for Solana developers' />
            }
            placement='bottom'
          >
            <i className='bi bi-question-circle'></i>
          </Tooltip>
        </div>
        <div>7%</div>
      </div>
    </div>
  );
};
