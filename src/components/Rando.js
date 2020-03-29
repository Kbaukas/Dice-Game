import React, { Component } from "react";

class Rando extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 1
    };
    this.makeTimer();
  }
  makeTimer() {
    setInterval(() => {
      this.setState({ num: Math.floor(Math.random() * this.props.maxNum) });
    }, 1000);
  }
  render() {
    let str = "\uf526";
    return (
      <div>
        <div></div>
        <h1>
          {this.state.num}
          {str}{" "}
        </h1>
      </div>
    );
  }
}

export default Rando;
