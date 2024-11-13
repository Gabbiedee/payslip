import { useState } from 'react';

export  const useError = () => {
  const [error, setError] = useState('');

  const setErrorMessage = (message) => {
    setError(message);
  };

  return { error, setErrorMessage};

};

