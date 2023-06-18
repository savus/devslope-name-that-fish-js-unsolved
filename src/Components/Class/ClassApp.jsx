import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
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


export class ClassApp extends Component {
  state = {
    fishIndex:0,
    incorrectCount: 0,
    correctCount: 0,
  };

  render() {
    return (
      <>
        <>
          <ClassScoreBoard />
          <ClassGameBoard 
            initialFishes={initialFishes}
            userInformation={this.state}
            handleUserInformation = {(state) => {
              this.setState(state);
            }}
          />
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
