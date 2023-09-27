import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountryByName } from '../api/fetchCountryByName';

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
    <main>
      {isLoading ? <span></span> : null}

      <section>
        <img src={countryData?.flag} alt={countryData?.name} />

        <div>
          <h3>Bordering countries</h3>

          <div>
            {countryData?.borders?.map((border) => (
              <h3 key={border}>{border}</h3>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2>{countryData?.name}</h2>
        <div>
          <p>
            Capital: <span>{countryData?.capital}</span>
          </p>
          <p>
            Region: <span>{countryData?.region}</span>
          </p>
          <p>
            Sub Region: <span>{countryData?.subregion}</span>
          </p>
          <p>
            Top Level Domain: <span>{countryData?.topLevelDomain}</span>
          </p>

          <p>
            Population: <span>{countryData?.population?.toLocaleString('en-US')}</span>
          </p>
          <p>
            Languages: <span>{countryData?.languages?.join(', ')}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
