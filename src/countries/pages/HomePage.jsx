import { useEffect, useState } from 'react';
import { fetchAllCountries } from '../api/fetchAllCountries';
import { CountryCard } from '../components/CountryCard';
import styles from './HomePage.module.css';
import { SelectContinent } from '../components/SelectContinent';

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
      <div className={styles.main__container}>
        <h2 className={styles.main__heading}>All countries</h2>

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
