import { useCallback, useEffect, useReducer, useRef } from 'react';
import { toast } from '../utils/toast';

export function useAsync(initState) {
  const mounted = useRef(false);
  const initialStateRef = useRef({
    status: 'idle',
    data: null,
    error: null,
    showNotifOnError: false,
    ...initState,
  });
  const [state, _setState] = useReducer((s, a) => ({ ...s, ...a }), initialStateRef.current);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const setState = useCallback((args) => (mounted.current ? _setState(args) : void 0), [_setState]);

  const reset = useCallback(() => setState(initialStateRef.current), [setState]);

  const execute = useCallback(
    (asyncFn) => {
      setState({ status: 'pending' });
      return asyncFn.then(
        (data) => {
          setState({ data, status: 'resolved', error: null });
          return data;
        },
        (error) => {
          setState({ status: 'rejected', data: null, error });
          state.showNotifOnError && toast.error({ title: error.message, description: error.errors });
          return Promise.reject(error);
        }
      );
    },
    [setState, state.showNotifOnError]
  );

  return {
    isIdle: state.status === 'idle',
    isLoading: state.status === 'pending',
    isError: state.status === 'rejected',
    isSuccess: state.status === 'resolved',
    setState,
    ...state,
    execute,
    reset,
  };
}
