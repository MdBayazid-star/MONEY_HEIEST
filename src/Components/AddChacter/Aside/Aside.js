import React from "react";
import "./Aside.css";

const Aside = (props) => {
  const { img, name, salary } = props.cart;
  return (
    <div className=" mt-4">
      <div className="d-flex Aside shadow align-items-center justify-content-between rounded pt-5 pb-2 border-top border-danger border-3">
        <img src={img} alt="" />
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="d-flex justify-content-center">
            Name: <span className="text-danger">{name}</span>
            <i className="fas fa-check bg-danger"></i>
          </h4>
          <p>
            <span className="text-danger">Salary:</span>
            {salary}
          </p>
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
