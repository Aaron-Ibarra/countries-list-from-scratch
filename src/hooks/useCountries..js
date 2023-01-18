import { useEffect, useState } from 'react';
import { fetchCountries } from '../services/fetchCountries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchCountries();
      setCountries(response);
    };
    fetchData();
  }, []);
  return countries;
}
