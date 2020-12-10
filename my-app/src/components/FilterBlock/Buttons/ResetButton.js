import React from "react";

const ResetButton = ({ onClickReset }) => {
  return (
    <button type="button" onClick={() => onClickReset()}>
      RESET
    </button>
  );
};

export default ResetButton;
