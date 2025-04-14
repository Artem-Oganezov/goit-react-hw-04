import React, { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ handleChangeValue }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      toast("Введіть запит для пошуку");
      return;
    }
    handleChangeValue(value);
    setValue("");
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          value={value}
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
