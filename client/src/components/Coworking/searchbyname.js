import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import cotablerow from './cotablerow'
export default class Search extends Component {
    constructor(props) {

        super(props);
  
        this.state = {coworking: []};
        this.getResult = this.getResult.bind(this)
       
      }
  state = {
    searchVal: ""
  };
  

  clickMe() {
    window.parent.name = window.parent.name.href;
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
        .get("http://localhost:4000/api/coworking/searchname/" + criteria)
        .then(res => {
            const result = res.data.data;
            this.setState({coworking :res.data.data})
            console.log(res.data.data);
        });
    } catch (error) {
      console.log("error");
    }
  };
  tablerow(){

    return this.state.coworking.map(function(object, i){

        return <cotablerow obj={object} key={i} />;

    });
  }
  render() {

    return (

      <div>
      
        <h3 align="center">Search For Coworking:</h3>
        <div>
    <input
      type="text"
      placeholder="Search by name.."
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

            
             <th>Name</th>
             <th>location</th>
             <th>email</th>
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