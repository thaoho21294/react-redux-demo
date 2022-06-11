import { useRef } from 'react';

export function useDebounce() {
  const timer = useRef();
  return (func, timeout = 300) => {
    return (...args) => {
      if (!timer.current) {
        func.apply(this, args);
      }
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        timer.current = undefined;
      }, timeout);
    };
  };
}

export default useDebounce;
