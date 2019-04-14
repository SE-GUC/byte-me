import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EventPost from'./components/EventPost';
import Index from './components/Index';
import Edit from './components/Edit';
import Search from './components/Search';

class App extends Component {
render() {
     return (
      <Router>
         <div className="container">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <Link to={'/'} className="navbar-brand">Lirten HUB</Link>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
           <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to={'/post'} className="nav-link">Post new Event</Link>
          </li>
          <li className="nav-item">
          <Link to={'/showevents'} className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
          <Link to={'/search'} className="nav-link">Search</Link>
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
           <Route path='/update/:id' component={ Edit } />
           <Route path='/showevents' component={ Index } />
           <Route path='/post' component={ EventPost} />
           <Route path='/search' component={ Search} />
           </Switch>
          </div>
         </Router>
);
}
}
export default App;

