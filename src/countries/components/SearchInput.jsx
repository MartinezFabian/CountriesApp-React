import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchInput.module.css';

export const SearchInput = () => {
  const navigate = useNavigate();

  const [inputText, setInputText] = useState('');

  const onChangeInput = (e) => {
    setInputText(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const textSearched = inputText.trim().toLowerCase();

    if (textSearched.length < 2) return;

    navigate(`?q=${textSearched}`);
  };

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      <div className={styles.form__container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#1d1d1d"
          className={styles.form__icon}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          onChange={onChangeInput}
          value={inputText}
          placeholder="Search"
          autoComplete="off"
          className={styles.form__input}
        />
      </div>
    </form>
  );
};
