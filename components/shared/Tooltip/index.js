import cx from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'

import { Portal } from '../Portal'


export const Tooltip = ({
  children,
  visible: propVisible,
  className,
  popupClassName,
  popupContainer,
  content,
  onVisibleChange,
  placement = 'top',
  modifiers = [],
  zIndex,
}) => {
  const [visible, setVisible] = useState(propVisible || false)
  const [refElement, setRefElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [checkDocument, setCheckDocument] = useState(false)
  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement,
    modifiers: [...(modifiers || [])],
  })

  const toggleVisible = (v) => {
    if (propVisible === undefined) {
      setVisible(v)
    }
    onVisibleChange?.(v)
  }

  useEffect(() => {
    if(typeof window.document !== 'undefined' && !checkDocument){
      setCheckDocument(true)
    }
  }, [checkDocument])

  if(!checkDocument){
    return <div></div>
  }
  return (
    <>
      <div
        ref={setRefElement}
        className={cx(className)}
        onMouseEnter={() => toggleVisible(true)}
        onMouseLeave={() => toggleVisible(false)}
      >
        {children}
      </div>
      {visible && (
        <Portal popupContainer={popupContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={setPopperElement}
            onMouseEnter={() => toggleVisible(true)}
            onMouseLeave={() => toggleVisible(false)}
            className={cx(popupClassName, 'tooltip-container')}
            style={{ ...styles.popper, zIndex }}
            {...attributes.popper}
          >
            <div className='tooltip-content'>
              {content}
            </div>
          </motion.div>
        </Portal>
      )}
    </>
  )
}
