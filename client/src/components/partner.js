import React, { Component } from 'react';
import PropTypes from 'prop-types';

class partner extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.getPartners();
    }

  render() {
      return(
          <form onSubmit={this.onSubmit}>
              
    <input 
    type= 'submit'
    value= 'Show Partners'
    className= 'btn'
    style={{flex:3}}
    />
    </form>
      )
  }
}
partner.propTypes = {
  getPartners: PropTypes.func.isRequired
}

export default partner;