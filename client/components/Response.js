import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Response extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ''
    }
  }
  render(){
    return (
      <div id={'response'} data-testid="response">
        <input
          type='text'
          placeholder='Answers go here!'
         {/* handle data change */}
         {/* handle when 'enter' is hit */}
          >
        </input>
        </div>
    )
  }
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}

export default Response;
