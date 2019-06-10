import React from 'react';
import PropTypes from 'prop-types';

const Response = (props) => {
  /*
    This should be a pretty straightforward stateless component: a nice text <input> box which compares the typed answers against the 
    correct answers supplied by the API. Another opportunity to practice capturing state and passing it up to its parent (<App />) via
    a bound function 
  */
  return (
    <div id={'response'} data-testid="response">
      <input
        type='text'
        placeholder='Answers go here!'
        onChange={event => props.recordResponse(event.target.value)}
        onKeyDown={event => event.key==="Enter" ? props.submitResponse(event) : null }
        >
      </input>
      </div>
  )
}

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}

export default Response;