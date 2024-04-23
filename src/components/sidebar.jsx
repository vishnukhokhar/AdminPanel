import React from "react";
import { BsCart3, BsFillGearFill } from "react-icons/bs";
import { GiIndianPalace } from "react-icons/gi";
import { BiSolidCastle } from "react-icons/bi";
import { FaShoppingCart, FaClock } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { FaChartPie } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const sidebarItems = [
    {
      icon: <FaChartPie className="icon" />,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: <GiIndianPalace className="icon" />,
      text: "Merchants",
      link: "/merchants",
    },
    // {
    //   icon: <MdPeople className="icon" />,

    //   text: "MerchantList",
    //   link: "/MerchantList",
    // },
    {
      icon: <FaChartPie className="icon" />,
      text: "MerchantOnboarding",
      link: "/MerchantOnboarding",
    },
    {
      icon: <SlCalender className="icon" />,
      text: "SwitchMerchants",
      link: "/SwitchMerchants",
    },
    {
      icon: <BiSolidCastle className="icon" />,
      text: "Brand Orders",
      link: "/brandorders",
    },
    {
      icon: <FaShoppingCart className="icon" />,
      text: "Brand Categories",
      link: "/brandcategories",
    },
    {
      icon: <MdPeople className="icon" />,
      text: "Brand Customers",
      link: "/brandcustomers",
    },
    {
      icon: <FaClock className="icon" />,
      text: "Operating Zone",
      link: "/operatingzone",
    },
    {
      icon: <RxSpeakerLoud className="icon" />,
      text: "Marketing and Promotions",
      link: "/marketing",
    },
    {
      icon: <BsFillGearFill className="icon" />,
      text: "Loyalty Program",
      link: "/loyaltyprogram",
    },
    {
      icon: <SlCalender className="icon" />,
      text: "Shipping and Runners",
      link: "/shipping",
    },
    {
      icon: <FaShoppingCart className="icon" />,
      text: "Runner Payout",
      link: "/runnerpayout",
    },
    {
      icon: <SlCalender className="icon" />,
      text: "Enquiries",
      link: "/enquiries",
    },
  ];

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> ADMIN
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        {sidebarItems.map((item, index) => (
          <li key={index} className="sidebar-list-item">
            <NavLink to={item.link} activeClassName="active">
              {item.icon} {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
