import { useState, useEffect } from 'react';

const useSessionStorage = (key, defaultValue) => {
  const [state, setState] = useState(
    () => JSON.parse(window.sessionStorage.getItem(key)) ?? defaultValue,
  );

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useSessionStorage;
