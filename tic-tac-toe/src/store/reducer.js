import { RESTART, MOVE } from "./actions";
const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
};

const haveWinner = (board) => {
  const sens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const currentSen of sens) {
    let check = true;
    for (let i = 0; i < 2; i++) {
      if (
        board[currentSen[i]] !== board[currentSen[i + 1]] ||
        board[currentSen[i]] === ""
      ) {
        check = false;
        break;
      }
    }
    if (check) {
      return true;
    }
  }
  return false;
};

const full = (board) => {
  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      return false;
    }
  }
  return true;
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RESTART: {
      return { ...initialState };
    }
    case MOVE: {
      const { index } = action.payload;
      const newState = { ...state };
      newState.turn = state.turn === "x" ? "o" : "x";
      newState.board = [...state.board];
      newState.board[index] = state.turn;
      if (haveWinner(newState.board)) {
        newState.winner = state.turn;
      } else if (full(newState.board)) {
        newState.winner = "-";
      }
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
