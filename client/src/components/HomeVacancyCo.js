import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewVacancy from "./ViewVacancyCo";
import SearchendDate from "./SearchendDateCo";
import Searchduration from "./SearchdurationCo";
import SearchstartDate from "./SearchstartDateCo";
import SearchCity from "./SearchCityCo";
class HomeVacancyMember extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/vacancy/coworking/viewAvailableVacancies"} className="nav-link">
                  Vacancies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/coworking/SearchCity"} className="nav-link">
                    Search city
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/coworking/SearchstartDate"} className="nav-link">
                    Search StartDate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/coworking/SearchendDate"} className="nav-link">
                    Search EndDate
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/coworking/Searchduration"} className="nav-link">
                    Search Duration
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            
            <Route path={"/vacancy/coworking/viewAvailableVacancies"} component={ViewVacancy} />
            <Route path={"/vacancy/coworking/SearchCity"} component={SearchCity} />
            <Route path={"/vacancy/coworking/SearchstartDate"} component={SearchstartDate} />
            <Route path={"/vacancy/coworking/SearchendDate"} component={SearchendDate} />
            <Route path={"/vacancy/coworking/Searchduration"} component={Searchduration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomeVacancyMember;