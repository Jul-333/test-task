import React from "react";
import Row from "./Row/Row";
import "./Table.css";

const Table = ({ data }) => {
  const renderTableBody = () =>
    data.map((element, index) => {
      return <Row key={index} index={index + 1} element={element} />;
    });

  return (
    <table className="table" align="left">
      <tbody>{renderTableBody()}</tbody>
    </table>
  );
};

export default Table;
