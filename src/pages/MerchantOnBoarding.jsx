import { NavLink } from "react-router-dom";
import "../App.css";
function MerchantOnBoarding() {
  return (
    <>
      {/* <div className="merchantpages"> */}
      <div className="allbtn">
        <button className="merchantbtn">
          <NavLink to="/MerchantOnboarding/EditMerchantData">
            Store Details
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/MerchantOnboarding/MerchantTimeSetting">
            Store time settings
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/MerchantOnboarding/Commission">
            Commission Settings
          </NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/MerchantOnboarding/MTags">Tags Settings</NavLink>
        </button>
        <button className="merchantbtn">
          <NavLink to="/MerchantOnboarding/Mcategory">
            Category Settings
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default MerchantOnBoarding;
