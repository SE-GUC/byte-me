
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Calendar from "react-calendar";
class VacancyPost extends Component {
  constructor(props) {
    super(props);
    this.onvacancyDescription = this.onvacancyDescription.bind(this);
    this.onvacancyDuration = this.onvacancyDuration.bind(this);
    this.onvacancyLocation = this.onvacancyLocation.bind(this);
    this.onvacancymonthlywage = this.onvacancymonthlywage.bind(this);
    this.onvacancystartdate = this.onvacancystartdate.bind(this);
    this.onvacancydailyhours = this.onvacancydailyhours.bind(this);
    this.onvacancyenddate = this.onvacancyenddate.bind(this);
    this.onvacancyreqskills = this.onvacancyreqskills.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dailyHours: "",
      description: "",
      duration: "",
      endDate: new Date(),
      location: "",
      monthlyWage: "",
      requiredSkills: "",
      startDate: new Date()
    };
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
  onvacancystartdate(e) {
    this.setState({
      startDate: e.target.value
    });
  }
  onvacancydailyhours(e) {
    this.setState({
      dailyHours: e.target.value
    });
  }
  onvacancyenddate(e) {
    this.setState({
      endDate: e.target.value
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
    console.log(this.state.startDate);

    axios
      .post(
        "http://localhost:4000/api/vacancy/create/5ca1141b21356c2d388904e7/",
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

  clickMe() {
        window.parent.location = window.parent.location.href;
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Vacancy</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onvacancyDescription}
              required
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onvacancyDuration}
              required
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onvacancyLocation}
              required
            />
          </div>
          <div className="form-group">
            <label>MonthlyWage: </label>
            <input
              type="number"
              placeholder="Enter a valid number.."
              className="form-control"
              min="1"
              value={this.state.monthlyWage}
              onChange={this.onvacancymonthlywage}
              required
            />
          </div>
          <div>
          <label>Start Date: </label>
            <Calendar onChange={this.onChangeStartDate} value={this.state.startDate} />
            
          </div>
          <div className="form-group">
            <label>Daily Hours: </label>
            <input
              type="number"
              placeholder="Enter a valid number.."
              className="form-control"
              value={this.state.dailyHours}
              min="1"
              onChange={this.onvacancydailyhours}
              required
            />
          </div>
          <div>
          <label>End Date: </label>
            <Calendar onChange={this.onChangeEndDate} value={this.state.endDate} />
          </div>
          <div className="form-group">
            <label>Required Skills: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.requiredSkills}
              onChange={this.onvacancyreqskills}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create"
              className="btn btn-primary"
              onClick={this.clickMe.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
  
}
ReactDOM.render(
  <VacancyPost subreddit="reactjs" />,
  document.getElementById("root")
);

export default VacancyPost;
