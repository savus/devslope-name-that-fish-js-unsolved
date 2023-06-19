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
    answersLeft: initialFishes.length,
    fishIndex: 0,
  };

  areStillAnswers = (num) => num > 0;
  render() {
    return (
      <>
        <>
          {this.areStillAnswers(this.state.answersLeft) && (
            <ClassScoreBoard
              fishList={initialFishes}
              userInformation={this.state}
            />
          )}
          {this.areStillAnswers(this.state.answersLeft) && (
            <ClassGameBoard
              initialFishes={initialFishes}
              userInformation={this.state}
              handleUserInformation={(userInformation) => {
                this.setState(userInformation);
              }}
              areStillAnswers={this.areStillAnswers}
            />
          )}
        </>
        {!this.areStillAnswers(this.state.answersLeft) && (
          <ClassFinalScore
            correctAnswers={this.state.correctAnswers}
            totalCount={initialFishes.length}
          />
        )}
      </>
    );
  }
}
