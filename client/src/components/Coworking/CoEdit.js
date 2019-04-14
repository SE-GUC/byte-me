import React, { Component } from "react";
import axios from "axios";
export default class CoEdit extends Component {
  constructor(props) {
    super(props);
    this.onEditEmail = this.onEditEmail.bind(this);
    this.onEditPassword = this.onEditPassword.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }
  onEditEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onEditPassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    axios.put("http://localhost:4000/api/coworking/" + this.props.match.params.id,
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  clickMe() {
    window.parent.location = window.parent.location.href;
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Coworking Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onEditEmail}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onEditPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update"
              onClick={this.clickMe}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}