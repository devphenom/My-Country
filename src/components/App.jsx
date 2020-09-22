import React, { Component } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import Details from "./Details";
import NoMatch from "./NoMatch";

export default class App extends Component {
  state = {
    fetchedAPI: [],
    darkMode: false,
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((res) => this.setState({ fetchedAPI: res || [] }))
      .catch((error) => alert("error! failed to fetch data"));
  }
  handleModeChange = (event) =>
    this.setState({ darkMode: !this.state.darkMode });
  modeClass = () => (this.state.darkMode ? "dark-mode" : "light-mode");
  iconClass = () =>
    this.state.darkMode ? (
      <span>
        <i className="far fa-sun"></i>
        <span className="d-none d-md-inline-block pl-2">Light Mode</span>
      </span>
    ) : (
      <span>
        <i className="far fa-moon"></i>
        <span className="d-none d-md-inline-block pl-2">Dark Mode</span>
      </span>
    );
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <Home
                  fetchedAPI={this.state.fetchedAPI}
                  modeClass={this.modeClass}
                  handleModeChange={this.handleModeChange}
                  iconClass={this.iconClass}
                  {...props}
                />
              )}
            />
            <Route
              exact
              path="/details/:id"
              component={(props) => (
                <Details
                  modeClass={this.modeClass}
                  handleModeChange={this.handleModeChange}
                  iconClass={this.iconClass}
                  {...props}
                />
              )}
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}
