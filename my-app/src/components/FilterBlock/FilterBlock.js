import React from "react";
import FilterButtons from "./Buttons/FilterButtons";
import ResetButton from "./Buttons/ResetButton";
import Checkbox from "./Checkbox/Checkbox";
import SearchInput from "./Input/SearchInput";
import "./FilterBlock.css";

const FilterBlock = ({
  value,
  register,
  onClickFilter,
  onChangeInput,
  onClickReset,
}) => {
  return (
    <div className="filters-block">
      <FilterButtons value={value} onClickFilter={onClickFilter} />
      <Checkbox register={register} onChangeInput={onChangeInput} />
      <SearchInput value={value} onChangeInput={onChangeInput} />
      <ResetButton onClickReset={onClickReset} />
    </div>
  );
};

export default FilterBlock;
