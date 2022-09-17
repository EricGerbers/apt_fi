import { useState } from 'react';
import { PopoverSearch } from './PopoverSearch';
import { dataSwap } from '../../data/swap';
import { FormSwap } from './FormSwap';

export const SwapContainer = () => {
  const [token, setToken] = useState({
    from: dataSwap[0],
    to: dataSwap[1],
  });
  const [amount, setAmount] = useState({
    from: '',
    to: '',
  });

  return (
    <div className='page-swap container'>
      <div className='swap-container'>
        <PopoverSearch onSelect={setToken} />
        <FormSwap token={token} amount={amount} onSelectToken={setToken} onChangeAmount={setAmount} />
      </div>
    </div>
  );
};
