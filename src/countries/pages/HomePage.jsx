import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api/fetchAllCountries';
import { CountryCard } from '../components/CountryCard';

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
    <main>
      {isLoading ? <span className="loader"></span> : null}

      {countries.map((country) => (
        <CountryCard key={country.key} name={country.name} flag={country.flag}></CountryCard>
      ))}
    </main>
  );
};
