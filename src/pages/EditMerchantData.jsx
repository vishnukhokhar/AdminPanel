import React from "react";
import "../App.css";

function EditMerchantData() {
  return (
    <div className="mainEditMer">
      <form>
        <div className="merchantedit">
          <div className="info">
            <h3 style={{ color: "#83bc2d" }}>Merchants Information</h3>
            {renderInput("Full Name", "fullname", "text", "Full name")}
            {renderInput("Email", "email", "email", "Email")}
            {renderInput(
              "Phone Number",
              "contactNumber",
              "tel",
              "Phone Number"
            )}
          </div>
        </div>

        <br />
        <br />
        <div className="merchantedit">
          <h3 style={{ color: "#83bc2d" }}>Store Information</h3>
          {renderInput("Store Name", "storeName", "text", "Store name")}
          {renderInput("Contact Email", "contactemail", "email", "Email")}
          {renderInput(
            "Contact Number",
            "contactNumber",
            "tel",
            "Contact Number"
          )}
          {renderInput(
            "Contact Person",
            "contactperson",
            "text",
            "Contact Person"
          )}
          {renderInput("Address", "address", "text", "Address")}
          {renderInput("Country", "country", "text", "Country")}
          {renderInput("State", "state", "text", "State")}
          {renderInput("City", "city", "text", "City")}
          {renderInput("Timezone", "timeZone", "text", "Timezone")}
          {renderInput("Zip Code", "zipCode", "text", "Zip Code")}
          {renderInput(
            "Operating Zone",
            "operatingZone",
            "text",
            "Operating Zone"
          )}
          {renderInput(
            "Preparation Time/Delivered Time",
            "prepTime",
            "text",
            "Preparation Time/Delivered Time"
          )}
          {renderInput("Ing", "Ing", "text", "Ing")}
          {renderInput("Lat", "lat", "text", "Lat")}
          {renderInput("Rating", "rating", "text", "Rating")}
          <div>
            <label htmlFor="operationType">Operation Type *</label>
            <div>
              <input type="radio" id="all" name="operationType" />
              <label htmlFor="all" className="radio">
                All
              </label>
              <input type="radio" id="pickup" name="operationType" />
              <label htmlFor="pickup" className="radio">
                Pickup
              </label>
              <input type="radio" id="delivery" name="operationType" />
              <label htmlFor="delivery" className="radio">
                Delivery
              </label>
            </div>
          </div>
          {renderInput("About Us", "aboutUs", "textarea", "About Us")}
          {renderInput(
            "Upload Banner *",
            "uploadBanner",
            "file",
            "Upload Banner",
            "file"
          )}
        </div>
      </form>
    </div>
  );
}

function renderInput(labelText, id, type, placeholder, className) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      {type === "textarea" ? (
        <textarea id={id} placeholder={placeholder}></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={className}
        />
      )}
    </div>
  );
}

export default EditMerchantData;
