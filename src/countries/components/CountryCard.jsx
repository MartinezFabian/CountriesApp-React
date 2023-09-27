import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';

export const CountryCard = ({ name, flag }) => {
  return (
    <Link to={`/country/${name}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.card__container}>
          <img src={flag} alt={name} className={styles.card__img} />
        </div>

        <h3 className={styles.card__heading}>{name}</h3>

        <div className={styles.card__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#6868f0"
            className={styles.card__svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};
