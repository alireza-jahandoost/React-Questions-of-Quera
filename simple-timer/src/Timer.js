import React, { Component } from "react";
import "./Timer.css";

export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      currentInterval: null,
    };
  }

  componentDidMount() {
    this.setState({
      currentInterval: setInterval(
        () =>
          this.setState((prevState) => ({
            time: prevState.time + 1,
          })),
        1000
      ),
    });
  }
  componentWillUnmount() {
    if (this.state.currentInterval !== null) {
      clearInterval(this.state.currentInterval);
    }
  }

  clearTime() {
    if (this.state.currentInterval !== null) {
      clearInterval(this.state.currentInterval);
    }
    this.setState({
      currentInterval: setInterval(
        () =>
          this.setState((prevState) => ({
            time: prevState.time + 1,
          })),
        1000
      ),
      time: 0,
    });
  }

  render() {
    const { time } = this.state;

    return (
      <div className="container">
        <div className="timer">{time}</div>
        <button onClick={() => this.clearTime()}>Reset Timer</button>
      </div>
    );
  }
}
