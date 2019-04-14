import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";

export default class CoRegister extends Component {
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeEmail=this.onChangeEmail.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onChangeLocation=this.onChangeLocation.bind(this)
        this.onChangeFacilities=this.onChangeFacilities.bind(this)
        this.onChangeRooms=this.onChangeRooms.bind(this)
        this.onChangeBusinessPlan=this.onChangeBusinessPlan.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={
            name:'',
            email:'',
            password:'',
            location:'',
            facilities:[],
            fValue:'',
            rooms:[],
            businessPlan:''
        }
    }
    onChangeName(e){
        this.setState({
            firstName: e.target.value
        })
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }
    onChangeLocation(e){
        this.setState({
            location:e.target.value,
        })
    }
    onChangeFacilities(e){
        this.setState(state => {
            const list = [...state.list, e.target.value];
            return {
              list,
              value: '',
            };
          });
    }
    onChangeRooms(e){
        this.setState({
            rooms:e.target.value,
        })
    }
    onChangeBusinessPlan(e){
        this.setState({
            businessPlan:e.target.value,
        })
    }
    
    onSubmit(e){
        e.preventDefault()
        axios.post('https://localhost:4000/api/coworking/register',{
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            location:this.state.location,
            facilities:this.state.facilities,
            rooms:this.state.rooms,
            businessPlan:this.state.businessPlan
        },{
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
        this.setState({
            name:'',
            email:'',
            password:'',
            location:'',
            facilities:[],
            rooms:[],
            businessPlan:''
        })
    }
    clickMe()
    {
    // alert('test')
    }

    render() {
        return (
            <div style={{marginTop:10}}>
                <h3>Register as coworking</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name:</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>E-Mail: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Location: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.location}
                                onChange={this.onChangeDateOfBirth}
                                />
                    </div>
                    <div className="form-group">
                        <label>Place Of Residence: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.placeOfResidence}
                                onChange={this.onChangeResidence}
                                />
                    </div>
                    
                    <div className="form-group">
                        <label>Skill 1: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill1}
                                onChange={this.onChangeSkill1}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skill 2: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill2}
                                onChange={this.onChangeSkill2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skill 3: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill3}
                                onChange={this.onChangeSkill3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skill 4: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.skill4}
                                onChange={this.onChangeSkill4}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 1: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest1}
                                onChange={this.onChangeInterest1}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 2: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest2}
                                onChange={this.onChangeInterest2}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 3: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest3}
                                onChange={this.onChangeInterest3}
                                />
                    </div>
                    <div className="form-group">
                        <label>Interest 4: </label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={this.state.interest4}
                                onChange={this.onChangeInterest4}
                                />
                    </div>
                    

                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary" onClick ={this.clickMe.bind(this)}/>
                    </div>
                </form>
            </div>
        )
    }
}
ReactDOM.render(
    <CoRegister subreddit='reactjs' />,
      document.getElementById('root')
  )