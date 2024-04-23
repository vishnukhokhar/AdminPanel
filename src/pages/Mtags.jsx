import React from "react";
import "../App.css";

const MTags = () => {
  return (
    <>
      <form className="tags" action="">
        <label htmlFor="tags" className="tags-label">
          Select Tags
        </label>
        <br></br>
        <select className="tags-select" id="tags">
          <option value="" disabled selected>
            Select Tags
          </option>
          <option value="tag1">Tag 1</option>
          <option value="tag2">Tag 2</option>
          <option value="tag3">Tag 3</option>
        </select>
        <hr className="hr"></hr>
        <button className="btn">Save</button>
      </form>
    </>
  );
};

export default MTags;
