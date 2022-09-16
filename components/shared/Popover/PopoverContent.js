import cx from 'classnames'
import { Fragment, useRef } from 'react'

import { useOutsideClick } from '../../../hooks/useOutsideClick'

export const PopoverContent = ({
  children,
  onClose,
  className,
  ...props
}) => {
  const popoverContentRef = useRef(null)
  useOutsideClick(popoverContentRef, onClose)

  return (
    <Fragment>
      <div
        ref={popoverContentRef}
        {...props}
        className={cx(
          'text-sm text-light-primary shadow-dropdown',
          'bg-white rounded-lg p-3 border border-light-stroke',
          className,
        )}
      >
        {children}
      </div>
    </Fragment>
  )
}
