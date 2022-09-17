import cx from 'classnames';

export const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={cx('button', className)} {...props}>
      {children}
    </button>
  );
};
