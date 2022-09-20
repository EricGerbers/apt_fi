import { Button } from './shared/Form/Button';
import { useAptos } from '../hooks/useAptos';
import cx from 'classnames'
import {useSelector} from 'react-redux'
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ModalSelectWallet } from './modal/ModalSelectWallet';

export const ButtonOnlyConnect = ({ children, className = '' }) => {
  const [isOpenWallet, setOpenWallet] = useState(false)
  const { connect } = useAptos();
  return (
    <>
      <Button onClick={() => setOpenWallet(true)} className={cx('button-primary', className)}>
        {children}
      </Button>
      <AnimatePresence initial={false}>
        {
          isOpenWallet && (
            <ModalSelectWallet
              onClose={() => setOpenWallet(false)}
              onSelect={(type) => {
                setOpenWallet(false)
                connect(type)
              }}
            />
          )
        }
      </AnimatePresence>
    </>
  );
};
