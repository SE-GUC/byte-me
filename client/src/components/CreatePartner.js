import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
 class CreatePartner extends Component {
//    state = {
//      redirect: false
//    }
//  setRedirect = () => {
//        this.setState({
//        redirect: true
//      })
//    }
//    renderRedirect = () => {
//      if (this.state.redirect) {
//        return <Redirect to='/Partner' />
//      }
//    }

    constructor (props){
        super(props);
        this.onChangeOrganizationName=this.onChangeOrganizationName.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePartners = this.onChangePartners.bind(this);
        this.onChangeBoardMembers=this.onChangeBoardMembers.bind(this);
        /* this.onChangePartner1 = this.onChangePartner1.bind(this);
        this.onChangePartner2 = this.onChangePartner2.bind(this);
        this.onChangePartner3 = this.onChangePartner3.bind(this);
        this.onChangeBoardMember1=this.onChangeBoardMember1.bind(this);
        this.onChangeBoardMember2=this.onChangeBoardMember2.bind(this);
        this.onChangeBoardMember3=this.onChangeBoardMember3.bind(this);  */
        this.onChangeFieldOfWork=this.onChangeFieldOfWork.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            organizationName: '',
            email: '',
            password: '',
            description: '',
            partners: '',
            boardMembers: '',
           /*  partner1:'',
            partner2:'',
            partner3:'',
            boardMembers:[],
            boardMember1: '',
            boardMember2: '',
            boardMember3: '', */

            fieldOfWork: ''
           
           
        }
        
    
       
    }

    onChangeOrganizationName(e) {
        this.setState({
          organizationName: e.target.value
        });
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
    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
     /* onChangePartner1(e) {
         this.setState({
           partner1: e.target.value
         })
       }
       onChangePartner2(e) {
         this.setState({
           partner2: e.target.value
         })
       }
       onChangePartner3(e) {
         this.setState({
           partner3: e.target.value
         })
       } */
       onChangePartners(e) {
        this.setState({
          partners: e.target.value
        })
      }
     onChangeBoardMembers(e) {
         this.setState({
           boardMembers: e.target.value
         })
       }
      /*  onChangeBoardMember2(e) {
         this.setState({
           boardMember2: e.target.value
         })
      }
       onChangeBoardMember3(e) {
         this.setState({
           boardMember3: e.target.value
         })
     } */
      onChangeFieldOfWork(e) {
        this.setState({
          fieldOfWork: e.target.value
        })
      }
      
  onSubmit = (e) => {
    e.preventDefault();
    /*const obj ={
        organizationName:this.state.organizationName,
        email:this.state.email,
        password:this.state.password,
        description:this.state.description,
        // partners:this.state.partners.concat([this.state.partner1,this.state.partner2,this.state.partner3]),
        // partner1:this.state.partner1,
        // partner2:this.state.partner2,
        // partner3:this.state.partner3,
        // boardMembers:this.state.boardMembers.concat([this.state.boardMember1,this.state.boardMember2,this.state.boardMember3]),
        // boardMember1:this.state.boardMember1,
        // boardMember2:this.state.boardMember2,
        // boardMember3:this.state.boardMember3,
        fieldOfWork:this.state.fieldOfWork

    };
   */
  console.log("--------------- "+this.state)
    axios.post('http://localhost:4000/api/partner/',{
        organizationName:this.state.organizationName,
        email:this.state.email,
        password:this.state.password,
        description:this.state.description,
        partners:this.state.partners,
        boardMembers:this.state.boardMembers,
        // partners:this.state.partners.concat([this.state.partner1,this.state.partner2,this.state.partner3]),
        // partner1:this.state.partner1,
        // partner2:this.state.partner2,
        // partner3:this.state.partner3,
        // boardMembers:this.state.boardMembers.concat([this.state.boardMember1,this.state.boardMember2,this.boardMember3]),
        // boardMember1:this.state.boardMember1,
        // boardMember2:this.state.boardMember2,
        // boardMember3:this.state.boardMember3,
        fieldOfWork:this.state.fieldOfWork
    })
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.log(error)
    })
    /*this.setState ( {
        organizationName: '',
        email: '',
        password: '',
        description: '',
        // partners: [],
        // partner1:'',
        // partner2:'',
        // partner3:'',
        // boardMembers:[],
        // boardMember1: '',
        // boardMember2: '',
        // boardMember3: '',

        fieldOfWork: ''
       
       
    })*/
  }
  clickMe()
  {
      // alert('test')
     
      //this.setRedirect();
     // window.parent.location = window.parent.location.href;
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
                      onChange={this.onChangeOrganizationName}
                      />
                </div>
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
                    <label>Description: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className="form-group">
                    <label>Partners: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.partners}
                      onChange={this.onChangePartners}
                      />
                </div>
                {/*  <div className="form-group">
                    <label>Partner1: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.partner1}
                      onChange={this.onChangePartner1}
                      />
                </div>
                <div className="form-group">
                    <label>Partner2: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.partner2}
                      onChange={this.onChangePartner2}
                      />
                </div>
                <div className="form-group">
                    <label>Partner3: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.partner3}
                      onChange={this.onChangePartner3}
                      />
                </div>
                <div className="form-group">
                    <label>Board member 1: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMember1}
                      onChange={this.onChangeBoardMember1}
                      />
                </div>
                <div className="form-group">
                    <label>Board member 2: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMember2}
                      onChange={this.onChangeBoardMember2}
                      />
                </div> */}
                <div className="form-group">
                    <label>Board members: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.boardMembers}
                      onChange={this.onChangeBoardMembers}
                      />
                </div> 
                <div className="form-group">
                    <label>Field of work: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.fieldOfWork}
                      onChange={this.onChangeFieldOfWork}
                      />
                </div>
                <div className="form-group">
                 {/* {this.renderRedirect()}  */}
                    <input type="submit" value="Sign up" className="btn btn-primary" onClick ={this.clickMe.bind(this)}  />
                    
                     
       
       
      
                </div>
            </form>
        </div>
    )
  }
}


export default CreatePartner