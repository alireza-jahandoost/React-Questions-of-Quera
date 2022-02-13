import React from "react";
import { connect } from "react-redux";
import { move, restart } from "../store/actions";

import Board from "./Board";

import "./XOApp.css";

const mapStateToProps = (state) => ({
  winner: state.winner,
  board: state.board,
  turn: state.turn,
});

const mapDispatchToProps = (dispatch) => ({
  restartBoard: () => dispatch(restart()),
  moveBoard: (index) => dispatch(move(index)),
});

class XOApp extends React.Component {
  cellClicked = (index) => {
    if (this.props.board[index] === "" && this.props.winner === "") {
      this.props.moveBoard(index);
    }
  };

  restart = (event) => {
    event.preventDefault();
    this.props.restartBoard();
  };

  render() {
    return (
      <div className="app-container">
        <div>
          {this.props.winner === "" ? (
            <h1>{this.props.turn.toUpperCase()} turn!</h1>
          ) : this.props.winner === "-" ? (
            <h1>Its a tie!</h1>
          ) : (
            <h1>{this.props.winner.toUpperCase()} won!</h1>
          )}
          <Board data={this.props.board} onCellClick={this.cellClicked} />
          <div className="simulate-button" onClick={this.restart}>
            Restart!
          </div>
        </div>
      </div>
    );
  }
}

XOApp = connect(mapStateToProps, mapDispatchToProps)(XOApp);

export default XOApp;
