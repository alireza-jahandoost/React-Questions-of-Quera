// # Reducer name should be **themeReducer**

const initialState = { theme: "LIGHT" };

export const themeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_THEME": {
      const { theme } = payload;
      return { ...state, theme };
    }
    default:
      return state;
  }
};
