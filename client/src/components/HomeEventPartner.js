import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EventPost from'./EventPost';
import Index from './Index';
import Edit from './Edit';
import Search from './Search';



class HomeEventPartner extends Component {
render() {
     return (
      <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
           
          <li className="nav-item">
          <Link to={'/event/partner/post'} className="nav-link">Post new Event</Link>
          </li>
          <li className="nav-item">
          <Link to={'/event/partner/showevents'} className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
          <Link to={'/event/partner/search'} className="nav-link">Search by location</Link>
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
           <Route path='/event/partner/update/:id' component={ Edit } />
           <Route path='/event/partner/showevents' component={ Index } />
           <Route path='/event/partner/post' component={ EventPost} />
           <Route path='/event/partner/search' component={ Search} />
           </Switch>
          </div>
         </Router>
);
}
}
export default HomeEventPartner;

