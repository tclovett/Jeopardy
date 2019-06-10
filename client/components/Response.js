import React from 'react';
import PropTypes from 'prop-types';

const Response = (props) => {
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

Response.propTypes = {
  recordResponse: PropTypes.func,
  submitResponse: PropTypes.func,
}

export default Response;