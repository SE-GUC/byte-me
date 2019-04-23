import React, { Component } from "react";

import axios from "axios";

import TableRowVacancy from "./TableRowVacancy";
import Calendar from "react-calendar";

export default class SearchstartDate extends Component {
  constructor(props) {
    super(props);

    this.state = { vacancy: [] };
    this.getResult = this.getResult.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      startDate: this.state.startDate
    };
  }
  state = { searchVal: "" };

  onChangeStartDate = date => {
    this.setState({ searchVal: date });
    console.log(this.state.searchVal);
  };
  getResult = () => {
    try {
      var criteria = this.state.searchVal;
      axios
        .get("http://localhost:4000/api/vacancy/searchstartDate/" + criteria)
        .then(res => {
          const result = res.data.data;
          this.setState({ vacancy: res.data.data });
          console.log(res.data.data);
        });
    } catch (error) {
      console.log("error");
    }
  };

  tabRow() {
    return this.state.vacancy.map(function(Date, i) {
      return <TableRowVacancy obj={Date} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Search For Vacancies:</h3>
        <div>
          <form onSubmit={this.onSubmit}>
            <Calendar
              onChange={this.onChangeStartDate}
              value={this.state.startDate}
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

                <th colSpan="2">Action</th>
              </tr>
            </thead>

            <tbody>{this.tabRow()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
