import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <h1>CountryExplorer</h1>

      <div>
        <NavLink to="/">All countries</NavLink>
        <NavLink to="/search">Search</NavLink>
      </div>
    </nav>
  );
};
