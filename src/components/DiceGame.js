import React, { Component } from "react";
import DiceRoll from "./DiceRoll";
import "./DiceGame.css";

class DiceGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dice1: 1,
      dice2: 1,
      isrolling: false
    };
  }

  render() {
    const clickHandler = e => {
      this.setState({
        dice1: Math.floor(Math.random() * 6 + 1),
        dice2: Math.floor(Math.random() * 6 + 1),
        isrolling: true
      });
      setTimeout(() => {
        this.setState({ isrolling: false });
      }, 1000);
    };

    // let number = Math.floor(Math.random() * 6 + 1);

    return (
      <div className="DiceGame">
        <h1>Dice Game</h1>
        <div className="Dices">
          <DiceRoll
            isRolling={this.state.isrolling}
            number={this.state.dice1}
          />
          <DiceRoll
            isRolling={this.state.isrolling}
            number={this.state.dice2}
          />
        </div>

        <button
          isRolling={this.state.isrolling}
          onClick={clickHandler}
          disabled={this.state.isrolling}
        >
          {this.state.isrolling ? "Is Rolling..." : "Please Roll"}
        </button>
      </div>
    );
  }
}

export default DiceGame;
