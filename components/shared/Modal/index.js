import cx from 'classnames'
import { motion } from 'framer-motion'
import { uniqueId } from 'lodash'
import { useRef } from 'react'

import { Overlay, Portal } from '../index'

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
  type = 'full',
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
            top: type === 'semi' ? '3.25rem' : 0,
            transitionEnd: { overflowY: 'auto' },
          }}
          exit={{ top: '100vh', overflowY: 'hidden' }}
          transition={{ duration: 0.2, delay: 0 }}
          onAnimationComplete={onAnimateComplete}
          onClick={handleClose}
          className={cx(
            'p-4 fixed top-0 left-0 right-0 bottom-0 cursor-pointer w-screen max-w-screen max-h-screen z-modal',
            'flex flex-wrap justify-center items-center bg-transparent overflow-x-hidden',
            wrapperClassName,
          )}
        >
          <div
            className={cx(
              'p-4 bg-white min-h-[5rem] cursor-auto',
              rounded !== false && 'rounded-lg',
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
