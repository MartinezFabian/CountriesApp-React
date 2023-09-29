import { useLocation } from 'react-router-dom';
import { SearchInput } from '../components/SearchInput';
import { fetchCountriesByName } from '../api/fetchCountriesByName';
import { useEffect, useState } from 'react';
import { CountryCard } from '../components/CountryCard';
import styles from './SearchPage.module.css';

export const SearchPage = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get('q') ? searchParams.get('q') : '';

  const searchCountries = async () => {
    const data = await fetchCountriesByName(q);

    setCountries(data);

    setIsLoading(false);
  };

  useEffect(() => {
    searchCountries();
  }, [q]);

  return (
    <main className={styles.main}>
      <SearchInput></SearchInput>

      {isLoading ? <span className={styles.loader}></span> : null}

      <div className={styles.grid}>
        {countries.map((country) => (
          <CountryCard key={country.key} name={country.name} flag={country.flag}></CountryCard>
        ))}
      </div>
    </main>
  );
};
