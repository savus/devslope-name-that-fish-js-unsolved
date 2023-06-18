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
  const [userInformation, setUserInformation] = useState({
    fishIndex:0,
    correctGuesses:0,
    incorrectGuesses:0,
    answersLeft: initialFishes.length
  });

  const stillAnswers = (num) => num > 0;

  return (
    <>
      { stillAnswers(userInformation.answersLeft) &&<FunctionalScoreBoard 
        initialFishes={initialFishes}
        userInformation={userInformation}
      />}
      { stillAnswers(userInformation.answersLeft) && <FunctionalGameBoard 
        initialFishes={initialFishes}
        userInformation={userInformation}
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation);
        }}
      />}
      { !stillAnswers(userInformation.answersLeft) && <FunctionalFinalScore />}
    </>
  );
}
