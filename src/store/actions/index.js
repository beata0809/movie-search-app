import axios from "axios";
import {  SELECTED_MOVIES, SINGLE_MOVIE } from "../types";

export const selectedMovies = (title) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&s=${title}`
    );
     // console.log(data);
    dispatch({
      type: SELECTED_MOVIES,
      payload: data
    });
  
  } catch (ex) {
    console.log(ex);
  }
};

export const singleMovie = (title) => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=c268494&t=${title}`
    );
   // console.log("data SM ");
    //console.log(data);
    dispatch({
      type: SINGLE_MOVIE,
      payload: data
    });
  
  } catch (ex) {
    console.log(ex);
  }
};
