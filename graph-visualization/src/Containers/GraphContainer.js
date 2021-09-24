import React from "react";
import Node from "../Components/Node";
import Line from "../Components/Line";
import Text from "../Components/Text";

const GraphContainer = ({ edges, positions }) => {
  const nodes = new Set();
  edges.forEach(([firstNode, secondNode]) => {
    nodes.add(firstNode);
    nodes.add(secondNode);
  });
  const nodeItems = [...nodes].map((node) => {
    if (positions[node] === undefined) {
      return null;
    }
    return (
      <Node
        key={node}
        cx={positions[node].x}
        cy={positions[node].y}
        id={node}
        r="30"
      />
    );
  });
  const edgeItems = edges.map(([firstNode, secondNode]) => {
    if (
      positions[firstNode] === undefined ||
      positions[secondNode] === undefined
    ) {
      return null;
    }
    return (
      <Line
        key={firstNode + secondNode}
        lineId={firstNode + secondNode}
        x1={positions[firstNode].x}
        y1={positions[firstNode].y}
        x2={positions[secondNode].x}
        y2={positions[secondNode].y}
      />
    );
  });

  const textItems = [...nodes].map((node) => {
    if (positions[node] === undefined || positions[node] === undefined) {
      return null;
    }
    return (
      <Text
        key={node}
        text={node}
        nodeID={node}
        x={positions[node].x}
        y={positions[node].y}
      />
    );
  });
  return (
    <div>
      <div className="container">
        <div className="graph">
          <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            className="graph"
            aria-labelledby="title"
            role="img"
          >
            {nodeItems}
            {edgeItems}
            {textItems}
          </svg>
        </div>
      </div>
      <h2> Simple Graph Visualizer </h2>
    </div>
  );
};

export default GraphContainer;
