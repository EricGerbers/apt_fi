import { getPoolIcon } from '../../utils/function';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ModalSelectToken } from './Modal';
import { dataSwap } from '../../data/swap';
import {ButtonConnect} from '../../components/ButtonConnect'
import { useAptos } from '../../hooks/useAptos';
import { Button } from '../../components/shared/Form/Button';

export const FormSwap = ({ token, onSelectToken, onChangeAmount, amount }) => {
  const { connect, connected } = useAptos(false);
  const [toggleSwap, setToggleSwap] = useState(false);
  const [modalOpen, setModalOpen] = useState('');
  const handleChangeFrom = (e, type) => {
    onChangeAmount({
      ...amount,
      [type]: e.target.value,
    });
  };
  const handleSwap = () => {
    setToggleSwap(!toggleSwap);
    onSelectToken({
      from: token.to,
      to: token.from,
    });
    onChangeAmount({ from: '', to: '' });
  };

  const handleSubmit = () => {
    alert('submit')
  }

  console.log('amount', amount)
  return (
    <>
      <div className='container-form-swap'>
        <div className='form-swap__header'>
          <span className='btn-percent'>
            <i className='bi bi-sliders'></i>
            0.5%
          </span>
        </div>
        <div className='form-swap__content'>
          <div className='form-header'>
            <label>From</label>
            <div className='form-header__max'>
              <i className='bi bi-wallet'></i>
              0.00
              <a href='#'>Max</a>
            </div>
          </div>
          <div className='form-field'>
            <input onChange={(e) => handleChangeFrom(e, 'from')} value={amount.from} />
            <div className='btn-open-token' onClick={() => setModalOpen('from')}>
              <img src={getPoolIcon(token.from.name)} width='24' />
              {token.from.name}
              <i className='bi bi-chevron-down'></i>
            </div>
          </div>
          <div className='form-line'>
            <div className='form-line__swap' onClick={handleSwap}>
              <motion.i
                className='bi bi-arrow-down-up'
                animate={{
                  rotate: toggleSwap ? 180 : 0,
                }}
                transition={{ duration: 0.25 }}
              ></motion.i>
            </div>
          </div>
          <div className='form-header from-header-to'>
            <label>To (Estimated)</label>
            <div className='form-header__max'>
              <i className='bi bi-wallet'></i>
              0.00
              <a href='#'>Max</a>
            </div>
          </div>
          <div className='form-field'>
            <div className='form-input_to'>
              <input onChange={(e) => handleChangeFrom(e, 'to')} value={amount.to} />
              <span>$0</span>
            </div>
            <div className='btn-open-token' onClick={() => setModalOpen('to')}>
              <img src={getPoolIcon(token.to.name)} width='24' />
              {token.to.name}
              <i className='bi bi-chevron-down'></i>
            </div>
          </div>
        </div>
        <div className='form-swap__submit'>
          {connected ? (
            <Button className='button-primary btn-form-amount' onClick={handleSubmit} disabled={!amount.from}>
              Submit
            </Button>
          ) : (
            <Button className='button-primary btn-form-amount' onClick={connect}>
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {modalOpen && (
          <ModalSelectToken
            onClose={() => setModalOpen('')}
            onSelect={(v) => {
              if (modalOpen === 'from') {
                const newToToken =
                  v.name === token.to.name
                    ? token.to.name === dataSwap[0].name
                      ? dataSwap[1]
                      : dataSwap[0]
                    : token.to;
                onSelectToken({ from: v, to: newToToken });
                onChangeAmount({ from: '', to: '' });
              } else {
                const newFromToken =
                  v.name === token.from.name
                    ? token.from.name === dataSwap[0].name
                      ? dataSwap[1]
                      : dataSwap[0]
                    : token.from;
                onSelectToken({ from: newFromToken, to: v });
                onChangeAmount({ from: '', to: '' });
              }
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};
