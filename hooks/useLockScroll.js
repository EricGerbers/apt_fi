import { useEffect } from 'react'

export function useLockScroll(enable) {
  useEffect(() => {
    const shouldLock =
      enable && !document.body.classList.contains('overflow-hidden')

    if (shouldLock) {
      lockScroll()
    }
    return () => {
      shouldLock && unlockScroll()
    }
  }, [enable])

  const lockScroll = () => {
    document.body.style.width = `calc(100% - ${
      window.innerWidth - document.body.clientWidth
    }px)`
    document.body.classList.add('overflow-hidden')
  }

  const unlockScroll = () => {
    document.body.style.removeProperty('width')
    document.body.classList.remove('overflow-hidden')
  }
}
