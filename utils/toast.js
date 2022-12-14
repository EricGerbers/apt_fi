import cx from 'classnames';
import { toast as toastify } from 'react-toastify';

import { ErrorCircle, InfoCircle, SuccesCircle, WarningCircle } from '../icons';

const defaultConfig = {
  autoClose: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  position: 'top-right',
};

const renderMessage = (message) => (props) => {
  const { title, description: desc, action, icon } = message;
  return (
    <div className={cx('toast-message', !desc && 'items-center')}>
      {icon && <div className='toast-icon'>{icon}</div>}
      <div className={cx('toast-body', !desc && 'self-center')}>
        <div className='toast-title'>{title}</div>
        {desc && (
          <div className='toast-description'>
            {typeof desc === 'string' ? desc : Object.keys(desc).map((k) => <div key={k}>{desc[k][0]}</div>)}
          </div>
        )}
        {action && <div className='toast-action mt-2'>{action}</div>}
      </div>
      <span className='toast-close' onClick={props.closeToast}>
        <i className='bi bi-x-circle'></i>
      </span>
    </div>
  );
};

const getToastIcon = (type, icon) => {
  if (icon) {
    return icon;
  }
  if (type === 'info') {
    return (
      <span>
        <WarningCircle className='text-orange-900' />
      </span>
    );
  }
  if (type === 'success') {
    return (
      <span>
        <SuccesCircle className='text-green-900' />
      </span>
    );
  }
  if (type === 'warning') {
    return (
      <span>
        <InfoCircle className='text-blue-900' />
      </span>
    );
  }
  if (type === 'error') {
    return (
      <span>
        <ErrorCircle className='text-red-900' />
      </span>
    );
  }
  return undefined;
};

const _toast = (message, config) => {
  const { type = 'info', className } = config || {};
  const icon = getToastIcon(type, message.icon);
  return toastify(renderMessage({ ...message, icon }), {
    ...defaultConfig,
    ...config,
    className: cx('custom-toast', `toast-${type}`, className),
  });
};

const genToast = (type) => {
  return (message, config) => {
    return _toast(message, { ...config, type });
  };
};

const toast = {
  info: genToast('info'),
  success: genToast('success'),
  warning: genToast('warning'),
  error: genToast('error'),
};

export default toast;
