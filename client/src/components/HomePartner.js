import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetPartner from "./GetPartner";
import DeletePartner from "./DeletePartner";
import UpdatePartner from "./UpdatePartner";

import SearchEmail from "./SearchEmail";
import SearchDescription from "./SearchDescription";
import SearchBoardMembers from "./SearchBoardMembers";
import SearchPartners from "./SearchPartners";
import SearchOrganizationName from "./SearchOarganizationName";
import SearchFieldOfWork from "./SearchFieldOfWork";

import PartnerViewVacancies from "./PartnerViewVacancies";
import PartnerViewEvents from "./PartnerViewEvents";

class HomePartner extends Component {
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
                    <Link to={"/viewMyProfile"} className="nav-link">
                      view my profile
                    </Link>
                  </li>
  
                  <li className="nav-item">
                    <Link to={"/deleteMyProfile"} className="nav-link">
                      delete my profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/updateMyProfile"} className="nav-link">
                      update my profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/partnerViewVacancies"} className="nav-link">
                      view my vacancies
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/partnerViewEvents"} className="nav-link">
                      view my events
                    </Link>
                  </li>
                  <li className="nav-item">
  
                  
         

                    <Link to={'/search1'} className="nav-link">Search by email</Link>
  
                  </li>
                  <li className="nav-item">
                    <Link to={"/search2"} className="nav-link">
                      Search by organization name
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/search3"} className="nav-link">
                      Search by description
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/search4"} className="nav-link">
                      Search by board members
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/search5"} className="nav-link">
                      Search by partners
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to={"/search6"} className="nav-link">
                      Search by field of work
                    </Link>
                  </li>
                  
                 
                 
                   
                </ul>
  
              </div>
            </nav>
  
           
            <Switch>
              
  
              <Route path='/viewMyProfile' component={ GetPartner } />
             <Route path='/deleteMyProfile' component={ DeletePartner } />
             <Route path='/updateMyProfile' component={ UpdatePartner} />
             <Route path='/viewMyVacancies' component={ PartnerViewVacancies} />
             <Route path='/viewMyEvents' component={ PartnerViewEvents} />
             

             <Route path='/search1' component={ SearchEmail} />
             <Route path='/search2' component={ SearchOrganizationName} />
             <Route path='/search3' component={ SearchDescription} />
             <Route path='/search4' component={ SearchBoardMembers} />
             <Route path='/search5' component={ SearchPartners} />
             <Route path='/search6' component={ SearchFieldOfWork} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
  
  export default HomePartner;