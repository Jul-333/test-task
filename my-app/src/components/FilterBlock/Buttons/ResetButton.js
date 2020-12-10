import React from "react";

const ResetButton = ({ onClickReset }) => {
  return (
    <button type="button" className="button-reset" onClick={() => onClickReset()}>
      RESET
    </button>
  );
};

export default ResetButton;
