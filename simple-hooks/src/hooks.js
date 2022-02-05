import { useState } from "react";

export function useStack() {
  const [stack, setStack] = useState([]);

  const push = (newElement) => {
    setStack((prevElements) => [...prevElements, newElement]);
  };

  const pop = () => {
    const lastElement = stack[stack.length - 1];
    setStack((prevElements) => [
      ...prevElements.slice(0, prevElements.length - 1),
    ]);
    return lastElement;
  };

  return { stack, push, pop };
}

export function useCounter(start, finish) {
  const [currentTime, setCurrentTime] = useState(start);
  const count = () => {
    if (currentTime === finish) {
      setCurrentTime(start);
    } else {
      setCurrentTime((prevTime) => prevTime + 1);
    }
  };
  return [currentTime, count];
}
