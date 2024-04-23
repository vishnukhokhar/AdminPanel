import React from "react";
import "../App.css";
const LoyaltyTables = ({ rows }) => {
  return (
    <div className="loyaltable">
      <table>
        <thead>
          <tr className="tr">
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LoyaltyTables;
