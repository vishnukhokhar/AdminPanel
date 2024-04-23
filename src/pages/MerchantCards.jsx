import React from "react";
import { merchantCards, title } from "../data/data";
import { FaGlassCheers } from "react-icons/fa";

import "../App.css";

const MerchantCards = ({ selectedShop }) => {
  const filteredCards = merchantCards.filter(
    (card) => card.val === selectedShop
  );
  return (
    <>
      {filteredCards.map((card) => (
        <div className="merchant-cards" key={card.id}>
          {title.map((prop) => {
            const { id, header, value } = prop;
            return (
              <div className="merchant-card" key={id}>
                <div className="card-icon">
                  {/* {icon} */}
                  <FaGlassCheers className="card-icon" />
                </div>
                <div className="card-content">
                  <h2>{header}</h2>
                  <h3>{value}</h3>
                  <h4>27% last week</h4>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default MerchantCards;
