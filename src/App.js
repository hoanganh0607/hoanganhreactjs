import React from "react";
import "./App.css";
import Status from "./components/Status";
import Question from "./components/Question";

const ANSWER_TIME = 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [
        {
          question: "Con chó đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {
          question: "Con mèo đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {
          question: "Con lợn đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {
          question: "Con voi đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {
          question: "Con cá sấu đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
        {

        }
      ],
      timeLeft: ANSWER_TIME,
      currentQuestion: 0,
      displayAnswerTrue: "none",
      displayAnswerFalse: "none",
      displayQuestion: "block",
      displayResult: "none",
    }
  }


  //Chuyển câu hỏi
  nextQuestion = () => {
    if (this.state.currentQuestion <= this.state.quizzes.length - 1) {
      this.setState(state => ({
        currentQuestion: state.currentQuestion + 1
      }));
    }       
  }
  //Hoàn thành phần chơi
  result = () => {
    if(this.state.currentQuestion == this.state.quizzes.length){
      this.setState(state => ({
        displayResult: "block"
      }));
    }
  }
 
  


  render() {
    return (
      <div className="App container-fluid">
        <div className="Box">
          <Status
            totalQuestion={this.state.quizzes.length}
            currentQuestion={this.state.currentQuestion}           
          />
          <Question
            quizzes={this.state.quizzes}
            currentQuestion={this.state.currentQuestion}
            nextQuestion={this.nextQuestion}
            displayQuestion={this.state.displayQuestion}
            displayAnswerTrue={this.state.displayAnswerTrue}
            displayAnswerFalse={this.state.displayAnswerFalse}
            selectTrue={this.selectTrue}
            displayResult={this.state.displayResult}
            result={this.result}
          />
        </div>
      </div>
    );
  }
}

export default App;


