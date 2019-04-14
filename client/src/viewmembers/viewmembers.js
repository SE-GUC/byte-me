import React, { Component } from "react";

import { Badge, Button } from "react-bootstrap";
const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");




class viewmembers extends Component {
  constructor(props){
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this)
    this.state = {
      id: ''
    };
  }
  
  
    showmember = () => {
      const id = this.state.id
      console.log(id)
      axios
        .get("http://localhost:4000/api/member/" + id)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
    };
  
    updateInputValue(e){
      this.setState({
        id: e.target.value
      });
  
    }
    
  
    render() {
      return (
        <div>
          <span
            style={{ fontSize: 30, fontWeight: "italic", color: "steelblue " }}
            className="badge"
          >
            member
          </span>
          <br />
          <input value={this.state.id} onChange={this.updateInputValue}/>
          <Button
            onClick={this.showmember()}
            className=" m-2"
            variant="outline-secondary"
          >
            Show member
          </Button>
          
        </div>
      )
 } };
  
  
  export default viewmembers;