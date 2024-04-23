import React from "react";
// import data from "../data/data";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import Tables from "./table";
const Home = () => {
  const data = [
    {
      id: 1,
      title: "Total Orders",
      icon: <BsFillArchiveFill className="card_icon" />,
      count: 19,
    },
    {
      id: 2,
      title: "Delivered Orders",
      icon: <BsFillGrid3X3GapFill className="card_icon" />,
      count: 13,
    },
    {
      id: 3,
      title: "Revenue",
      icon: <BsPeopleFill className="card_icon" />,
      count: 9655.56,
    },
    {
      id: 4,
      title: "My Earnings",
      icon: <BsFillGrid3X3GapFill className="card_icon" />,
      count: 81.03,
    },
    {
      id: 5,
      title: "Total Customers",
      icon: <BsFillBellFill className="card_icon" />,
      count: 8,
    },
    {
      id: 6,
      title: "Total Coupons",
      icon: <BsFillArchiveFill className="card_icon" />,
      count: 2,
    },
    {
      id: 6,
      title: "Total Coupons",
      icon: <BsFillArchiveFill className="card_icon" />,
      count: 2,
    },
    {
      id: 6,
      title: "Total Coupons",
      icon: <BsFillArchiveFill className="card_icon" />,
      count: 2,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <h3>{item.title}</h3>
              {item.icon}
            </div>
            <h1>{item.count}</h1>
          </div>
        ))}
      </div>

      <div className="tablecss">
        <Tables></Tables>
        <Tables></Tables>
        <Tables></Tables>
        {/* <Tables></Tables> */}
      </div>
    </main>
  );
};

export default Home;

// import React from "react";

// const Home = () => {
//   return <div>Home</div>;
// };

// export default Home;
