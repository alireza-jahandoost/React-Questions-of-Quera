import { FINISH_QUIZ, NEXT_LEVEL, RESET } from "../constants/actionTypes";

const initialState = {
  currentLevel: 0,
  isFinished: false,
  levels: 4,
};

const level = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case FINISH_QUIZ: {
      return { ...state, isFinished: true };
    }
    case NEXT_LEVEL: {
      return { ...state, currentLevel: state.currentLevel + 1 };
    }
    case RESET: {
      return initialState;
    }
    default:
      return state;
  }
};

export default level;
