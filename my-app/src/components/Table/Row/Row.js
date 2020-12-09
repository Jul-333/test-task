import React from "react";
import "./Row.css";

const Row = ({ index, element }) => {
  return (
    <tr className="tr" align="center" key={index}>
      <td className="td">{index}</td>
      <td className="td">{element}</td>
    </tr>
  );
};

export default Row;
