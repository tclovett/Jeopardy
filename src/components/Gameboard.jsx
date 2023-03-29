import React from "react";
import Categories from "./Categories";
import Clue from "./Clue";

const Gameboard = (props) => {
  return (
<div data-testid='gameboard' id={props.currentQuestion.question ? 'question' :'gameboard'}>
      {props.currentQuestion.question 
      ? <Clue 
          clueObject={props.currentQuestion} 
          selectQuestion={props.selectQuestion}
          selected={true} 
      /> 
      : <Categories
        {...props}
          // categories={props.categories}
          // selectQuestion={props.selectQuestion}
          // currentQuestion={props.currentQuestion}
          // answeredQuestions={props.answeredQuestions}
      />}
    </div>
  );
};

export default Gameboard;
