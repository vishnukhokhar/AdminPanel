import React from "react";

function Commission() {
  return (
    <form className="commission">
      <label className="payouttype" htmlFor="payoutType">
        Payout Type
      </label>

      <div className="payout">
        <input type="radio" name="payoutType" id="fixed" />
        <label htmlFor="fixed">Fixed Amount per order</label>
        <input type="radio" name="payoutType" id="percentage" />
        <label htmlFor="percentage">Percentage</label>
      </div>
 

      <input className="enterval" type="text" placeholder="Enter Value" />

      <hr></hr>
      <button className="btn">Save</button>
    </form>
  );
}

export default Commission;
