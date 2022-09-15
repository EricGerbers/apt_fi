import cx from 'classnames'
import { forwardRef } from 'react'
import { useLockScroll } from '../../../hooks/useLockScroll'


export const Overlay = forwardRef((props, ref) => {
  const { children, className, lockScroll, zIndex, ...rest } = props

  useLockScroll(lockScroll)

  return (
    <div
      {...rest}
      ref={ref}
      style={{ ...props.style, zIndex }}
      className={cx(
        'modal-overlay',
        className,
      )}
    >
      {children}
    </div>
  )
})
