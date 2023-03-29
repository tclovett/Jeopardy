import React, { useState } from "react";

const Response = (props) => {
  const [userResponse, setUserResponse] = useState("");

  const recordResponse = (event) => {
    
  };

  const submitResponse = (event) => {
    if(props.currentQuestion.question) {
      if (event.keyCode === 13) {
        setUserResponse(event.target.value);
        const answer = event.target.value;
        props.checkAnswer(props.currentQuestion, answer);
        event.target.value = '';
      }
    }
  };

  return (
    <div id="response" data-testid="response">
      <input
        type="text"
        placeholder="Answers go here!"
        onKeyDown={submitResponse}
        // handle data change
        // handle when 'enter' is hit
      />
    </div>
  );
};

export default Response;
