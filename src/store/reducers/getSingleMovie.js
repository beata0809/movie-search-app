import { SINGLE_MOVIE } from "../types";

const getSingleMovieReducer = (state = {}, action) => {
  if (action.type === SINGLE_MOVIE) {
    return action.payload;
  }
  return state;
};

export default getSingleMovieReducer;
