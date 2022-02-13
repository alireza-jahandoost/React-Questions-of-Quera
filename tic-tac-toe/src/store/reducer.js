const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    // ...
    default:
      return state;
  }
}

export default reducer;
