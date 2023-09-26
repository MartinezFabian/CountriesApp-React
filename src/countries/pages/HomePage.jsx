import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api/fetchAllCountries';

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCountries = async () => {
    const response = await fetchAllCountries();

    setCountries(response);

    setIsLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};
