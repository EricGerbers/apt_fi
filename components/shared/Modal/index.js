import cx from 'classnames'
import { motion } from 'framer-motion'
import { uniqueId } from 'lodash'
import { useRef } from 'react'

import { Overlay} from '../Overlay'
import {Portal} from '../Portal'

const getModalRoot = () => {
  const id = 'modal-root'
  let modalRoot = document.getElementById(id)
  if (!modalRoot) {
    const div = document.createElement('div')
    div.id = id
    modalRoot = div
  }
  return modalRoot
}

export const Modal = ({
  onClose,
  className,
  overlayClassName,
  wrapperClassName,
  rounded,
  onAnimateComplete,
  overlayZIndex,
  children,
}) => {
  const modalIdRef = useRef(uniqueId('modal-'))

  const handleClose = event => {
    const selection = window.getSelection()
    if (selection?.toString() !== '') {
      return
    }
    const target = event.target
    target.id === modalIdRef.current && onClose()
  }

  return (
    <Portal popupContainer={getModalRoot}>
      <Overlay lockScroll zIndex={overlayZIndex} className={overlayClassName}>
        <motion.div
          id={modalIdRef.current}
          initial={{ top: '100vh', overflowY: 'hidden' }}
          animate={{
            top: 0,
            transitionEnd: { overflowY: 'auto' },
          }}
          exit={{ top: '100vh', overflowY: 'hidden' }}
          transition={{ duration: 0.2, delay: 0 }}
          onAnimationComplete={onAnimateComplete}
          onClick={handleClose}
          className={cx(
            'modal-container',
            wrapperClassName,
          )}
        >
          <div
            className={cx(
              'modal-content',
              rounded !== false && 'rounded',
              className,
            )}
          >
            {children}
          </div>
        </motion.div>
      </Overlay>
    </Portal>
  )
}
