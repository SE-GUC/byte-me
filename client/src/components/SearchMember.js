import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import TableRowMember from "./TableRowMember";
export default class SearchMember extends Component {
    constructor(props) {

        super(props);
  
        this.state = {event: []};
        this.getResult = this.getResult.bind(this)
       
      }
  state = {
    searchVal: ""
  };
  

  clickMe() {
    window.parent.location = window.parent.location.href;
  }
  onChange = e => {
    var x = e.target.value;
    this.setState({ searchVal: x });
    console.log(x);
  };
  getResult = () => {
    try {
      var criteria = this.state.searchVal;
      axios
        .get("http://localhost:4000/api/event/searchCity/" + criteria)
        .then(res => {
            const result = res.data.data;
            this.setState({event :res.data.data})
            console.log(res.data.data);
        });
    } catch (error) {
      console.log("error");
    }
  };
  tabRow(){

    return this.state.event.map(function(object, i){

        return <TableRowMember obj={object} key={i} />;

    });
  }
  render() {

    return (

      <div>
      
        <h3 align="center">Search For Events:</h3>
        <div>
    <input
      type="text"
      placeholder="Search by location.."
      onChange={this.onChange}
    />
    <div>
      <button
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={this.getResult}
      >
        Search
      </button>
    </div>
        <table className="table table-striped" style={{ marginTop: 10 }}>

          <thead>

            <tr>

            <th>Type</th>
             <th>Name</th>
             <th>Description</th>
             <th>Location</th>
             <th>Duration</th>
             <th>Date</th>
             <th colSpan="1">Action</th>

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
