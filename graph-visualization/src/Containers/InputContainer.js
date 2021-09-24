import React, { useState } from "react";
import Button from "../Components/Button";

const InputContainer = ({ changeEdges }) => {
  const [inputValue, setInputValue] = useState("");

  const onCreate = () => {
    const edges = inputValue
      .split("\n")
      .map((stringedEdge) => {
        const regex = /(\w+) +(\w+)/;
        const nodes = regex.exec(stringedEdge);
        if (!nodes || nodes.length !== 3) return null;
        return [nodes[1], nodes[2]];
      })
      .filter((edge) => edge && edge.length === 2);
    console.log(edges);
    changeEdges(edges);
  };
  const onClean = () => {
    changeEdges([]);
  };
  return (
    <div>
      <div className="input-container">
        <textarea
          id="graph-input"
          className="input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        ></textarea>
      </div>
      <div className="btn-container">
        <Button text="Create" onClick={onCreate} BtnId="create-btn" />
        <Button text="Clean" onClick={onClean} BtnId="clean-btn" />
      </div>
    </div>
  );
};

export default InputContainer;
