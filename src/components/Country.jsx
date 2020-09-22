import React from "react";
import { Link } from "react-router-dom";

const Country = (props) => (
  <div className="col-md-4 col-lg-3 my-3">
    <Link to={`/details/${props.alpha3Code.toLowerCase()}`}>
      <div className="card shadow border-0">
        <img
          src={props.flag}
          className="card-img-top img-fluid"
          alt="..."
          style={{ height: "140px" }}
        />
        <div className="card-body">
          <h5 className="card-title font-weight-bold">{props.name}</h5>
          <div className="country-p mt-4">
            <p className="card-text">
              <strong>Population: </strong>
              {props.population.toLocaleString("en")}
            </p>
            <p className="card-text">
              <strong>Region: </strong>
              {props.region}
            </p>
            <p className="card-text">
              <strong>Capital: </strong>
              {props.capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Country;
