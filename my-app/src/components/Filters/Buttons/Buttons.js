import React, { Component } from "react";
import "./Buttons.css";

class Buttons extends Component {
  render() {
    return (
      <div>
        <span>Filter by </span>
        <input
          type="button"
          className="button-filter"
          value="word length"
        ></input>
        <input
          type="button"
          className="button-filter"
          value="substring"
        ></input>
      </div>
    );
  }
}

export default Buttons;
