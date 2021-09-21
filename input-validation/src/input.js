import React, { useState } from "react";
import { validate } from "./validators";

const INPUT_STATES = {
  UNTOUCHED: "UNTOUCHED",
  VALID: "VALID",
  INVALID: "INVALID",
};

const Input = ({ type, label, id, validators, errorText }) => {
  const [hasError, setHasError] = useState(false);
  const [blured, setBlured] = useState(false);

  const checkErrors = (e) => {
    const value = e.target.value;
    const checkInputValidation = validate(value, validators);
    if (checkInputValidation === hasError) {
      setHasError(!checkInputValidation);
    }
  };

  const handleBlur = (e) => {
    if (!blured) {
      checkErrors(e);
      setBlured(true);
    }
  };

  return (
    <div
      className={`form-input ${
        blured && hasError ? "form-input--invalid" : ""
      }`}
      data-testid="form-input"
    >
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} onChange={checkErrors} onBlur={handleBlur} />
      <p>{blured && hasError ? errorText : ""}</p>
    </div>
  );
};

export default Input;
