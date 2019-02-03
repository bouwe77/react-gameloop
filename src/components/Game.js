import React from "react";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameRunning: false,
      interval: 100,
      dummy: 0
    };
  }

  changeInterval = event => {
    if (!this.state.gameRunning) {
      this.setState({
        interval: event.target.value
      });
    }
  };

  startGame = () => {
    if (!this.state.gameRunning) {
      this.setState(
        {
          gameRunning: true
        },
        () => {
          this.intervalRef = setInterval(
            () => this.runGame(),
            this.state.interval
          );
        }
      );
    }
  };

  stopGame = () => {
    this.setState(
      {
        gameRunning: false
      },
      () => {
        if (this.intervalRef) {
          clearInterval(this.intervalRef);
        }
      }
    );
  };

  runGame = () => {
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
