import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Partners from "./Partners";
export default class SearchBoardMembers extends Component {
    constructor(props) {

        super(props);
  
        this.state = {partner: []};
        this.getResult = this.getResult.bind(this)
       
      }
  state = {
    value: ""
  };
  

  clickMe() {
    window.parent.location = window.parent.location.href;
  }
  onChange = e => {
    var p = e.target.value;
    this.setState({ value: p });
    console.log(p);
  };
  getResult = () => {
    try {
      var criteria = this.state.value;
      axios
        .get("http://localhost:4000/api/partner/searchMembers/" + criteria)
        .then(res => {
            const result = res.data.data;
            this.setState({partner :res.data.data})
            console.log(res.data.data);
        });
    } catch (error) {
      console.log("error");
    }
  };
  tabRow(){

    return this.state.partner.map(function(object, i){

        return <Partners obj={object} key={i} />;

    });
  }
  render() {

    return (

      <div>
      
        {/* <h3 align="center">Search For partners:</h3> */}
        <div>
    <input
      type="text"
      placeholder="Search by board members.."
      onChange={this.onChange}
    />
    <div>
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={this.getResult}
      >
        Search board members
      </button>
    </div>
        <table className="table table-striped" style={{ marginTop: 10 }}>

          <thead>

            <tr>

            <th>Oarganization name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Description</th>
             <th>Partners</th>
             <th>Board members</th>
             <th>Field of work</th>
             <th colSpan="2">Action</th>

            </tr>

          </thead>

          <tbody>

            { this.tabRow() }

          </tbody>

        </table>

      </div>
      </div>

    );

  }

}