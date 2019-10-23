import { SELECTED_MOVIE } from "../types";

const selectedMovieReducer = (state ={}, action) => {
  if (action.type === SELECTED_MOVIE) {
    return action.payload;
  }
  return state;
};

export default selectedMovieReducer;
