import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeVacancyPartner from "./HomeVacancyPartner"
import HomeVacancyMember from "./HomeVacancyMember";
import HomeVacancyCo from "./HomeVacancyCo";


class WhichEntity extends Component {
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
                  <Link to={"/vacancy/partner"} className="nav-link">
                    Partner
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/member"} className="nav-link">
                    Member
                  </Link>
                </li>
                

                <li className="nav-item">
                  <Link to={"/vacancy/coworking"} className="nav-link">
                    CoWorking
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path={"/vacancy/partner"} component={HomeVacancyPartner} />
            <Route path={"/vacancy/member"} component={HomeVacancyMember} />
            <Route path={"/vacancy/coworking"} component={HomeVacancyCo
            } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WhichEntity;
