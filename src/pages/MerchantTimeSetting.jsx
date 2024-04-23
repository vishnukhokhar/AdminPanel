import { useState } from "react";

function MerchantTimeSetting() {
  const generateOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      const formattedHour = hour.toString().padStart(2, "0");
      options.push(
        <option key={formattedHour} value={formattedHour}>
          {formattedHour}:00
        </option>
      );
    }
    return options;
  };

  const [toggleOn, setToggleOn] = useState(false);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="timesetting">
      <div className="div">
        <p>Is Your store 24X7 open to take orders ?*</p>

        <button className="on" onClick={() => setToggleOn(!toggleOn)}>
          {toggleOn ? "On" : "Off"}
        </button>
      </div>
      {!toggleOn ? (
        <form className="border">
          <label>Open Hours</label>
          <select>{generateOptions()}</select>
          <label>to</label>
          <select>{generateOptions()}</select>
          <br />
          <br />
          {days.map((day) => (
            <div key={day} className="day">
              <input type="checkbox" id={day} value={day} />
              <label htmlFor={day}>{day}</label>
            </div>
          ))}
          <hr className="hr"></hr>
          <button>Save</button>
          <h4>App displays messages during non operating hours*</h4>
          <h4 className="h4">Store will open from 9:30am to 6:00pm</h4>
        </form>
      ) : (
        <button className="endsave">Save</button>
      )}
    </div>
  );
}

export default MerchantTimeSetting;
