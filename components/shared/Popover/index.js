import cx from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { usePopper } from 'react-popper';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import { PopoverContent } from './PopoverContent';

export const getTransformOrigin = (placement) => {
  if (placement === 'top') {
    return '50% 100%';
  }
  if (placement === 'bottom') {
    return '50% 0%';
  }
  if (placement === 'bottom-start') {
    return '0% 0%';
  }
  if (placement === 'bottom-end') {
    return '100% 0%';
  }
  if (placement === 'right-start') {
    return '0% 0%';
  }
  if (placement === 'right-end') {
    return '0% 100%';
  }
  if (placement === 'left') {
    return '100% 50%';
  }
  if (placement === 'left-start') {
    return '100% 0%';
  }
  return '50% 50%';
};

const Popover = ({
  visible: propVisible,
  style,
  content,
  className,
  popupClassName,
  popupContainer,
  onVisibleChange,
  placement = 'bottom',
  zIndex,
  children,
}) => {
  const [visible, setVisible] = useState(propVisible || false);
  const [refElement, setRefElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement,
  });

  const toggleVisible = (v) => {
    setVisible(v);
    onVisibleChange?.(v);
  };

  const onClose = () => toggleVisible(false);

  return (
    <>
      <div ref={setRefElement} className={cx(className)} onClick={() => toggleVisible(true)} style={style}>
        {children}
      </div>
      <AnimatePresence initial={false}>
        {visible && (
          <Portal popupContainer={popupContainer}>
            <Overlay className='popover-overlay' />
            <div
              ref={setPopperElement}
              className={cx(popupClassName, 'popover-container')}
              style={{ ...styles.popper, zIndex }}
              {...attributes.popper}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  transformOrigin: getTransformOrigin(attributes?.popper?.['data-popper-placement']),
                }}
              >
                {typeof content === 'function' ? (
                  content(onClose)
                ) : (
                  <PopoverContent children={content} onClose={onClose} />
                )}
              </motion.div>
            </div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};

Popover.Content = PopoverContent;
export { Popover };
