import React from "react";
import Category from "./Category";
const Categories = (props) => {
  return (
    <div id="categories" data-testid="categoryList">
      {props.categories.map((el, index) => (
        <Category
          key={index}
          clues={el.clues}
          title={el.title}
          selectQuestion={props.selectQuestion}
          currentQuestion={props.currentQuestion}
          answeredQuestions={props.answeredQuestions}
        />
      ))}

    </div>
  );
};

export default Categories;
