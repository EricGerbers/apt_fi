import cx from 'classnames';
import { forwardRef } from 'react';

export const Input = forwardRef(({ suffix, innerClass = '', prefixIcon, error = false, ...props }, ref) => {
  return (
    <div className={cx('form-input', innerClass)}>
      <div className='form-input__container'>
        <input {...props} ref={ref} className={cx(error && 'error', prefixIcon && 'has-prefix', props.className)} />
        {prefixIcon && <div className='form-input__prefix'>{prefixIcon}</div>}
        {suffix && (
          <div className='form-input__error'>{suffix && <div className='form-input__suffix'>{suffix}</div>}</div>
        )}
      </div>
    </div>
  );
});
