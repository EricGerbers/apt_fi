import { createPortal } from 'react-dom'

const DEFAULT_POPUP_CONTAINER = document.body

export const getPopupContainer = (selector) => {
  let node = null
  if (typeof selector === 'string') {
    node = document.querySelector(selector)
  } else {
    node = selector()
  }
  return node || DEFAULT_POPUP_CONTAINER
}

export const Portal = ({ children, popupContainer }) => {
  return createPortal(
    children,
    popupContainer
      ? getPopupContainer(popupContainer)
      : DEFAULT_POPUP_CONTAINER,
  )
}
