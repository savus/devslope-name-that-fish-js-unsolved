import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { useState } from "react";
import { Images } from "../../assets/Images";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export function FunctionalApp() {
  const [fishIndex, setFishIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [answersLeft, setAnswersLeft] = useState(initialFishes.length);
  const doAnswersStillExist = answersLeft > 0;

  const handleGuess = (guess) => {
    setFishIndex(fishIndex + 1);
    if (initialFishes[fishIndex].name === guess) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setAnswersLeft(answersLeft - 1);

    console.log(fishIndex, correctAnswers, incorrectAnswers, answersLeft);
  };

  return (
    <>
      {doAnswersStillExist && (
        <FunctionalScoreBoard 
          listOfFish={initialFishes}
          incorrectAnswers={incorrectAnswers}
          correctAnswers={correctAnswers}
          fishIndex={fishIndex}  
        />
      )}
      {doAnswersStillExist && (
        <FunctionalGameBoard
          listOfFish={initialFishes}
          handleGuess={handleGuess}
          fishIndex={fishIndex}
        />
      )}
      {!doAnswersStillExist && (
        <FunctionalFinalScore
          correctAnswers={correctAnswers}
          totalCount={initialFishes.length}
        />
      )}
    </>
  );
}
