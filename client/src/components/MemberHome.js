import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMember from'./CreateMember';
import UpdateMember from './UpdateMember';
import ViewRecommended from './ViewRecommended';
// import Search from './Search';

class MemberHome extends Component {
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
                    Create New Member
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/member/update/:id"} className="nav-link">
                    Update Member Profile
                  </Link>
                </li>
                
               
                 <li className="nav-item">

                  <Link to={'/member/viewRecommendedVacancies/:id'} className="nav-link">View Recommended Vacancies</Link>

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

            <Route path='/member/viewRecommendedVacancies/:id' component={ ViewRecommended } />
           <Route path='/member/update/:id' component={ UpdateMember } />
           <Route path='/post' component={ CreateMember} />
           {/* <Route path='/search' component={ Search} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MemberHome;