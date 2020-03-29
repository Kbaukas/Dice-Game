import React, { Component } from "react";
import Rando from "./Rando";

class Game extends Component {
  state = {
    name: "karolis",
    score: 0,
    clicked: false
  };

  render() {
    const keiciamScore = e => {
      // e.preventDefault();
      this.setState({ score: this.state.score + 10, clicked: true });
    };
    const dice = "\u2680";
    return (
      <div>
        <h1>
          {dice} <i class="fas fa-dice-one"></i>
        </h1>
        {this.state.score <= 50 && (
          <button onClick={keiciamScore}>
            {this.state.clicked ? "Clicked" : "Click Me!"}
          </button>
        )}
        <h1>
          {this.state.score > 50
            ? "Winner"
            : `Game 
        ${this.state.score}. Cogratulatios ${this.state.name}`}
        </h1>
        <Rando maxNum={this.state.score} />
        <i style={{ fontSize: "50px" }} class="fa fas-dice-five"></i>
        <i style={{ fontSize: "50px" }} class="fa fa-car"></i>
        <i class="fa-dice-one"></i>
      </div>
    );
  }
}

export default Game;
