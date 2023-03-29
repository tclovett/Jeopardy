import React from "react";
import Clue from "./Clue";
const Category = (props) => {
  return (
    <div className="category" data-testid="category">
      <div className="categoryTitle">{props.title.toUpperCase()}</div>
      {props.clues.map((el, index) => index < 5 
          ? (<Clue
              clueObject={el}
              key={el.id}
              selectQuestion={props.selectQuestion}
              selected={props.currentQuestion.id === el.id ? true : false}
              answered={props.answeredQuestions.includes(el.id)}
            />) 
          : null
        )}
    </div>
  );
};

export default Category;
