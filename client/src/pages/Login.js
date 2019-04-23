import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './Main';
import { login, type } from '../globalState/actions/authActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from "axios";
import { Route, Redirect } from 'react-router'

class Login extends Component {
    
    login = () => {
		this.props.login();
    };
    
    type = (t) => {
        this.props.type(t);
    }

    constructor(props) {
        super(props);
        this.loginEmail = this.loginEmail.bind(this);
        this.loginPassword = this.loginPassword.bind(this);   
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          email:"",
          password:""
        };
      }

      loginEmail(e) {
        this.setState({email: e.target.value});
      }
      loginPassword(e) {
        this.setState({password: e.target.value});
      }
         
      onSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:4000/api/coworking/login",
            {
              email: this.state.email,
              password: this.state.password
            },
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          ).then(this.login).then(<Redirect to="../"/>)
          .catch(res => {
            console.log(res.data);
          });
      }

    render(){
    return(
      <div className="App"><Main /></div>,
      <div style={{ marginTop: 10 }}>
            <h3>Login to your account</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.loginEmail}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.loginPassword}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                />
              </div>
            </form>
          </div>
    );
  }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    checkType: state.auth.checkType
});

export default connect(mapStateToProps,{login, type })(Login);