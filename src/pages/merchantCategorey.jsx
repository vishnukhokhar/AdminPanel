import React from "react";
import "../App.css";
const Mcategory = () => {
  return (
    <>
      <form className="category" action="">
        <label htmlFor="category" className="category-label">
          Set Category
        </label>
        <br></br>

        <select className="category-select" id="category">
          <option value="" disabled selected>
            Select Category
          </option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
        <hr className="hr"></hr>
        <button className="btn">Save</button>
      </form>
    </>
  );
};

export default Mcategory;
