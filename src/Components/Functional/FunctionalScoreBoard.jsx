import "./styles/score-board.css";
//  Where the score is presented


export function FunctionalScoreBoard({
  initialFishes,
  userInformation:{fishIndex, correctGuesses, incorrectGuesses}
}) {
  
  const answersLeft = initialFishes
    .map((fish) => fish.name)
    .slice(fishIndex);

  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectGuesses}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctGuesses}</div>
    </div>
  );
}
