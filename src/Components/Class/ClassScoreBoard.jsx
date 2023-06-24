import { Component } from "react";
import "./styles/score-board.css";

export class ClassScoreBoard extends Component {
  render() {
    const { fishList, fishIndex, incorrectAnswers, correctAnswers } =
      this.props;
    const remainingFish = fishList.map((fish) => fish.name).slice(fishIndex);
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectAnswers}</div>
        <div id="choices-left">
          {remainingFish.map((answer) => (
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
