import { useNavigate } from 'react-router-dom';

export const SelectContinent = () => {
  const navigate = useNavigate();

  const onChangeSelect = (e) => {
    const continent = e.target.value;

    navigate(`?q=${continent}`);
  };

  return (
    <select onChange={onChangeSelect}>
      <option>Filter by Continent</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
