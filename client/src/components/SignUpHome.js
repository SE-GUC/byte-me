import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./SignIn";
import CreatePartner from "./CreatePartner";
import HomePartner from "./HomePartner";
//import { Provider } from "react-redux";


import SearchEmail from "./SearchEmail";
import PartnerViewVacancies from "./PartnerViewVacancies";
import PartnerViewEvents from "./PartnerViewEvents";

class SignUpHome extends Component {
    render() {
      return (
        // <Provider store={store}>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
             
  
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  
                  
                <li className="nav-item">
<Link to={'/signIn'} className="nav-link">Sign in</Link>
</li>

{/* <li className="nav-item">

<Link to={'/signUp'} className="nav-link">sign up</Link>
</li> */}

                </ul>
  
              </div>
            </nav>
  
           
            <Switch>
              {/* <Route exact path='/create/:id' component={ EventPost } /> */}
  
              {/* <Route path='/update/:id' component={ Edit } /> */}
  
             

              <Route path={"/signIn"} component={SignIn} />
            <Route path={"/signUp"} component={CreatePartner} />
            
            
            </Switch>
          </div>
        </Router>
        // </Provider>
      );
    }
  }
  
  export default SignUpHome;