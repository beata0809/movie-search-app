import { SELECTED_MOVIE } from "../types";

const selectedMovieReducer = (state = null, action) => {
  if (action.type === SELECTED_MOVIE) {
    return action.payload;
  }
  return state;
};

export default selectedMovieReducer;
