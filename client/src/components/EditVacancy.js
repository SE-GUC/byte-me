// edit.component.js

import React, { Component } from "react";

import axios from "axios";
import Calendar from "react-calendar";

export default class EditVacancy extends Component {
  constructor(props) {
    super(props);
    this.onvacancyDescription = this.onvacancyDescription.bind(this);
    this.onvacancyDuration = this.onvacancyDuration.bind(this);
    this.onvacancyLocation = this.onvacancyLocation.bind(this);
    this.onvacancymonthlywage = this.onvacancymonthlywage.bind(this);
    this.onvacancydailyhours = this.onvacancydailyhours.bind(this);
    this.onvacancyreqskills = this.onvacancyreqskills.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dailyHours: "",
      description: "",
      duration: "",
      endDate: "",
      location: "",
      monthlyWage: "",
      requiredSkills: "",
      startDate: ""
    };
  }

  //this.props.match.event.id
  componentDidMount() {
    axios
      .put("http://localhost:4000/api/vacancy/update/" + this.props.obj_id)

      .then(response => {
        this.setState({
          dailyHours: response.data.dailyHours,

          description: response.data.description,

          duration: response.data.duration,

          startDate: response.data.startDate,

          endDate: response.data.endDate,

          location: response.data.location,

          monthlyWage: response.data.monthlyWage,

          requiredSkills: response.data.requiredSkills
        });
      })

      .catch(function(error) {
        console.log(error);
      });
  }
  onChangeStartDate = date => {
    this.setState({ startDate: date });
    console.log(this.state.startDate);
  };
  onChangeEndDate = date => {
    this.setState({ endDate: date });
    console.log(this.state.endDate);
  };
  onvacancyDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  onvacancyDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onvacancyLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onvacancymonthlywage(e) {
    this.setState({
      monthlyWage: e.target.value
    });
  }
  onvacancydailyhours(e) {
    this.setState({
      dailyHours: e.target.value
    });
  }
  onvacancyreqskills(e) {
    this.setState({
      requiredSkills: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      dailyHours: this.state.dailyHours,
      description: this.state.description,
      duration: this.state.duration,
      endDate: this.state.endDate,
      location: this.state.location,
      monthlyWage: this.state.monthlyWage,
      requiredSkills: this.state.requiredSkills,
      startDate: this.state.startDate
    };

    //bygeeb id men el url ba3d ma nedoos edit ely fel table
    axios
      .put(
        "http://localhost:4000/api/vacancy/update/" +
          this.props.match.params.id,
        {
          dailyHours: this.state.dailyHours,

          description: this.state.description,

          duration: this.state.duration,

          endDate: this.state.endDate,

          location: this.state.location,

          monthlyWage: this.state.monthlyWage,

          requiredSkills: this.state.requiredSkills,

          startDate: this.state.startDate
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

  // this.props.history.push('/index');
  clickMe() {
    window.parent.location = window.parent.location.href;
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Vacancy :</h3>
        <p>(You can edit one field or more)</p>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Daily Hours: </label>

            <input
              type="number"
              placeholder="Enter a valid number.."
              className="form-control"
              min="1"
              value={this.state.dailyHours}
              onChange={this.onvacancydailyhours}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>

            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onvacancyDescription}
            />
          </div>

          <div className="form-group">
            <label>Duration: </label>

            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onvacancyDuration}
            />
          </div>

          <div>
            <label>Start Date: </label>
            <Calendar
              onChange={this.onChangeStartDate}
              value={this.state.startDate}
            />
          </div>
          <div>
            <label>End Date: </label>
            <Calendar
              onChange={this.onChangeEndDate}
              value={this.state.endDate}
            />
          </div>
          <div className="form-group">
            <label>Monthly Wage: </label>

            <input
              type="number"
              placeholder="Enter a valid number.."
              className="form-control"
              min="1"
              value={this.state.monthlyWage}
              onChange={this.onvacancymonthlywage}
            />
          </div>
          <div className="form-group">
            <label>Required Skills: </label>

            <input
              type="text"
              className="form-control"
              value={this.state.requiredSkills}
              onChange={this.onvacancyreqskills}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>

            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onvacancyLocation}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update Vacancy"
              onClick={this.clickMe}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
