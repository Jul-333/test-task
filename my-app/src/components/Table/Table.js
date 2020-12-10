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
      <thead align="center">
        <tr className="tr" align="center">
          <th colSpan="2"> DATA OUTPUT </th>
        </tr>
      </thead>
      <tbody>{renderTableBody()}</tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default Table;
