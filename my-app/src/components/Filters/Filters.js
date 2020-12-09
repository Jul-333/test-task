import React, { Component } from "react";
import Buttons from "./Buttons/Buttons";
import Checkbox from "./Checkbox/Checkbox";
import "./Filters.css";
import SearchInput from "./Input/SearchInput";

class Filters extends Component {
  render() {
    return (
      <div className="filters-block">
        <Buttons />
        <SearchInput />
        <Checkbox />
      </div>
    );
  }
}

export default Filters;
