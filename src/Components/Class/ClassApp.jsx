import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassApp extends Component {
  state = {
    incorrectAnswers: 0,
    correctAnswers: 0,
    fishIndex: 0,
  };

  render() {
    const { correctAnswers, fishIndex, incorrectAnswers } = this.state;
    this.doAnswersStillExist = initialFishes.length - fishIndex > 0;

    this.handleGuess = (guess) => {
      this.setState({ fishIndex: fishIndex + 1 });
      if (initialFishes[fishIndex].name === guess) {
        this.setState({ correctAnswers: correctAnswers + 1 });
      } else {
        this.setState({ incorrectAnswers: incorrectAnswers + 1 });
      }
    };

    return (
      <>
        <>
          {this.doAnswersStillExist && (
            <ClassScoreBoard
              fishList={initialFishes}
              fishIndex={fishIndex}
              incorrectAnswers={incorrectAnswers}
              correctAnswers={correctAnswers}
            />
          )}
          {this.doAnswersStillExist && (
            <ClassGameBoard
              fishList={initialFishes}
              fishIndex={fishIndex}
              handleGuess={this.handleGuess}
            />
          )}
        </>
        {!this.doAnswersStillExist && (
          <ClassFinalScore
            correctAnswers={correctAnswers}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
