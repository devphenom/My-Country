import React, { Component } from "react";
import Navbar from "./Navbar";
import Country from "./Country";

class Home extends Component {
  state = {
    fetchedAPI: this.props.fetchedAPI,
    countryName: "",
    region: "",
    visible: 20,
  };

  renderAllCountries = (countriesArray) =>
    countriesArray
      .filter(
        (country) =>
          `${country.region}`
            .toUpperCase()
            .indexOf(this.state.region.toUpperCase()) >= 0
      )
      .filter(
        (country) =>
          `${country.name}`
            .toUpperCase()
            .indexOf(this.state.countryName.toUpperCase()) >= 0
      )
      .slice(0, this.state.visible)
      .map((country) => <Country {...country} key={country.name} />);

  handleInputChange = (event) =>
    this.setState({ countryName: event.target.value });
  handleRegionChange = (event) => this.setState({ region: event.target.value });

  loadMore = (prev) =>
    this.setState((prev) => {
      return { visible: prev.visible + 4 };
    });
  render() {
    return (
      <div className={`${this.props.modeClass()}`}>
        <Navbar
          handleModeChange={this.props.handleModeChange}
          iconClass={this.props.iconClass}
        />
        <section className="py-3">
          <div className="container-fluid px-md-5">
            <div className="row">
              <div className="col-md-4">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="handleInput"
                    aria-describedby="basic-addon"
                    value={this.state.countryName}
                    placeholder="Search for a country..."
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4 ml-auto">
                <select
                  className="form-control"
                  id="regionSelect"
                  placeholder="filter by region"
                  value={this.state.region}
                  onChange={this.handleRegionChange}
                >
                  <option value="">Filter by Region</option>
                  <option value="africa">Africa</option>
                  <option value="america">America</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="oceania">Oceania</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <section className="py-3">
          <div className="container-fluid px-5">
            <div className="row">
              {this.renderAllCountries(this.state.fetchedAPI)}
            </div>
            <div className="row py-5 mx-auto">
              <div className="col-md-6 mx-auto text-center">
                {this.state.visible < this.state.fetchedAPI.length && (
                  <button
                    onClick={this.loadMore}
                    type="button"
                    className="btn btn-primary btn-md-lg px-5 mx-auto"
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
