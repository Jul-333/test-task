import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  render() {
    return (
      <table className="table" align="left">
        <thead align="center">
          <tr className="tr" align="center">
            <th colSpan="2"> DATA OUTPUT </th>
          </tr>
        </thead>

        <tbody>
          <tr className="tr" align="center">
            <td key="1" className="td">
              1
            </td>
            <td key="2" className="td">
              ikgjg
            </td>
          </tr>
          <tr className="tr" align="center">
            <td key="3" className="td">
              2
            </td>
            <td key="4" className="td">
              fg
            </td>
          </tr>
          <tr className="tr" align="center">
            <td key="53" className="td">
              3
            </td>
            <td key="6" className="td">
              fnkj
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    );
  }
}

export default Table;
