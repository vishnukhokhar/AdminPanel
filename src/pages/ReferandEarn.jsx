import React from "react";
import "../App.css";
const RefernEarn = () => {
  const handleShare = () => {
    alert("Share website link functionality");
  };
  const hanldeMore = () => {
    alert("More on website functionality");
  };
  return (
    <div className="main">
      <div className="refer-box">
        <div className="refer">
          <h1>Refer and Earn</h1>
          {/* <div className='iconse'>{}{}{}</div> */}
          <button onClick={handleShare}>Share Website</button>
          <button onClick={hanldeMore}>More</button>
        </div>
      </div>
    </div>
  );
};

export default RefernEarn;
