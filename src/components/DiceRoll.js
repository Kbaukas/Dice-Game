import React, { Component } from "react";
import "./DiceRoll.css";

class DiceRoll extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const number = this.props.number;
    console.log(number);
    let diceNr;
    switch (number) {
      case 1:
        diceNr = "one";
        break;
      case 2:
        diceNr = "two";
        break;
      case 3:
        diceNr = "three";
        break;
      case 4:
        diceNr = "four";
        break;
      case 5:
        diceNr = "five";
        break;
      case 6:
        diceNr = "six";
        break;
      default:
        diceNr = "one";
    }
    return (
      <div className="roll">
        <div>
          <i
            className={`fas fa-dice-${diceNr}
            ${this.props.isRolling && "animacija"}`}
          ></i>
        </div>
      </div>
    );
  }
}

export default DiceRoll;
