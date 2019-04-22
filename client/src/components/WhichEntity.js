import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeEventPartner from "./HomeEventPartner"
import HomeEventMember from "./HomeEventMember"
import HomeEventCo from "./HomeEventCo"



class WhichEntity extends Component {
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
                  <Link to={"/event/partner"} className="nav-link">
                    Partner Event
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/event/member"} className="nav-link">
                    Member Event
                  </Link>
                </li>
                

                <li className="nav-item">
                  <Link to={"/event/coworking"} className="nav-link">
                    CoWorking Event
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route path={"/event/partner"} component={HomeEventPartner} />
            <Route path={"/event/member"} component={HomeEventMember} />
             <Route path={"/event/coworking"} component={HomeEventCo }/>
             
          </Switch>
        </div>
      </Router>
    );
  }
}

export default WhichEntity;
