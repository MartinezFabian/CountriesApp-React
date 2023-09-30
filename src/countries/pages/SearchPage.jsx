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

      {countries.length === 0 && q !== '' ? (
        <div className={styles.alert}>
          <div className={styles.alert__text}>
            No encontramos resultados para <span className={styles.bold}>{q}</span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1d1d1d"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
            />
          </svg>
        </div>
      ) : null}

      <div className={styles.grid}>
        {countries.map((country) => (
          <CountryCard key={country.key} name={country.name} flag={country.flag}></CountryCard>
        ))}
      </div>
    </main>
  );
};
