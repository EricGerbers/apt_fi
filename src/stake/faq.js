import { motion } from 'framer-motion';
import { useState } from 'react';
import { FormTooltip } from '.';
import { Tooltip } from '../../components/shared/Tooltip';

export const StakeFAQ = () => {
  return (
    <div className='container-info-stake'>
      <div>
        <div className='stake-info-header'>
          <h5>FAQ</h5>
        </div>
      </div>
      <div className='faq-list'>
        <FAQItem title='What is Lido on Solana?'>
          <p>
            Lido on Solana is a liquid staking solution for SOL backed by industry-leading staking providers. Lido lets
            users earn SOL staking rewards without needing to maintain infrastructure and enables them to trade staked
            positions, as well as participate in on-chain decentralized finance with their staked assets.
          </p>
        </FAQItem>
        <FAQItem title='How does Lido on Solana work?'>
          <p>
            A SOL token holder connects their wallet and deposits their tokens into Lido. They immediately receive stSOL
            tokens in return, representing a share of the total staking pool. Lido delegates SOL to Lido-controlled
            validators on the Solana network and when these delegations accrue rewards on the allotted stake, the total
            SOL under management grows, increasing the value of stSOL tokens.
          </p>
        </FAQItem>
        <FAQItem title='What is liquid staking?'>
          <p>
            Liquid staking protocols allow users to earn staking rewards without locking assets or maintaining staking
            infrastructure. Users can deposit tokens and receive tradable liquid tokens in return. Liquid staking
            combines the benefits of staking (earning rewards) and brings liquidity, as well as additional possibilities
            to increase your assets or hedge your positions by participating in DeFi.
          </p>
          <p>
            Furthermore, Lido stakes these tokens with DAO-elected staking providers. As users' funds are controlled by
            the program, staking providers never have direct access to the users' assets. Additionally, by involving
            different staking providers, Lido diversifies staking risks across multiple node operators.
          </p>
        </FAQItem>
        <FAQItem title='How long after unstaking can I withdraw my SOL?'>
          <p>
            Your stake will take 2-3 days to completely deactivate upon unstaking. After that, you can use your wallet
            (e.g. Phantom or Solflare) to withdraw the inactive stake.
          </p>
        </FAQItem>
      </div>
    </div>
  );
};

const FAQItem = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='content-form faq-content'>
      <div className='faq-title' onClick={() => setOpen(!isOpen)}>
        {title} <i className={isOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></i>
      </div>
      <motion.div
        initial={{
          height: 0,
          overflow: 'hidden',
        }}
        animate={{
          height: isOpen ? 'auto' : 0,
          overflow: isOpen ? 'auto' : 'hidden',
        }}
        className='faq-description'
      >
        {children}
      </motion.div>
    </div>
  );
};
