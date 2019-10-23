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
          question: "Con người đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "2"
        },
        {
          question: "Con chim cánh cụt đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "2"
        },
        {
          question: "Con cá sấu đi bằng mấy chân?",
          answers: ["1", "2", "3", "4"],
          answerTrue: "4"
        },
      ],
      timeLeft: ANSWER_TIME,
      currentQuestion: 0,
      userSelectClass: ["Answer", "Answer", "Answer", "Answer", "Answer"],
      isSelectAnswer: false,
      displayQuestion: "block",
      displayResultButton: "none",
      displayQuestionButton: "block",
      displayResult: "none",
      displayScore: "inline-block",
      score: 0
    }
  }

  selectQuestion = (index, answer, answerTrue) => {
    if (!this.state.isSelectAnswer) {
      // Highlight đáp án người dùng chọn
      // TODO: Hiển thị đáp án đúng sai và tính điểm
      const scoreNew = this.state.score
      const newUserSelectClass = this.state.userSelectClass.map(
        (selectClass, i) => {

          if (i === index && answer === answerTrue) {
            selectClass = "Answer true";
            this.setState({
              score: scoreNew + 1
            })
          }
          if (i === index && answer !== answerTrue) {
            selectClass = "Answer false";
          }
          return selectClass;
        }
      );

      this.setState({
        userSelectClass: newUserSelectClass,
        isSelectAnswer: true
      });
    }
  };

  //Chuyển câu hỏi
  nextQuestion = () => {
    if (this.state.currentQuestion < this.state.quizzes.length - 1) {
      this.setState({
        userSelectClass: ["Answer", "Answer", "Answer", "Answer"],
        currentQuestion: this.state.currentQuestion + 1,
        isSelectAnswer: false
      });
    }
    //Hiển thị nút hoàn thành
    if (this.state.currentQuestion + 1 === this.state.quizzes.length) {
      this.setState(state => ({
        displayQuestionButton: "none",
        displayResultButton: "block",

      }));
    }
  }
  //Hoàn thành phần chơi
  result = () => {
    this.setState(state => ({
      displayResult: "block",
      displayQuestion: "none",
      displayScore: "none",
      displayResultButton: "none"
    }));

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
            totalQuestion={this.state.quizzes.length}
            quizzes={this.state.quizzes}
            currentQuestion={this.state.currentQuestion}
            userSelectClass={this}
            nextQuestion={this.nextQuestion}
            displayQuestion={this.state.displayQuestion}
            displayResult={this.state.displayResult}
            result={this.result}
            displayQuestionButton={this.state.displayQuestionButton}
            displayResultButton={this.state.displayResultButton}
            score={this.state.score}
            displayScore={this.state.displayScore}

            selectQuestion={this.selectQuestion}
            userSelectClass={this.state.userSelectClass}


          />
        </div>
      </div>
    );
  }
}

export default App;


