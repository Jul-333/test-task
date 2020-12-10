import React from "react";
import "./SearchInput.css";

const SearchInput = ({ onChangeInput, value }) => {
  return (
    <input
      type="text"
      className="input-search"
      name="value"
      onChange={(event) => onChangeInput(event)}
      value={value}
      autoFocus
    ></input>
  );
};

export default SearchInput;
