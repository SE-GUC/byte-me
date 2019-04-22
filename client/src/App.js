import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomeVacancy from "./components/HomeVacancy";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Lirten HUB
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/partner"} className="nav-link">
                    Partner
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/member"} className="nav-link">
                    Member
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy"} className="nav-link">
                    Vacancy
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/event"} className="nav-link">
                    Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/coworking"} className="nav-link">
                    CoWorking
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div>
            {/* Vacancy */}
            {/* <VacancyPost/> */}
            {/* <ViewVacancy/> */}
          </div>

          <Switch>
            <Route path={"/vacancy"} component={HomeVacancy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
