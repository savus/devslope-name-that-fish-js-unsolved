import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({
  initialFishes,
  userInformation: {fishIndex},
  handleUserInformation
}) {
  const nextFishToName = initialFishes[fishIndex];
  const [userInput, setUserInput] = useState('');
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onClick={(e) => {
        e.preventDefault();
        handleUserInformation({
          fishIndex: fishIndex + 1
        })
        setUserInput('');
      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          onChange={({target:{value}}) => setUserInput(value)}
          value={userInput}
        />
        <div>{fishIndex} {initialFishes.length}</div>
        <input type="submit" />
      </form>
    </div>
  );
}