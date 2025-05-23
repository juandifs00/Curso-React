import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewValue(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)} aria-label="form">
      <input
        type="text"
        placeholder="Buscat Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired,
};
