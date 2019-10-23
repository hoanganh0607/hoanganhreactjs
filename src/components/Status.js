import React from "react";

function Status(props) {
  const progress = (props.currentQuestion / props.totalQuestion) * 100;
  const currentQuestionNew = props.currentQuestion + 1
  return (
    <div className="Header">
      <div className="LeftSide">
        <div className="ProgressBar" style={{ width: (progress * 350) / 100 }}>
          <span className="Percent">{progress}%</span>
        </div>
      </div>
      <div className="RightSide">
        <div className="CurrentQuestion">{currentQuestionNew}/{props.totalQuestion}</div>
      </div>
    </div>
  );
}

export default Status;
