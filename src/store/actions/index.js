import axios from "axios";
import {  SELECTED_MOVIE } from "../types";

export const selectedMovie = (title) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&s=${title}`
    );
      console.log(data);
    dispatch({
      type: SELECTED_MOVIE,
      payload: data
    });
  
  } catch (ex) {
    console.log(ex);
  }
};
