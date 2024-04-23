import { useState } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Merchants from "./pages/Merchants";
import BrandOrders from "./pages/BrandOrders";
import BrandCategories from "./pages/BrandCategories";
import BrandCustomers from "./pages/BrandCustomers";
import MerchantOnBoarding from "./pages/MerchantOnBoarding";
import EditMerchantData from "./pages/EditMerchantData";
import MerchantTimeSetting from "./pages/MerchantTimeSetting";
import Commission from "./pages/Commission";
import MTags from "./pages/Mtags";
import Mcategory from "./pages/merchantCategorey";
import SwitchMerchants from "./pages/SwitchMerchants";
import ShippingCharges from "./pages/ShippingCharges";
import OperatingZone from "./pages/OperatingZone";
import LoyaltyProgram from "./pages/LoyaltyProgram";
import RunnerPayout from "./pages/RunnerPayout";
import RefernEarn from "./pages/ReferandEarn";

import "./App.css";
import PartnerEnquiries from "./pages/PartnerEnquiries";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merchants" element={<Merchants />} />
          {/* <Route path="/merchants" element={<Merchants />} /> */}
          {/* <Route path="/merchantlist" element={<Merchantslist />} /> */}
          <Route
            path="/MerchantOnboarding"
            element={<MerchantOnBoarding />}
          ></Route>
          <Route
            path="/MerchantOnboarding/EditMerchantData"
            element={
              <>
                <MerchantOnBoarding />
                <EditMerchantData />
              </>
            }
          ></Route>
          <Route
            path="/MerchantOnboarding/MerchantTimeSetting"
            element={
              <>
                <MerchantOnBoarding />
                <MerchantTimeSetting />
              </>
            }
          ></Route>
          <Route
            path="/MerchantOnboarding/Commission"
            element={
              <>
                <MerchantOnBoarding />
                <Commission />
              </>
            }
          ></Route>
          <Route
            path="/MerchantOnboarding/MTags"
            element={
              <>
                <MerchantOnBoarding />
                <MTags />
              </>
            }
          ></Route>
          <Route
            path="/MerchantOnboarding/Mcategory"
            element={
              <>
                <MerchantOnBoarding />
                <Mcategory />
              </>
            }
          ></Route>

          <Route path="/SwitchMerchants" element={<SwitchMerchants />}>
            {" "}
          </Route>

          <Route path="/brandorders" element={<BrandOrders />} />
          <Route path="/brandcategories" element={<BrandCategories />} />
          <Route path="/brandcustomers" element={<BrandCustomers />} />
          <Route path="/brandcustomers" element={<BrandCustomers />} />
          <Route path="/operatingzone" element={<OperatingZone />} />
          <Route path="/marketing" element={<RefernEarn />} />
          <Route path="/loyaltyprogram" element={<LoyaltyProgram />} />
          <Route path="/shipping" element={<ShippingCharges />} />
          <Route path="/runnerpayout" element={<RunnerPayout />} />
          <Route path="/enquiries" element={<PartnerEnquiries />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import axios from "axios";
// import { useState, useEffect } from "react";

// const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

// const FetchAxiosData = () => {
//   // const [users, setUsers] = useState([]);

//   // useEffect(() => {
//   //   axios
//   //     .get(url)
//   //     .then((res) => {
//   //       console.log(res.data);
//   //       setUsers(res.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching data:", error);
//   //     });
//   // }, []);

//   const data = { naam: "", city: "" };
//   const [inputdata, setdata] = useState(data);
//   const handleData = (e) => {
//     setdata({ ...inputdata, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault;
//     axios
//       .post("https://jsonplaceholder.typicode.com/posts/1/comments", inputdata)
//       .then((resp) => {
//         console.log(resp);
//       });
//   };
//   return (
//     <>
//       <div>
//         <h1>check krlo chlda ke nhi</h1>
//         <form>
//           <label htmlFor="branch">Name</label>
//           <input
//             type="text"
//             name="branch"
//             value={inputdata.name}
//             onChange={handleData}
//           ></input>
//           <br></br>
//           <label htmlFor="branch">City</label>
//           <input
//             type="text"
//             name="branch"
//             value={inputdata.name}
//             onChange={handleData}
//           ></input>
//           <br></br>
//           <button onClick={handleSubmit}>submit</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FetchAxiosData;
