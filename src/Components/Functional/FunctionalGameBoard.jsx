import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({
  listOfFish,
  handleGuess,
  fishIndex
}) {
  const nextFishToName = listOfFish[fishIndex];
  const [userInput, setUserInput] = useState("");
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
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
