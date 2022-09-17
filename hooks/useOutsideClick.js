import { useEffect } from 'react';

export function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler?.(event);
      }
    };
    window.addEventListener('mousedown', listener, true);
    return () => window.removeEventListener('mousedown', listener);
  }, []);
}
