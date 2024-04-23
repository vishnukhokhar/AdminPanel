import { useState } from "react";
import MerchantCards from "./MerchantCards";

import shopimg from "../images/shop1.png";
import "../App.css";

const SwitchMerchants = () => {
  const [submitted, setSubmitted] = useState(false);
  const [shop, setShop] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (shop) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setShop(e.target.value);
  };

  return (
    <div className="switch-merchants-container">
      {submitted ? (
        <div>
          <MerchantCards selectedShop={shop} />
        </div>
      ) : (
        <div>
          <img src={shopimg} className="switch-merchants-image" alt="" />
          <form className="switch-merchants-form" onSubmit={handleSubmit}>
            <select
              value={shop}
              onChange={handleChange}
              className="switch-merchants-select"
            >
              <option value="" disabled>
                Select shops
              </option>
              <option value="HotelSriAshokBhavan">
                Hotel Sri Ashok Bhavan
              </option>
              <option value="NalandaGrill">Nalanda Grill</option>
              <option value="KFC">KFC</option>
            </select>
            <button type="submit" className="switch-merchants-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SwitchMerchants;
