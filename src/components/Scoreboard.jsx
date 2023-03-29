import React from "react";

const Scoreboard = (props) => {
  return (
    <div id="scoreboard" data-testid="scoreboard">
      ${props.score}
      <p></p>
      <br />
      <p id="player">{props.player}</p>
    </div>
  );
};

export default Scoreboard;
