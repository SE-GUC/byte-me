//import AuthHelperMethods from './components/AuthHelperMethods';
//import withAuth from './components/withAuth';
import React, { Component } from 'react';
import axios from 'axios';

 class SignIn extends Component{

   constructor(props)
   {
     super(props);
     this.onChangeEmail = this.onChangeEmail.bind(this);
     this.onChangePassword= this.onChangePassword.bind(this);
     this.onSubmit = this.onSubmit.bind(this);
     this.state = {
       
         email: '',
         password: ''
     }
   }
   onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
   
   onSubmit = (e) => {
    e.preventDefault();
   
  
    axios.post('http://localhost:4000/api/partner/login/',{
      email:this.state.email,
      password:this.state.password
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
     
      //this.setRedirect();
     // window.parent.location = window.parent.location.href;
  }
  
  render() {
    return (
        
<div style={{ marginTop: 10 }}>
            
            <form onSubmit={this.onSubmit}>
               
                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      />
                </div>
                
                <div className="form-group">
                 {/* {this.renderRedirect()}  */}
                    <input type="submit" value="Sign in" className="btn btn-primary" onClick ={this.clickMe.bind(this)}  />
                    
                     
       
       
      
                </div>
            </form>
        </div>
    )
  }

}
export default SignIn