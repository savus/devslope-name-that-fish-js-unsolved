import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput: "",
  };
  render() {
    const {
      initialFishes,
      areStillAnswers,
      handleUserInformation,
      userInformation: {
        fishIndex,
        correctAnswers,
        incorrectAnswers,
        answersLeft,
      },
    } = this.props;
    const nextFishToName = initialFishes[fishIndex];
    const { userInput } = this.state;
    this.isLastFish = () => fishIndex === initialFishes.length - 1;
    this.didGuessFish = () => userInput === nextFishToName.name;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUserInformation({
              fishIndex: fishIndex + (!this.isLastFish() ? 1 : 0),
              correctAnswers:
                correctAnswers +
                (this.didGuessFish() && areStillAnswers(answersLeft) ? 1 : 0),
              incorrectAnswers:
                incorrectAnswers +
                (!this.didGuessFish() && areStillAnswers(answersLeft) ? 1 : 0),
              answersLeft: areStillAnswers(answersLeft) ? answersLeft - 1 : 0,
            });
            this.setState({ userInput: "" });
          }}
        >
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            name="fish-guess"
            onChange={({ target: { value } }) =>
              this.setState({ userInput: value })
            }
            value={userInput}
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}
