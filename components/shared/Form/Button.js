import cx from 'classnames'

export const Button = ({children, onClick, className}) => {
  return (
    <button onClick={onClick} className={cx(
      'button',
      className
    )}>
      {children}
    </button>
  )
}