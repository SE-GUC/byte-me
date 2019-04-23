import React, { Component } from 'react';

import axios from 'axios';

import TableRowVacancyMember from './TableRowVacancyMember';
import TableRowVacancyCo from './TableRowVacancyCo';


export default class SearchCityCo extends Component {

 

  constructor(props) {

      super(props);

      this.state = {vacancy: []};
      this.getResult = this.getResult.bind(this)
     
    }
        state = {searchVal:""};
    onChange = e => {
        var x = e.target.value;
        this.setState({ searchVal: x });
        console.log(x);
      };
getResult = () =>{
        
        try {
            var criteria = this.state.searchVal;
            axios
              .get("http://localhost:4000/api/vacancy/searchCity/" + criteria)
              .then(res => {
                const result = res.data.data;
                this.setState({vacancy :res.data.data})
                console.log(res.data.data);
              });
          } catch (error) {
            console.log("error");
          }
    }


    tabRow(){

      return this.state.vacancy.map(function(object, i){

          return <TableRowVacancyCo obj={object} key={i} />;

      });

    }

 
    render() {

        return (
  
          <div>
          
            <h3 align="center">Search For Vacancies:</h3>
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
  
                  <th>Daily Hours</th>
  
                  <th>Description</th>
  
                  <th>Duration</th>
  
                  <th>Start Date</th>
  
                  <th>End Date</th>
  
                  <th>Monthly Wage</th>
  
                  <th>Required Skills</th>

                  <th>Location</th>
  
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