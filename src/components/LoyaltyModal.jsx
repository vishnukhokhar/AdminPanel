import React, { useState } from "react";

const Modal = ({ closeModal, onSubmit }) => {
  const [formState, setFormState] = useState({
    id: "",
    shippingTime: "",
    deduction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <label htmlFor="id"> ID</label>
            <input
              type="text"
              id="id"
              name="id"
              value={formState.id}
              onChange={handleChange}
              className="id"
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="value">Value</label>
            <input
              type="text"
              id="value"
              name="value"
              value={formState.value}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="merchantbtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
