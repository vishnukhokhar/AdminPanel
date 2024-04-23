import React from "react";
import { useState } from "react";
// import Modal from "../components/LoyaltyModal";
// import ShippingTables from "../Components/LoyaltyTables";
import Modal from "../components/LoyaltyModal";
import LoyaltyTables from "../components/LoyaltyTables";
import "../App.css";
const LoyaltyProgram = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    { id: "1", name: "setting 1", value: "$10" },
    { id: "2", name: "setting 2", value: "$10" },
    { id: "3", name: "setting 3", value: "$10" },
  ]);

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };

  const handleClearAll = () => {
    setRows([]);
  };

  return (
    <div className="main">
      <div className="loyal">
        <button onClick={() => setModalOpen(true)}>ADD SHIPPING CHARGES</button>
        <button onClick={handleClearAll}>CLEAR ALL</button>
        <LoyaltyTables rows={rows} />
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
            }}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default LoyaltyProgram;
