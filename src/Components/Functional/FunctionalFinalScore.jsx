import "./styles/final-score.css";
export const FunctionalFinalScore = ({ correctAnswers, totalCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctAnswers}</p>
      <hr />
      <p>{totalCount}</p>
    </div>
  </div>
);
