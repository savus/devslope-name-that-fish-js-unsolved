import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  listOfFish,
  fishIndex,
  incorrectAnswers,
  correctAnswers,
}) {
  const remainingNames = listOfFish.map((fish) => fish.name).slice(fishIndex);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectAnswers}</div>
      <div id="choices-left">
        {remainingNames.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctAnswers}</div>
    </div>
  );
}
