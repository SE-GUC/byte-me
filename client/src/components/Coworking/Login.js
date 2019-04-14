import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.onEmail = this.onEmail.bind(this);
    this.onPassword = this.onPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state= {
      loggedIn=false
    }
  }

  componentDidMount() {
    axios.post("http://localhost:4000/api/coworking/login/").then(response => {
        if(response.data)
        this.setState(loggedIn=true)
      }).catch(function(error) {
        console.log(error);
      });
  }
  
  render() {
    return (
    <h1>{this.state.coworking.map(result=> <li key={result.id}>{result.name}</li>)}</h1>
    );
  }
}

export default Login;