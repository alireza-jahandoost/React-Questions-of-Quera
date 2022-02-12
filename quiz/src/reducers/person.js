import { UPDATE_PERSON, RESET } from "../constants/actionTypes";

const initialState = {
  score: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
  noAnswers: 0,
};

const person = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case UPDATE_PERSON: {
      const { person } = action;
      return person;
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default person;
