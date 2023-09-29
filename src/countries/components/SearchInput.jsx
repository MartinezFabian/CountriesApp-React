import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        onChange={onChangeInput}
        value={inputText}
        placeholder="Type the name of the country you are looking for"
        autoComplete="off"
      />
    </form>
  );
};
