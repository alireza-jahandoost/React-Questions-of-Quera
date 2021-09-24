import React, { Component } from "react";
import GraphContainer from "./GraphContainer";
import InputContainer from "./InputContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edges: [],
      positions: {},
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      Object.keys(this.state.positions).length === 0 &&
      this.state.edges.length !== 0
    ) {
      const newPositions = {};
      this.state.edges.forEach(([firstNode, secondNode]) => {
        if (newPositions[firstNode] === undefined) {
          newPositions[firstNode] = this.randomPosition(firstNode);
        }
        if (newPositions[secondNode] === undefined) {
          newPositions[secondNode] = this.randomPosition(secondNode);
        }
      });
      this.setState({ positions: newPositions });
    }
  }

  changeEdges = (newEdges) => {
    this.setState({ edges: newEdges, positions: {} });
  };

  randomPosition = (node) => {
    if (this.state.positions[node] !== undefined) {
      return this.state.positions[node];
    }
    return {
      x: Math.floor(Math.random() * 740 + 30),
      y: Math.floor(Math.random() * 440 + 30),
    };
  };

  render() {
    return (
      <div className="wrapper">
        <InputContainer changeEdges={this.changeEdges} />
        <GraphContainer
          edges={this.state.edges}
          positions={this.state.positions}
        />
      </div>
    );
  }
}

export default App;
