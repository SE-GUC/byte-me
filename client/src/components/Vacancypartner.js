import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'


 

class Vacancypartner extends Component {

    constructor(props) {

        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);



    }
    delete() {

        axios.delete('http://localhost:4000/api/vacancy/delete/'+this.props.obj._id)

            .then(console.log('Deleted'))
            .then(window.parent.location = window.parent.location.href)

            .catch(err => console.log(err))

    }
    edit(){
        axios.put('http://localhost:4000/api/vacancy/update/'+this.props.obj_id, {

            dailyHours: this.state.dailyHours,
    
            description: this.state.description,
    
            duration: this.state.duration,
    
            startDate: this.state.startDate,

            endDate: this.state.endDate,
    
            monthyWage: this.state.monthyWage,
    
            requiredSkills: this.state.requiredSkills,

            location:this.state.location
    
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

        

    
   
    

  render() {

    return (
        <tr>

          <td>

            {this.props.obj.dailyHours}

          </td>

          <td>

            {this.props.obj.description}

          </td>

          <td>

            {this.props.obj.duration}

          </td>

          <td>

            {this.props.obj.startDate}

          </td>

          <td>

            {this.props.obj.endDate}

          </td>

          <td>

            {this.props.obj.monthlyWage}

          </td>
          <td>

            {this.props.obj.requiredSkills}

          </td>
          <td>

            {this.props.obj.location}

          </td>

          <td>

          <Link to={"/vacancy/update/"+this.props.obj._id} className="btn btn-primary" onClick="edit">Edit</Link>

          </td>

          <td>
  
          <button onClick={this.delete}className="btn btn-danger">Delete</button >
          

          </td>
        

        </tr>


    );

  }

}

 

export default Vacancypartner;

 