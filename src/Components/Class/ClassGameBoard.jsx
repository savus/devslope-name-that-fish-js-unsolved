import { Component } from "react";
import "./styles/game-board.css";


export class ClassGameBoard extends Component {
  state = {
    userInput:''
  };
  render() {
    const initialFishes = this.props.initialFishes;
    const {
      fishIndex,
      correctAnswers,
      incorrectAnswers,
      answersLeft
    } = this.props.userInformation;
    const handleUserInformation = this.props.handleUserInformation;
    const areStillAnswers = this.props.areStillAnswers;
    const nextFishToName = initialFishes[fishIndex];
    const {userInput} = this.state;
    this.isLastFish = () => fishIndex === initialFishes.length - 1;
    this.didGuessFish = () => userInput === nextFishToName.name;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => {
          e.preventDefault();
          handleUserInformation({
            fishIndex: fishIndex + (!this.isLastFish() ? 1 : 0),
            correctAnswers: correctAnswers + (this.didGuessFish() && areStillAnswers(answersLeft) ? 1 : 0),
            incorrectAnswers: incorrectAnswers + (!this.didGuessFish() && areStillAnswers(answersLeft) ? 1 : 0),
            answersLeft: answersLeft - (areStillAnswers(answersLeft) ? 1 : 0)
          });
          this.setState({userInput: ''});
        }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess" 
            onChange={({target:{value}}) => this.setState({userInput: value})}
            value={userInput}
          />
          <div>correct: {correctAnswers} incorrect: {incorrectAnswers} answersLeft: {answersLeft}</div>

          <input type="submit" />
        </form>
      </div>
    );
  }
}