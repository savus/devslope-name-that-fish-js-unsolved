import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({
  initialFishes,
  userInformation: {
    fishIndex, 
    incorrectAnswers, 
    correctAnswers,
    answersLeft 
  },
  handleUserInformation,
  areStillAnswers
}) {
  const nextFishToName = initialFishes[fishIndex];
  const [userInput, setUserInput] = useState('');
  const isLastFish = () => fishIndex === initialFishes.length - 1;
  const didGuessFish = () => userInput === nextFishToName.name;
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault();
        handleUserInformation({
          fishIndex: fishIndex + (!isLastFish() ? 1 : 0),
          incorrectAnswers: incorrectAnswers + (!didGuessFish() && areStillAnswers(answersLeft) ? + 1 : 0), 
          correctAnswers: correctAnswers + (didGuessFish() && areStillAnswers(answersLeft) ? + 1 : 0), 
          answersLeft: (areStillAnswers(answersLeft) ? answersLeft - 1 : 0) 
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
        <div>correct: {correctAnswers} incorrect: {incorrectAnswers} answersLeft: {answersLeft}</div>
        <input type="submit" />
      </form>
    </div>
  );
}