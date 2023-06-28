import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { answersLeft, incorrectAnswers, correctAnswers } =
      this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectAnswers}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctAnswers}</div>
      </div>
    );
  }
}
