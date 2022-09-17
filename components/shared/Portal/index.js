import { createPortal } from 'react-dom';

export const getPopupContainer = (selector) => {
  // if(typeof document === 'undefined'){
  //   return null
  // }
  let node = null;
  if (typeof selector === 'string') {
    node = document?.querySelector(selector);
  } else {
    node = selector();
  }
  if (node) {
    return node;
  }
  return document.body;
};

export const Portal = ({ children, popupContainer }) => {
  // if(typeof document === 'undefined'){
  //   return null
  // }
  return createPortal(children, popupContainer ? getPopupContainer(popupContainer) : document.body);
};
