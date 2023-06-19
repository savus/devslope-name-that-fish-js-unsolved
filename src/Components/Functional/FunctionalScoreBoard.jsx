import "./styles/score-board.css";
//  Where the score is presented

export function FunctionalScoreBoard({
  userInformation: { incorrectAnswers, correctAnswers, fishIndex },
  fishList,
}) {
  const answersLeft = fishList.map((fish) => fish.name).slice(fishIndex);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectAnswers}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctAnswers}</div>
    </div>
  );
}
