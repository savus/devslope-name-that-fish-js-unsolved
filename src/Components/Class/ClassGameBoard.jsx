import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput:''
  };

  render() {
    
    const initialFishes = this.props.initialFishes;
    const {incorrectCount, correctCount, fishIndex} = this.props.userInformation;
    const nextFishToName = initialFishes[fishIndex];
    const handleUserInformation = this.props.handleUserInformation;
    this.didGuessFish = () => this.userInput === nextFishToName;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form id="fish-guess-form" onSubmit={(e) => {
          e.preventDefault();
          handleUserInformation({fishIndex: fishIndex + 1});
        }}>
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess" 
            onChange={({target: {value}}) => this.setState({userInput: value})}
            value={this.state.userInput}  
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
