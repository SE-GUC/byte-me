import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import axios from 'axios';
 class CreateProfile extends Component {

    constructor (props){
        super(props);
        this.onorganizationName=this.onorganizationName.bind(this)
        this.onemail = this.onemail.bind(this);
        this.onpassword= this.onpassword.bind(this);
        this.ondescription = this.ondescription.bind(this);
        this.onpartners = this.onpartners.bind(this);
        this.onboardMembers=this.onboardMembers.bind(this);
        this.onfieldOfWork=this.onfieldOfWork.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            organizationName: '',
            email: '',
            password: '',
            description: '',
            partners: '',
            boardMembers: '',
            fieldOfWork: ''
           
           
        }
        
    
       
    }

    onorganizationName(e) {
        this.setState({
          organizationName: e.target.value
        });
      }
    onemail(e) {
        this.setState({
          email: e.target.value
        });
      }
    onpassword(e) {
        this.setState({
          password: e.target.value
        })
      }
    ondescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    onpartners(e) {
        this.setState({
          partners: e.target.value
        })
      }
    onboardMembers(e) {
        this.setState({
          boardMembers: e.target.value
        })
      }
      onfieldOfWork(e) {
        this.setState({
          fieldOfWork: e.target.value
        })
      }
      
  onSubmit = (e) => {
    e.preventDefault();
    const obj ={
        organizationName:this.state.organizationName,
        email:this.state.email,
        password:this.state.password,
        description:this.state.description,
        partners:this.state.partners,
        boardMembers:this.state.boardMembers,
        fieldOfWork:this.state.fieldOfWork

    };
    console.log(this.state)
    axios.post('http://localhost:4000/api/partner/',{
        organizationName:this.state.organizationName,
        email:this.state.email,
        password:this.state.password,
        description:this.state.description,
        partners:this.state.partners,
        boardMembers:this.state.boardMembers,
        fieldOfWork:this.state.fieldOfWork,
       

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
  //onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
 
  render() {
    return (
        
<div style={{ marginTop: 10 }}>
            
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Organization name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.organizationName}
                      onChange={this.onorganizationName}
                      />
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onemail}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onpassword}
                      />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.ondescription}
                      />
                </div>
                <div className="form-group">
                    <label>Partners: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.partners}
                      onChange={this.onpartners}
                      />
                </div>
                <div className="form-group">
                    <label>Board members: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMembers}
                      onChange={this.onboardMembers}
                      />
                </div>
                <div className="form-group">
                    <label>Field of work: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.fieldOfWork}
                      onChange={this.onfieldOfWork}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Sign up" className="btn btn-primary" onClick ={this.clickMe.bind(this)} />
                </div>
            </form>
        </div>
    )
  }
}

ReactDOM.render(
    <CreateProfile subreddit='reactjs' />,
      document.getElementById('root')
  )

export default CreateProfile