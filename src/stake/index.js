import { useState } from 'react';
import cx from 'classnames';
import { motion } from 'framer-motion';
import { StakeStatistic } from './statistics';
import { FormStake } from './formStake';
import { StakeFAQ } from './faq';
import { FormUnStake } from './formUnstake';

export const StakeContainer = () => {
  const [segment, setSegment] = useState('stake');
  return (
    <div className='page-stake container'>
      <div className='stake-header'>
        <h1>Solana DeFi Integrations</h1>
        <p>Use stSOL across the Solana DeFi ecosystem</p>
      </div>
      <div className='list-segments'>
        <motion.div
          className='segment-indicator'
          transition={{ duration: 0.01 }}
          animate={{
            right: segment === 'unstake' ? 2 : 118,
          }}
        />
        <div
          className={cx('segment-item segment-stake', segment === 'stake' && 'active')}
          onClick={() => setSegment('stake')}
        >
          Stake
        </div>
        <div
          className={cx('segment-item segment-unstake', segment === 'unstake' && 'active')}
          onClick={() => setSegment('unstake')}
        >
          Unstake
        </div>
      </div>
      <div className='stake-container'>
        <div className='content-form stake-form'>{segment === 'stake' ? <FormStake /> : <FormUnStake />}</div>
        <StakeStatistic />
        <StakeFAQ />
      </div>
    </div>
  );
};

export const FormTooltip = ({ message }) => <div className='stake-tooltip'>{message}</div>;
