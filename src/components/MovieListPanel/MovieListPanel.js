import React from "react";
import SearchPanel from "./../SearchPanel/SearchPanel";
import SingleMovie from "./../SingleMovie/SingleMovie";
import { selectedMovie } from "./../../store/actions/index";
import { connect } from "react-redux";
import { func, object } from "prop-types";

const MovieListPanel = props => {
    console.log(props);
    return(
    <>
      <SearchPanel onSubmit={title=> props.selectedMovie(title)} />
      <div>
          <SingleMovie movie={props.searchMovie || `defaultowy film`} />
      </div>
    </>);
};

MovieListPanel.propTypes = {
  searchMovie: object,
  selectedMovie: func,
};

const mapStateToProps = state => {
  return { searchMovie: state.searchMovie };
};

export default connect(
  mapStateToProps,
  { selectedMovie }
)(MovieListPanel);
