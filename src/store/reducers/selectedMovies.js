import { SELECTED_MOVIES } from "../types";

const selectedMoviesReducer = (state = null, action) => {
  if (action.type === SELECTED_MOVIES) {
    return action.payload;
  }
  return state;
};

export default selectedMoviesReducer;
