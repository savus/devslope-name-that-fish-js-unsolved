import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ handleGuess, fishIndex }) {
  const [userInput, setUserInput] = useState("");
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
          setUserInput("");
        }}
      >
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={({ target: { value } }) => setUserInput(value)}
          value={userInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
