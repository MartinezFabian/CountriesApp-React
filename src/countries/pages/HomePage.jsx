import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api/fetchAllCountries';
import { CountryCard } from '../components/CountryCard';
import styles from './HomePage.module.css';
import { SelectContinent } from '../components/SelectContinent';
import { useLocation } from 'react-router-dom';
import { fetchCountriesByContinent } from '../api/fetchCountriesByContinent';

export const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') ? searchParams.get('q') : '';

  const getCountries = async () => {
    const response = await fetchAllCountries();

    setCountries(response);

    setIsLoading(false);
  };

  const getCountriesByContinent = async () => {
    if (q !== '') {
      setIsLoading(true);

      const response = await fetchCountriesByContinent(q);

      setCountries(response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getCountriesByContinent();
  }, [q]);

  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        {q !== '' ? (
          <h2 className={styles.main__heading}>{q}</h2>
        ) : (
          <h2 className={styles.main__heading}>All countries</h2>
        )}

        <SelectContinent></SelectContinent>
      </div>

      {isLoading ? <span className={styles.loader}></span> : null}

      <div className={styles.grid}>
        {countries.map((country) => (
          <CountryCard key={country.key} name={country.name} flag={country.flag}></CountryCard>
        ))}
      </div>
    </main>
  );
};
