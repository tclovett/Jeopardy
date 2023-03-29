import React from "react";

const Button = (props) => {
    return (
        <button
      id={props.currentQuestion.question ? "answer" : "generate"}
      onClick={props.currentQuestion.question ? props.showAnswer : props.generate}
        >
        {props.currentQuestion.question ? "Show Answer" : "Generate New Questions: Values are Random!"}
    </button>
    )
}

export default Button;