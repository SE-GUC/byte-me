import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Calendar from "react-calendar";
class EventPost extends Component {
  constructor(props) {
    super(props);
    this.oneventName = this.oneventName.bind(this);
    this.oneventDate = this.oneventDate.bind(this);
    this.oneventType = this.oneventType.bind(this);
    this.oneventLocation = this.oneventLocation.bind(this);
    this.oneventDuration = this.oneventDuration.bind(this);
    this.oneventDescription = this.oneventDescription.bind(this);
    this.onChangeEventDate = this.onChangeEventDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      eventName: "",
      eventDate: new Date(),
      eventDuration: "",
      eventLocation: "",
      eventDescription: ""
    };
  }
  onChangeEventDate = date => {
    this.setState({ eventDate: date });
    console.log(this.state.eventDate);
  };
  oneventName(e) {
    this.setState({
      eventName: e.target.value
    });
  }
  oneventDate(e) {
    this.setState({
      eventDate: e.target.value
    });
  }
  oneventType(e) {
    this.setState({
      type: e.target.value
    });
  }
  oneventDuration(e) {
    this.setState({
      eventDuration: e.target.value
    });
  }
  oneventLocation(e) {
    this.setState({
      eventLocation: e.target.value
    });
  }
  oneventDescription(e) {
    this.setState({
      eventDescription: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      type: this.state.type,
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      eventDuration: this.state.eventDuration,
      eventLocation: this.state.eventLocation,
      eventDescription: this.state.eventDescription
    };
    console.log(this.state);

    axios
      .post(
        "http://localhost:4000/api/event/create/5ca1141b21356c2d388904e7",
        {
          type: this.state.type,
          eventName: this.state.eventName,
          eventDate: this.state.eventDate,
          eventDuration: this.state.eventDuration,
          eventLocation: this.state.eventLocation,
          eventDescription: this.state.eventDescription
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
      <div style={{ marginTop: 5 }}>
        <h3>Create New Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventName}
              onChange={this.oneventName}
            />
          </div>

          <div>
            <label>Event Date: </label>
            <Calendar
              onChange={this.onChangeEventDate}
              value={this.state.eventDate}
            />
          </div>
          {/* <div className="form-group">
                    <label>Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.eventDate}
                      onChange={this.oneventDate}
                      />
                </div> */}
          <div className="form-group">
            <label>Type: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventType}
              onChange={this.oneventType}
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventDuration}
              onChange={this.oneventDuration}
            />
          </div>
          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventLocation}
              onChange={this.oneventLocation}
            />
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventDescription}
              onChange={this.oneventDescription}
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
  <EventPost subreddit="reactjs" />,
  document.getElementById("root")
);
export default EventPost;
