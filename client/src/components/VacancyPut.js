import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class VacancyPut extends Component {
    constructor (props) {
        super(props)
       
        this.onvacancyDescription=this.onvacancyDescription.bind(this);
        this.onvacancyDuration=this.onvacancyDuration.bind(this);
        this.onvacancyLocation=this.onvacancyLocation.bind(this)
        this.onvacancymonthlywage = this.onvacancymonthlywage.bind(this);
        this.onvacancystartdate= this.onvacancystartdate.bind(this);
        this.onvacancydailyhours = this.onvacancydailyhours.bind(this);
        this.onvacancyenddate = this.onvacancyenddate.bind(this);
        this.onvacancyreqskills = this.onvacancyreqskills.bind(this);

        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            dailyHours:'',
            description:'',
            duration:'',
            endDate:'',
            location: '',
            monthlyWage: '',
            requiredSkills:'',
            startDate:'' 
        }
    }
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
        })
      }
    onvacancymonthlywage(e) {
        this.setState({
          monthlyWage: e.target.value
        })
      }
    onvacancystartdate(e) {
        this.setState({
          startDate: e.target.value
        })
      }
    onvacancydailyhours(e) {
        this.setState({
          dailyHours: e.target.value
        })
      }
      onvacancyenddate(e) {
        this.setState({
          endDate: e.target.value
        })
      }
      onvacancyreqskills(e) {
        this.setState({
          requiredSkills: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          dailyHours:this.state.dailyHours,
          description: this.state.description,
          duration: this.state.duration,
          endDate:this.state.endDate,
          location: this.state.location,
          monthlyWage: this.state.monthlyWage,
          requiredSkills:this.state.requiredSkills,
          startDate: this.state.startDate,
        };
        console.log(this.state)
       
        axios.put('http://localhost:4000/api/vacancy/update/5c9f2d4eaf0aa213fc616efc/', {
            dailyHours:this.state.dailyHours,
            description: this.state.description,
            duration: this.state.duration,
            endDate:this.state.endDate,
            location: this.state.location,
            monthlyWage: this.state.monthlyWage,
            requiredSkills:this.state.requiredSkills,
            startDate: this.state.startDate,
        }, {
            headers: {
            'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    
  }
  
clickMe()
{
    // alert('test')
}
    

    render() {
        return(
            <div style={{ marginTop: 10 }}>
            <h3>update Vacancy</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Vacancy Description:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.description}
                      onChange={this.onvacancyDescription}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy Duration: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.duration}
                      onChange={this.onvacancyDuration}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy Location: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.location}
                      onChange={this.onvacancyLocation}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy MonthlyWage: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.monthlyWage}
                      onChange={this.onvacancymonthlywage}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy Start Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.startDate}
                      onChange={this.onvacancystartdate}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy Daily Hours: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.dailyHours}
                      onChange={this.onvacancydailyhours}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy End Date: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.endDate}
                      onChange={this.onvacancyenddate}
                      />
                </div>
                <div className="form-group">
                    <label>Vacancy Required Skills: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.requiredSkills}
                      onChange={this.onvacancyreqskills}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="update" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
                </div>
            </form>
        </div>
        )
    }

}

ReactDOM.render(
    <VacancyPut subreddit='reactjs' />,
      document.getElementById('root')
  )

export default VacancyPut;