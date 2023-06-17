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
    incorrectGuesses:0,
    correctGuesses:0
  });
  return (
    <>
      <FunctionalScoreBoard />
      <FunctionalGameBoard 
        initialFishes={initialFishes}
        userInformation={userInformation}
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation)
        }}
      />
      {false && <FunctionalFinalScore />}
    </>
  );
}
