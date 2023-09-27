import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCountryByName } from '../api/fetchCountryByName';
import styles from './CountryPage.module.css';

export const CountryPage = () => {
  const [countryData, setCountryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { countryId } = useParams();

  const getCountryData = async () => {
    const data = await fetchCountryByName(countryId);

    setCountryData(data);

    setIsLoading(false);
  };

  useEffect(() => {
    getCountryData();
  }, [countryId]);

  return (
    <main className={styles.main}>
      {isLoading ? <span className={styles.loader}></span> : null}

      <section className={styles.main__section}>
        <img src={countryData?.flag} alt={countryData?.name} className={styles.main__flag} />

        <div className={styles.main__container}>
          {countryData?.borders?.length > 0 ? (
            <h3 className={styles.main__title}>Bordering countries</h3>
          ) : null}

          <div className={styles.main__borders}>
            {countryData?.borders?.map((border) => (
              <h3 key={border} className={styles.border}>
                {border}
              </h3>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.main__section}>
        <h2>{countryData?.name}</h2>
        <div className={styles.info}>
          <p className={styles.info__bold}>
            Capital: <span className={styles.info__text}>{countryData?.capital}</span>
          </p>
          <p className={styles.info__bold}>
            Region: <span className={styles.info__text}>{countryData?.region}</span>
          </p>
          <p className={styles.info__bold}>
            Sub Region: <span className={styles.info__text}>{countryData?.subregion}</span>
          </p>
          <p className={styles.info__bold}>
            Top Level Domain: <span className={styles.border}>{countryData?.topLevelDomain}</span>
          </p>

          <p className={styles.info__bold}>
            Population:{' '}
            <span className={styles.info__text}>
              {countryData?.population?.toLocaleString('en-US')}
            </span>
          </p>
          <p className={styles.info__bold}>
            Languages:{' '}
            <span className={styles.info__text}>{countryData?.languages?.join(', ')}</span>
          </p>
        </div>

        <div className={styles.containerbtn}>
          <Link to={'/'} className={styles.btn}>
            Back
          </Link>
        </div>
      </section>
    </main>
  );
};
