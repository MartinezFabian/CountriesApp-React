import { useNavigate } from 'react-router-dom';

import styles from './SelectContinent.module.css';

export const SelectContinent = () => {
  const navigate = useNavigate();

  const onChangeSelect = (e) => {
    const continent = e.target.value;

    navigate(`?q=${continent}`);
  };

  return (
    <select onChange={onChangeSelect} defaultValue="" className={styles.select}>
      <option value="" disabled className={styles.select__option}>
        Filter by Continent
      </option>
      <option value="Africa" className={styles.select__option}>
        Africa
      </option>
      <option value="Americas">Americas</option>
      <option value="Asia" className={styles.select__option}>
        Asia
      </option>
      <option value="Europe" className={styles.select__option}>
        Europe
      </option>
      <option value="Oceania" className={styles.select__option}>
        Oceania
      </option>
    </select>
  );
};
