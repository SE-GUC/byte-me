import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import axios from 'axios'


 

class cotablerow extends Component {

    constructor(props) {

        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);


    }
    delete() {

        axios.delete('http://localhost:4000/api/coworking/delete/'+this.props.obj._id)

            .then(console.log('Deleted'))
            .then(window.parent.location = window.parent.location.href)

            .catch(err => console.log(err))

    }
    edit(){
        axios.put('http://localhost:4000/api/coworking/update/'+this.props.obj_id, {

            name: this.state.name,
    
            location: this.state.location,
    
            email: this.state.email,
    
            password: this.state.password,

            rooms: this.state.rooms,
    
            status: this.state.status,
    
            businessplan: this.state.businessplan,

            expiryDate:this.state.expiryDate,

            contractTime:this.state.contractTime,

            contractlocation:this.state.contractlocation,

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

            {this.props.obj.name}

          </td>

          <td>

            {this.props.obj.location}

          </td>

          <td>

            {this.props.obj.email}

          </td>

          <td>

            {this.props.obj.password}

          </td>

          <td>

            {this.props.obj.rooms}

          </td>

          <td>

            {this.props.obj.status}

          </td>
          <td>

            {this.props.obj.businessplan}

          </td>
          <td>

            {this.props.obj.expiryDate}

          </td>
          <td>

            {this.props.obj.contractTime}

          </td>
          <td>

            {this.props.obj.contractlocation}

          </td>
          <td>

           {this.props.obj.contractlocation}

            </td>
          <td>

          <Link to={"/coworking/update/"+this.props.obj._id} className="btn btn-primary" onClick="edit">Edit</Link>

          </td>

          <td>
  
          <button onClick={this.delete}className="btn btn-danger">Delete</button >
          

          </td><td>
  
  <button onClick={this.apply}className="btn btn-danger">view</button >
  

  </td>

        </tr>


    );

  }

}

 

export default cotablerow;