import moviesdb from "../../apis/moviesdb";
import {  SELECTED_MOVIE } from "../types";

export const selectedMovie = (title) => async dispatch => {
  try {
    const { data } = await moviesdb.get(`s=${title}`);
      console.log(data);
    dispatch({
      type: SELECTED_MOVIE,
      payload: data
    });
  
  } catch (ex) {
    console.log(ex);
  }
};
