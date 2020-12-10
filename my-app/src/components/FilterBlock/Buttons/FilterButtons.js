import React from "react";
import buttonAvailability from "./buttonAvailability";
import "./Buttons.css";

const FilterButtons = ({ onClickFilter, value }) => {
  const disabledWordLength = buttonAvailability(value, "word-length");
  const disabledSubstring = buttonAvailability(value, "substring");

  return (
    <div>
      <span>Filter by </span>
      <button
        type="button"
        className="button-filter"
        data-name="word-length"
        disabled={disabledWordLength}
        onClick={(event) => onClickFilter(event)}
      >
        word length
      </button>
      <button
        type="button"
        className="button-filter"
        data-name="substring"
        disabled={disabledSubstring}
        onClick={(event) => onClickFilter(event)}
      >
        substring
      </button>
    </div>
  );
};

export default FilterButtons;
