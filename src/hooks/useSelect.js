import { useCallback } from 'react';

export const useSelect = () => {
  const handleChange = useCallback((value) => {
    console.log(`selected ${value}`);
  }, []);

  const handleSearch = useCallback((value) => {
    console.log('search:', value);
  }, []);

  return { handleChange, handleSearch };
};