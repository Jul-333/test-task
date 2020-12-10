import React from "react";
import "./Checkbox.css";

const Checkbox = ({ onChangeInput, register }) => {
  return (
    <label className="checkbox-block">
      Register:
      <input
        type="checkbox"
        name="register"
        className="checkbox-register"
        checked={register}
        onChange={(event) => onChangeInput(event)}
      ></input>
      <div className="fake-checkbox"></div>
    </label>
  );
};

export default Checkbox;
