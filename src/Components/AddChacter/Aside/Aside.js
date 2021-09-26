import React from "react";
import "./Aside.css";

const Aside = (props) => {
  const { img, name, salary } = props.cart;
  return (
    <div>
      <div className="d-flex Aside shadow align-items-center justify-content-between rounded my-4">
        <img src={img} alt="" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4>
            Name: <span className="text-danger">{name}</span>
          </h4>
          <p>Salary:{salary}</p>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            props.handleRemoveFromCart(props.cart);
          }}
        >
          <i className="fas fa-times"></i>&nbsp;&nbsp; Remove
        </button>
      </div>
    </div>
  );
};

export default Aside;
