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
          answers: ["1 chân", "2 chân", "3 chân", "4 chân"],
          answerTrue: "4 chân"
        },
        {
          question: "Con mèo đi bằng mấy chân?",
          answers: ["1 chân", "2 chân", "3 chân", "4 chân"],
          answerTrue: "4 chân"
        },
        {
          question: "Con người đi bằng mấy chân?",
          answers: ["1 chân", "2 chân", "3 chân", "4 chân"],
          answerTrue: "2 chân"
        },
        {
          question: "Con chim cánh cụt đi bằng mấy chân?",
          answers: ["1 chân", "2 chân", "3 chân", "4 chân"],
          answerTrue: "2 chân"
        },
        {
          question: "Con cá sấu đi bằng mấy chân?",
          answers: ["1 chân", "2 chân", "3 chân", "4 chân"],
          answerTrue: "4 chân"
        },
      ],
      timeLeft: ANSWER_TIME,
      currentQuestion: 0,
      userSelectClass: ["Answer", "Answer", "Answer", "Answer", "Answer"],
      isSelectAnswer: false,
      progressBar: 0,
      displayQuestion: "block",
      displayResultButton: "none",
      displayQuestionButton: "block",
      displayResult: "none",
      displayScore: "inline-block",
      displayPlayReload: "none",
      displayWrongAnswer: ["none", "none", "none", "none", "none"],
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
            this.setState({
              displayWrongAnswer: "block",
            })
          }
          return selectClass;
        }
      );
      //Hiển thị đáp án đúng khi trả lời sai
      const newWrongAnswer = this.state.displayWrongAnswer.map(
        (WrongAnswer, i) => {
          if (i === index && answer !== answerTrue) {
            WrongAnswer = "inline-block";
          }
          return WrongAnswer;
        }
      );
      this.setState({
        displayWrongAnswer: newWrongAnswer,
        userSelectClass: newUserSelectClass,
        isSelectAnswer: true,

      });
    }
  };

  //Chuyển câu hỏi
  nextQuestion = () => {
    if (this.state.currentQuestion < this.state.quizzes.length - 1) {
      console.log(this.progressBar)
      this.setState({
        userSelectClass: ["Answer", "Answer", "Answer", "Answer", "Answer"],
        displayWrongAnswer: ["none", "none", "none", "none", "none"],
        currentQuestion: this.state.currentQuestion + 1,
        isSelectAnswer: false,
      });
    }
    //Hiển thị nút hoàn thành
    if (this.state.currentQuestion + 1 === this.state.quizzes.length) {
      this.setState(state => ({
        displayQuestionButton: "none",
        displayResultButton: "block",
        //hiển thị thanh tiến độ 100%
        progressBar: 100 - ((state.quizzes.length - 1) / state.quizzes.length * 100)
      }));
    }
  }
  //Kết quả phần chơi
  result = () => {
    this.setState({
      displayResult: "block",
      displayQuestion: "none",
      displayScore: "none",
      displayResultButton: "none",
      displayPlayReload: "inline-block"
    });
  }
  //Chơi lại
  playReloadButton = () => {
    window.location.reload();
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="Box">
          <Status
            totalQuestion={this.state.quizzes.length}
            currentQuestion={this.state.currentQuestion}
            progressBar={this.state.progressBar}

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
            playReload={this.state.displayPlayReload}
            playReloadButton={this.playReloadButton}
            displayWrongAnswer={this.state.displayWrongAnswer}
          />
        </div>
      </div>
    );
  }
}

export default App;


