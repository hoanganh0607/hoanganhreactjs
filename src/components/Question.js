import React from "react";


function Question(props) {
  const quiz = props.quizzes[props.currentQuestion];

  return (
    <main>
      <div className="Body" style={{display: props.displayQuestion}}>
        <div className="Question">{quiz.question}</div>
        <div className="PossibleAnwsers">
          {quiz.answers.map((answer, index) => (
            <div
            className={props.userSelectClass[index]}
              key={index}
              onClick={() => {
                props.selectQuestion(index, answer, quiz.answerTrue);
              }}
            >
              <div className="AnswerIndex">{index}</div>
              <div className="AnswerContent">{answer}</div>
              <div className="WrongAnswer" style={{display: props.displayWrongAnswer[index]}}>Không chính xác, đáp án đúng là: {quiz.answerTrue}</div>
              
            </div>
          ))}
        </div>
        
      </div>
      <div className="Footer">
        <button className="Button ButtonSmall btn btn-secondary btn-new score" style={{display: props.displayQuestionButton}} onClick={props.nextQuestion} >
          Câu hỏi tiếp theo
        </button>
        <div className="score" style={{display: props.displayScore}}>Số câu trả lời đúng: {props.score}</div>
        <button className="Button ButtonSmall btn btn-secondary btn-new score" style={{display: props.displayResultButton}} onClick={props.result}>Hoàn thành</button>
      </div>

      <div className="result" style={{display: props.displayResult}}>
        <div className="resultPlay">Chúc mừng bạn đã hoàn thành phần chơi</div>
        <div>Số câu trả lời đúng của bạn là: {props.score}</div>
        <div className="playReload" style={{display: props.playReload}} onClick={props.playReloadButton}>Chơi lại</div>
      </div>
    </main>
  );
}

export default Question;
