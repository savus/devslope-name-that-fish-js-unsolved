import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    userInput: "",
  };
  render() {
    const { fishIndex, handleGuess } = this.props;
    const { userInput } = this.state;

    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishIndex.url} alt={fishIndex.name} />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleGuess(userInput);
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
