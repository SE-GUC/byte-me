import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditVacancy from "./EditVacancy";
import ViewVacancy from "./ViewVacancyMember";
import SearchendDate from "./SearchEndDateMember";
import Searchduration from "./SearchdurationMember";
import SearchstartDate from "./SearchStartDateMember";
import SearchCity from "./SearchCityMember";
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
                  <Link to={"/vacancy/member/viewAvailableVacancies"} className="nav-link">
                  Vacancies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/member/SearchCity"} className="nav-link">
                    Search city
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/member/SearchstartDate"} className="nav-link">
                    Search StartDate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/member/SearchendDate"} className="nav-link">
                    Search EndDate
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/member/Searchduration"} className="nav-link">
                    Search Duration
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            
            <Route path={"/vacancy/member/viewAvailableVacancies"} component={ViewVacancy} />
            <Route path={"/vacancy/member/SearchCity"} component={SearchCity} />
            <Route path={"/vacancy/member/SearchstartDate"} component={SearchstartDate} />
            <Route path={"/vacancy/member/SearchendDate"} component={SearchendDate} />
            <Route path={"/vacancy/member/Searchduration"} component={Searchduration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomeVacancyMember;