import React from "react";

const ShippingTables = ({ rows }) => {
  return (
    <div className="shiping">
      <table>
        <thead>
          <tr className="tr">
            <th>ID</th>
            <th>Shipping Time</th>
            <th>Deduction Amount</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.id}</td>
                <td>{row.shippingTime}</td>
                <td>{row.deduction}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShippingTables;
