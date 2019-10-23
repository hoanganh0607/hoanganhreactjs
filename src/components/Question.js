import React from "react";

function selectQuestion(answer, answerTrue) {
  if (answer == answerTrue) {
    alert("chinh xac")
  } else {
    alert("Khong chinh xac");
  }
}

function Question(props) {
  const quiz = props.quizzes[props.currentQuestion];

  return (
    <main>
      <div className="Body" style={{display: props.displayQuestion}}>
        <div className="Question">{quiz.question}</div>
        <div className="PossibleAnwsers">
          {quiz.answers.map((answer, index) => (
            <div
              className="Anwser"
              key={index}
              onClick={() => {
                selectQuestion(answer, quiz.answerTrue);
              }}
            >
              <div className="AnwserIndex">{index}</div>
              <div className="AnwserContent">{answer}</div>
              <div className="True" style={{display: props.displayAnswerTrue}} >Đúng</div>
              <div className="False" style={{display: props.displayAnswerFalse}} >Sai</div>
            </div>
          ))}
        </div>
      </div>
      <div className="Footer">
        <button className="Button ButtonSmall btn btn-secondary" onClick={props.nextQuestion} >
          Next Question
        </button>
        <button className="Button ButtonSmall btn btn-secondary" style={{display: props.displayResult}} onClick={props.result}>Hoàn thành</button>
      </div>

      <div className="result" style={{display: props.displayResult}}>
        <div className="resultPlay">Chúc mừng bạn đã hoàn thành phần chơi</div>
      </div>
    </main>
  );
}

export default Question;
