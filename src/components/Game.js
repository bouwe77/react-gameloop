import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.interval = 100;

    this.state = {
      gameRunning: false,
      dummy: 0
    };
  }

  startGame = () => {
    if (this.state.gameRunning) return;

    this.setState(
      {
        gameRunning: true
      },
      () => {
        this.intervalRef = setInterval(() => this.update(), this.interval);
      }
    );
  };

  stopGame = () => {
    this.setState(
      {
        gameRunning: false
      },
      () => {
        if (this.intervalRef) clearInterval(this.intervalRef);
      }
    );
  };

  update = () => {
    this.setState({
      dummy: this.state.dummy + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.startGame}>Start</button>
        <button onClick={this.stopGame}>Stop</button>
        Dummy: {this.state.dummy}
      </div>
    );
  }
}

export default Game;
