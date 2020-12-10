import React from "react";
import "./SearchInput.css";

const SearchInput = ({ onChangeInput, value }) => {
  return (
    <input
      type="text"
      className="input-search"
      name="value"
      placeholder="Enter a word or number..."
      onChange={(event) => onChangeInput(event)}
      value={value}
      autoFocus
    ></input>
  );
};

export default SearchInput;
