import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api/fetchAllCountries';
import { CountryCard } from '../components/CountryCard';
import styles from './HomePage.module.css';

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
    <main className={styles.main}>
      <h2 className={styles.main__heading}>All countries</h2>

      {isLoading ? <span className={styles.loader}></span> : null}

      <div className={styles.grid}>
        {countries.map((country) => (
          <CountryCard key={country.key} name={country.name} flag={country.flag}></CountryCard>
        ))}
      </div>
    </main>
  );
};
