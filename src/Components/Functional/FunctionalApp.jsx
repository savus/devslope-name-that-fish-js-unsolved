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
    answersLeft:initialFishes.length
  });

  const areStillAnswers = (num) => num > 0;

  return (
    <>
      {areStillAnswers(userInformation.answersLeft) && (<FunctionalScoreBoard />)}
      {areStillAnswers(userInformation.answersLeft) && (
        <FunctionalGameBoard 
          initialFishes={initialFishes}
          userInformation={userInformation}
          handleUserInformation={(userInformation) => {
            setUserInformation(userInformation);
          }}
        />
      )}
      {!areStillAnswers(userInformation.answersLeft) && (<FunctionalFinalScore />)}
    </>
  );
}