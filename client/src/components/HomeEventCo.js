import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IndexCo from './IndexCo';
import SearchCo from './SearchCo';



class HomeEventCo extends Component {
render() {
     return (
      <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
           <li className="nav-item">
          <Link to={'/event/coworking/showevents'} className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
          <Link to={'/event/coworking/search'} className="nav-link">Search by location</Link>
          </li>
          </ul>
          </div>
          </nav>
          <div>
           {/* <EventPost/> */}
           {/* <Index/> */}
          {/* <Edit/> */}
          </div>
          <Switch>
           {/*<Route exact path='/create/:id' component={ EventPost } /> */}
           
           <Route path='/event/coworking/showevents' component={ IndexCo } />
        
           <Route path='/event/coworking/search' component={ SearchCo} />
           </Switch>
          </div>
         </Router>
);
}
}
export default HomeEventCo;

