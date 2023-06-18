import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({
  initialFishes,
  userInformation:{fishIndex, correctGuesses, incorrectGuesses, answersLeft},
  handleUserInformation,
  stillAnswers
}) {
  
  const nextFishToName = initialFishes[fishIndex];
  const [userInput, setUserInput] = useState('');
  const didGuessFish = () => (userInput === nextFishToName.name);
  const isLastFish = (fishIndex === initialFishes.length - 1);

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => {
        e.preventDefault();
        handleUserInformation({
          fishIndex: fishIndex + (!isLastFish ? 1 : 0),
          correctGuesses: correctGuesses + (didGuessFish() && stillAnswers(answersLeft) ? 1 : 0),
          incorrectGuesses: incorrectGuesses + (!didGuessFish() && stillAnswers(answersLeft) ? 1 : 0),
          answersLeft: stillAnswers(answersLeft) ? answersLeft - 1 : 0 
        });
        setUserInput('');
      }}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          onChange={({target:{value}}) => setUserInput(value)}
          value={userInput}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
























// export function FunctionalGameBoard({initialFishes, userInformation:{fishIndex, incorrectGuesses, correctGuesses}, handleUserInformation}) {
//   const nextFishToName = initialFishes[fishIndex];
//   const [userInput, setUserInput] = useState('');
//   const didGuessFish = () => (userInput === nextFishToName.name);
//   return (
//     <div id="game-board">
//       <div id="fish-container">
//         <img src={nextFishToName.url} alt={nextFishToName.name} />
//       </div>
//       <form id="fish-guess-form" onSubmit={(e) => {
//         e.preventDefault();
//         const isLast = (fishIndex === initialFishes.length - 1);
//         if (!isLast) {
//           handleUserInformation({
//             fishIndex: fishIndex + 1,
//             incorrectGuesses: incorrectGuesses + (!didGuessFish() ? 1 : 0), 
//             correctGuesses: correctGuesses + (didGuessFish() ? 1 : 0)
//           })
//         }

//         setUserInput('');
//       }}>
//         <label htmlFor="fish-guess">What kind of fish is this?</label>
//         <input 
//           type="text" 
//           name="fish-guess" 
//           onChange={({target:{value}}) => setUserInput(value)}
//           value={userInput}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
