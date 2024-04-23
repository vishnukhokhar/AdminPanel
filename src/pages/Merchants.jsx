import { useState } from "react";
import { pageData } from "../data/data";
import { phaseData } from "../data/data";
import { merchantTableData } from "../data/data";
import { BsFillPencilFill } from "react-icons/bs";

function Merchantlist() {
  const [data, setData] = useState(merchantTableData);
  const [filterCriteria, setFilterCriteria] = useState("");

  return (
    <>
      <div>
        <form action="" className="merchantList">
          <select name="Page" id="page">
            {pageData.map((props) => {
              const { value, title } = props;
              return <option value={value}>{title}</option>;
            })}
          </select>
          <div className="exportData">
            <a href="#">Export Data</a>
          </div>
          <select name="Phase" id="phase">
            <option value="" disabled selected>
              ---Select timezone---
            </option>
            {phaseData.map((props) => {
              const { value, title } = props;
              return <option value={value}>{title}</option>;
            })}
          </select>
          <input
            type="text"
            placeholder="name email or number"
            value={filterCriteria}
            // onChange={handleChange}
          />
          <button className="go">
            <b>GO</b>
          </button>
          <button className="reset">
            <b>Reset</b>
          </button>
        </form>
        <table className="merchanttable">
          <tr>
            <th>Store</th>
            <th>Operating Zone</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Location</th>
            <th>Create At</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {data.map((props) => {
            const {
              id,
              store,
              operatingZone,
              email,
              contactNumber,
              location,
              createAt,
              status,
              Action,
            } = props;
            return (
              <tr key={id}>
                <td>{store}</td>
                <td>{operatingZone}</td>
                <td>{email}</td>
                <td>{contactNumber}</td>
                <td>{location}</td>
                <td>{createAt}</td>
                <td>{status}</td>
                <td>
                  <BsFillPencilFill className="edit-btn" />
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default Merchantlist;
