import React from "react";

const Clue = (props) => {
  if (props.selected) {
    return( 
      <div
        data-testid="clue" 
        onClick={() => props.selectQuestion(props.clueObject) }
      >
        {props.clueObject.question}
      </div>
    );
  } else if (!props.answered) {
    if(props.clueObject.value === null){
      return (
        <div
          className={'clueValue'}
          data-testid="value"
          onClick={() => props.selectQuestion(props.clueObject)}
        >
          $200
        </div>
      );
    }else{
      return (
        <div
          className={'clueValue'}
          data-testid="value"
          onClick={() => props.selectQuestion(props.clueObject)}
        >
          ${props.clueObject.value}
        </div>
      ); 
    }
    
  }
  else {
    return (
    <div
      className={'clueValue'}
      data-testid="value"
    >
    </div>
    )
  }
};

export default Clue;
