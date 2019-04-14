import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';
import React, { Component } from 'react';

export default class login extends Component{

    Auth = new AuthHelperMethods();

    handleFormSubmit = e => {
        e.preventDefault();
      
       
        this.Auth.login(this.state.username, this.state.password)
          .then(res => {
            if (res === false) {
              return alert("Sorry those credentials don't exist!");
            }
            this.props.history.replace("/");
          })
          .catch(err => {
            alert(err);
          });
      };
}