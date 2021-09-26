import React from "react";
import "./Charecter.css";

const Charecter = (props) => {
  const { img, name, info, salary, year, PlayedBy, FirstAppearance } =
    props.charecter;
  // console.log(props.charecter);
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card h-100 Card">
        <img src={img} className="card-img-top cardImg" alt="..." />
        <div className="card-body">
          <h3 className="card-title text-dark mb-4">Name:&nbsp; {name}</h3>
          <p className="card-text">
            <span className="fw-bolder text-danger">
              Charecter Info:&nbsp;&nbsp;
            </span>
            <span className="text-secondary">{info}</span>
          </p>
          <p className="card-text">
            <span className="fw-bolder text-danger">year: &nbsp;&nbsp;</span>
            {year}
          </p>
          <p className="card-text">
            <span className="fw-bolder text-danger">
              First Appearance:&nbsp;&nbsp;
            </span>
            {FirstAppearance}
          </p>
          <p>
            <span className="fw-bolder text-danger">
              PlayedBy:&nbsp;&nbsp;{" "}
            </span>
            {PlayedBy}
          </p>
          <p>
            <span className="fw-bolder text-danger">salary: </span>
            {salary}
          </p>
        </div>
        <div className="card-footer cartFooter">
          <div className="d-flex justify-content-evenly">
            <button
              className="btn btn-secondary BTN"
              onClick={() => props.addCharecter(props.charecter)}
            >
              <i className="fas fa-check"></i>&nbsp; ADD ME
            </button>
            <button className="btn btn-danger BTN">
              <i className="fas fa-heart"></i>&nbsp;&nbsp; Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charecter;
