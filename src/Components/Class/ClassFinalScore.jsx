import { Component } from "react";

export class ClassFinalScore extends Component {
  render() {
    const { correctAnswers, totalCount } = this.props;
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{correctAnswers}</p>
          <hr />
          <p>{totalCount}</p>
        </div>
      </div>
    );
  }
}
