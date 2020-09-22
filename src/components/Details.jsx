import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class Details extends Component {
  state = {
    countryData: {},
  };
  componentDidMount() {
    fetch(
      `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ countryData: res }))
      .catch((error) => alert("Error! Check your internet connection"));
  }
  handleArray = (curr) => {
    if (curr) {
      return curr.map((cur) => <span key={cur.name}>{cur.name}, </span>);
    } else {
      return "loading";
    }
  };

  render() {
    const {
      name,
      nativeName,
      flag,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = this.state.countryData;
    return (
      <div className={`details ${this.props.modeClass()}`}>
        <Navbar
          handleModeChange={this.props.handleModeChange}
          iconClass={this.props.iconClass}
        />
        <section>
          <div className="container-fluid pl-md-3">
            <div className="row py-3">
              <div className="col-md-5 mx-4">
                <Link to="/">
                  <button className="btn bg-navbar shadow">
                    <i className="fas fa-long-arrow-alt-left"></i> Back
                  </button>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 col-lg-4 ml-4">
                <img
                  src={flag}
                  alt={`Flag of ${name}`}
                  className="img-fluid shadow"
                />
              </div>
              <div className="col-lg-6 mx-auto">
                <h3 className="my-3">
                  <strong>{name}</strong>
                </h3>
                <div className="d-md-flex">
                  <div className="col-md-5">
                    <p>
                      <strong> Native Name : </strong>
                      {nativeName}
                    </p>
                    <p>
                      <strong> Population: </strong>
                      {population
                        ? population.toLocaleString("en")
                        : population}
                    </p>
                    <p>
                      <strong> Region :</strong> {region}{" "}
                    </p>
                    <p>
                      <strong> Sub Region:</strong> {subregion}{" "}
                    </p>
                    <p>
                      <strong> Capital:</strong> {capital}
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <strong> Top Level Domain:</strong> {topLevelDomain}{" "}
                    </p>
                    <p>
                      <strong> Currencies: </strong>
                      {this.handleArray(currencies)}
                    </p>
                    <p>
                      <strong> Languages: </strong>
                      {this.handleArray(languages)}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <p>
                    <strong>Border Countries: </strong>
                  </p>
                  <div className="row">
                    {borders && borders.length ? (
                      borders.map((border) => (
                        <div
                          key={border}
                          className="col py-2 px-4 m-1 rounded text-center shadow"
                        >
                          {border}
                        </div>
                      ))
                    ) : (
                      <p>None</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Details;
