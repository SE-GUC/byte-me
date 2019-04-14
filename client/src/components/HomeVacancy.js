import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import EditVacancy from './EditVacancy';
import VacancyPost from './VacancyPost';
import ViewVacancy from './ViewVacancy';
import SearchendDate from './SearchendDate';
import Searchduration from './Searchduration';

class HomeVacancy extends Component {
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
                  <Link to={"/post"} className="nav-link">
                    Post new Vacancy
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/viewAvailableVacancies"} className="nav-link">
                    Vacancies
                  </Link>
                </li>
                
               
                <li className="nav-item">
                      <Link to={'/SearchendDate'} className="nav-link">Search EndDate</Link>

                </li>
               
                <li className="nav-item">

                  <Link to={'/Searchduration'} className="nav-link">Search Duration</Link>

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
            {/* <Route exact path='/create/:id' component={ EventPost } /> */}

            {/* <Route path='/update/:id' component={ Edit } /> */}

            <Route exact path="/post" component={VacancyPost} />
            <Route path={"/vacancy/update/:id"} component={EditVacancy} />
            <Route path={"/viewAvailableVacancies"} component={ViewVacancy} />
           <Route path={'/SearchendDate'} component={SearchendDate} />
            <Route path={'/Searchduration'} component={Searchduration} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomeVacancy;
