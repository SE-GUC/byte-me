import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Cocreate from './Cocreate';
import Coupdate from './Coupdate';
import searchbyname from './searchbyname';

class CoHome extends Component {
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
                  <Link to={"/Cocreate"} className="nav-link">
                    Post new Coworking
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/Coupdate"} className="nav-link">
                    UpdateCoworking
                  </Link>
                </li>
                
               
                 <li className="nav-item">

                  <Link to={'/searchbyname'} className="nav-link">Search by Name</Link>

                </li>

              

              </ul>

            </div>
          </nav>

          <div>
            {/* Coworking */}
            {/* <Cocreate/> */}
            {/* <Coupdate/> */}
            
          </div>

          <Switch>
            {/* <Route exact path='/create/:id' component={ Cocreate } /> */}

            {/* <Route path='/update' component={ Coupdate } /> */}

            <Route exact path="/Cocreate" component={Cocreate} />
            <Route path={"/Coupdate"} component={Coupdate} />
            <Route path={"/searchbyname"} component={searchbyname} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CoHome;