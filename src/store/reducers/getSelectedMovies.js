import { SELECTED_MOVIES } from "../types";

const getSelectedMoviesReducer = (state = null, action) => {
  if (action.type === SELECTED_MOVIES) {
    return action.payload;
  }
  return state;
};

export default getSelectedMoviesReducer;
