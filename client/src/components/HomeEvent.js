import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventPost from'./EventPost';
import Index from './Index';
import Edit from './Edit';
import Search from './Search';

class HomeEvent extends Component {
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
                    Post new Event
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/showevents"} className="nav-link">
                    Events
                  </Link>
                </li>
                
               
                 <li className="nav-item">

                  <Link to={'/search'} className="nav-link">Search by location</Link>

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

            <Route path='/event/update/:id' component={ Edit } />
           <Route path='/showevents' component={ Index } />
           <Route path='/post' component={ EventPost} />
           <Route path='/search' component={ Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default HomeEvent;
