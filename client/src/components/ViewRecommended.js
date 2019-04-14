// import React, { Component } from 'react';
// import axios from 'axios';



// class ViewRecommendations extends Component {
//   constructor(){
//   super();
//   this.state={
//     jobs:[]
//   }
// }

//     onSubmit = (e) => {
//         e.preventDefault();
//         this.getPartners();
//     }
    
//     componentDidMount() {
    
//     }
//     getPartners = () => {
//       axios.get('http://localhost:4000/api/member/viewRecommendedVacancies/5ca0fb82f759451f18e3ae8f')
//       .then(res => this.setState({ jobs: res.data.data }))
//       this.setState({ jobs: this.state.jobs});
//       }
      
//   render() {
    
//     return(
//     <form onSubmit={this.onSubmit}>
//     <input
//     type= 'submit'
//     value= 'Show Partners'
//     className= 'btn'
//     style={{flex:3}}
//     />
//     <h1>{this.state.partners.map(result => <ul key={result._id}> 
//     Required Skills:<br></br> 
//     <table border="2"><tbody><tr><th>{result.requiredSkills[0]}</th>
//     <th>{result.requiredSkills[1]}</th><th>{result.requiredSkills[2]}</th>
//     <th>{result.requiredSkills[3]}</th><th>{result.requiredSkills[4]}</th>
//     <th>{result.requiredSkills[5]}</th><th>{result.requiredSkills[6]}</th>
//     <th>{result.requiredSkills[7]}</th><th>{result.requiredSkills[8]}</th>
//     <th>{result.requiredSkills[9]}</th></tr> 
//     </tbody></table>
//     Daily Hours:<br></br>
//     {result.dailyHours}<br></br>
//     Status:<br></br>
//     {result.status}<br></br>  
//     Description:<br></br>
//     {result.description}<br></br>
//     Duration:<br></br>
//     {result.duration}<br></br>
//     Start Date:<br></br>
//     {result.startDate}<br></br>
//     End Date:<br></br>
//     {result.endDate}<br></br>
//     Monthly Wage:<br></br>
//     {result.monthlyWage}<br></br>
//     Location:<br></br>
//     {result.location}<br></br><br></br><br></br><br></br>  
//     </ul>)}
//     </h1>
//     </form>)
//   }
// }

// export default ViewRecommendations;

import React, { Component } from 'react';

import axios from 'axios';

import TableRowVacancy from './TableRowVacancy';

//  import {createStackNavigator, createAppContainer} from 'react-navigation';


export default class ViewRecommendations extends Component {

 

  constructor(props) {

      super(props);

      this.state = {vacancy: []};

    }
//na2es nehot id partner w negeeb ele events beta3to howa bas 3ashan y delete w edit 
//de hansebha bas hansheel menha delete w edit buttons
    componentDidMount(){

      axios.get('http://localhost:4000/api/member/viewRecommendedVacancies/'+this.props.obj_id)

        .then(vacancy => {

          this.setState({vacancy: vacancy.data.data });

        })

        .catch(function (error) {

          console.log(error);

        })

    }

    tabRow(){

      return this.state.vacancy.map(function(object, i){

          return <TableRowVacancy obj={object} key={i} />;

      });

    }

 

    render() {

      return (

        <div>

          <h3 align="center">Recommended Vacancies:</h3>

          <table className="table table-striped" style={{ marginTop: 10 }}>

            <thead>

              <tr>

                <th>Daily Hours</th>

                <th>Description</th>

                <th>Duration</th>

                <th>Start Date</th>

                <th>End Date</th>

                <th>Monthly Wage</th>

                <th>Required Skills</th>

                <th>Location</th>

                {/* <th>Monthly Wage</th> */}

                {/* <th>Start Date</th> */}

                {/* <th>Daily Hours</th> */}

                {/* <th>End Date</th> */}

                <th colSpan="2">Action</th>

              </tr>

            </thead>

            <tbody>

              { this.tabRow() }

            </tbody>

          </table>

        </div>

      );

    }

  }