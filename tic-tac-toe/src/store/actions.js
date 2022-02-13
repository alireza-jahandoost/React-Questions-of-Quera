export const MOVE = "MOVE";
export const move = (index) => ({
  type: MOVE,
  payload: { index },
});

export const RESTART = "RESTART";
export const restart = () => ({
  type: RESTART,
});
