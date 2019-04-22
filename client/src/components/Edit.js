import React, { Component } from "react";
import axios from "axios";
import Calendar from "react-calendar";
export default class Edit extends Component {
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
      eventDate: "",
      eventDuration: "",
      eventLocation: "",
      eventDescription: ""
    };
  }

  //this.props.match.event.id
  componentDidMount() {
    axios
      .put("http://localhost:4000/api/event/update/" + this.props.obj_id)
      .then(response => {
        this.setState({
          type: response.data.type,
          eventName: response.data.eventName,
          eventDate: response.data.eventDate,
          eventDuration: response.data.eventDuration,
          eventLocation: response.data.eventLocation,
          eventDescription: response.data.eventDescription
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  oneventName(e) {
    this.setState({
      eventName: e.target.value
    });
  }
  onChangeEventDate = date => {
    this.setState({ eventDate: date });
    console.log(this.state.eventDate);
  };
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

    // console.log(this.state)
    // axios.put('http://localhost:4000/api/event/update/5caf6163f3a2332384659f80')
    // .then(res => console.log(res.data));
    //bygeeb id men el url ba3d ma nedoos edit ely fel table
    axios
      .put(
        "http://localhost:4000/api/event/update/" + this.props.match.params.id,
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
  // this.props.history.push('/index');
  clickMe() {
    //alert('Event is edited successfully!')
    window.parent.location = window.parent.location.href;
  }
  //}
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Event Name: </label>
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
            <label>Event Date: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventDate}
              onChange={this.oneventDate}
            />
          </div> */}
          <div className="form-group">
            <label>Event Type: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventType}
              onChange={this.oneventType}
            />
          </div>
          <div className="form-group">
            <label>Event Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventDuration}
              onChange={this.oneventDuration}
            />
          </div>
          <div className="form-group">
            <label>Event Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.eventLocation}
              onChange={this.oneventLocation}
            />
          </div>
          <div className="form-group">
            <label>Event Description: </label>
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
              value="Update Event"
              onClick={this.clickMe}
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}