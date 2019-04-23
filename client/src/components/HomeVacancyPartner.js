import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditVacancy from "./EditVacancy";
import VacancyPost from "./VacancyPost";
import ViewVacancy from "./ViewVacancy";
import SearchendDate from "./SearchendDate";
import Searchduration from "./Searchduration";
import SearchstartDate from "./SearchstartDate";
import SearchCity from "./SearchCity";
class HomeVacancyPartner extends Component {
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
                  <Link to={"/vacancy/partner/post"} className="nav-link">
                    Post new Vacancy
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/partner/viewAvailableVacancies"} className="nav-link">
                    Vacancies
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/partner/SearchCity"} className="nav-link">
                    Search city
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/partner/SearchstartDate"} className="nav-link">
                    Search StartDate
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/vacancy/partner/SearchendDate"} className="nav-link">
                    Search EndDate
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/vacancy/partner/Searchduration"} className="nav-link">
                    Search Duration
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/vacancy/partner/post" component={VacancyPost} />
            <Route path={"/vacancy/partner/update/:id"} component={EditVacancy} />
            <Route path={"/vacancy/partner/viewAvailableVacancies"} component={ViewVacancy} />
            <Route path={"/vacancy/partner/SearchCity"} component={SearchCity} />
            <Route path={"/vacancy/partner/SearchstartDate"} component={SearchstartDate} />
            <Route path={"/vacancy/partner/SearchendDate"} component={SearchendDate} />
            <Route path={"/vacancy/partner/Searchduration"} component={Searchduration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomeVacancyPartner;