import React, { useState } from "react";
import Bar from "../Components/Bar";
import Input from "../Components/Input";
import zxcvbn from "zxcvbn";

const Password = ({ strength }) => {
  const [password, setPassword] = useState("");
  const [passwordScore, setPasswordScore] = useState(-1);
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === "") {
      setPasswordScore(-1);
      setSuggestion("");
    } else {
      const { score, feedback } = zxcvbn(value);
      setPasswordScore(score);
      setSuggestion(feedback.suggestions.join(""));
    }
  };

  const { text, bgColor } =
    passwordScore === -1
      ? { text: "", bgColor: "white" }
      : strength[passwordScore];

  return (
    <div>
      <Input type="text" value={password} onChange={handleChange} />
      <Bar width={(passwordScore + 1) * 140} height={"5px"} bgColor={bgColor} />
      <h4 id="result">{passwordScore === -1 ? "Enter Your Password" : text}</h4>
      <p id="suggestion">{suggestion}</p>
    </div>
  );
};

export default Password;
