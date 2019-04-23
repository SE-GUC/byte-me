import React, { Component } from 'react';

import axios from 'axios';

import TableRowVacancyMember from './TableRowVacancyMember';
import Calendar from "react-calendar";

export default class SearchEndDateMember extends Component {

 

  constructor(props) {

      super(props);

      this.state = {vacancy: []};
      this.getResult = this.getResult.bind(this)
      this.onChangeEndDate = this.onChangeEndDate.bind(this);
     
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
          
          endDate: this.state.endDate
        };}
        state = {searchVal:""};
   
      onChangeEndDate = date => {
        this.setState({ searchVal: date });
        console.log(this.state.searchVal);
      };
getResult = () =>{
        
        try {
            var criteria = this.state.searchVal;
            axios
              .get("http://localhost:4000/api/vacancy/searchendDate/" + criteria)
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

          return <TableRowVacancyMember obj={object} key={i} />;

      });

    }

 
    render() {

        return (
  
          <div>
          
            <h3 align="center">Search For Vacancies:</h3>
            <div>
            <form onSubmit={this.onSubmit}>
         <Calendar
              onChange={this.onChangeEndDate}
              value={this.state.endDate}
            />
            </form>
        
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