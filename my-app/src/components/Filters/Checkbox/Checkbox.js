import React, { Component } from "react";
import "./Checkbox.css";

class Checkbox extends Component {
  render() {
    return (
      <label className="checkbox-block">
        Register:
        <input type="checkbox" className="checkbox-register"></input>
      </label>
    );
  }
}

export default Checkbox;
