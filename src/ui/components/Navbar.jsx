import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.nav__h1}>
        <NavLink to="/" className={styles.nav__heading}>
          CountryExplorer
        </NavLink>
      </h1>

      <div className={styles.nav__container}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
          }
        >
          All countries
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive ? `${styles.nav__link} ${styles.active}` : styles.nav__link
          }
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
};
