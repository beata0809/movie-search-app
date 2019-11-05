import React from "react";
import SearchPanel from "./../SearchPanel/SearchPanel";
import InfoAboutMovie from "../InfoAboutMovie/InfoAboutMovie";
import { reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { object } from "prop-types";
import { ListGroupItem } from "reactstrap";
import Pagination from "./../Pagination/Pagination";
import "./MovieListPanel.css";
import { getSelectedMovies } from "../../store/actions";

class MovieListPanel extends React.Component {
  constructor() {
    super();
    this.state = { currentPage: 1, postsPerPage: 10 };
  }

  paginate = pageNumber => {
    this.setState({ currentPage: pageNumber });
    this.props.getSelectedMovies(this.props.movie, pageNumber);
  };

  render() {
    const { searchMovie } = this.props;
    const { postsPerPage } = this.state;
    if (searchMovie === null) {
      return <SearchPanel />;
    }
    return (
      <>
        <SearchPanel />
        {searchMovie && searchMovie.Response === "True" ? (
          <div>
            {searchMovie &&
              searchMovie.Search.map(movie => (
                <ListGroupItem
                  color="success"
                  key={movie.imdbID}
                  className="movieList"
                >
                  <InfoAboutMovie movie={movie} className="searchPanelStyle" />
                </ListGroupItem>
              ))}
          </div>
        ) : (
          <div className="notFound">
            {" "}
            <ListGroupItem>movie not found</ListGroupItem>{" "}
          </div>
        )}
        {
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={searchMovie.totalResults}
            paginate={this.paginate}
          />
        }
      </>
    );
  }
}

MovieListPanel.propTypes = {
  searchMovie: object
};

MovieListPanel = reduxForm({
  form: "search-film-form"
})(MovieListPanel);

const selector = formValueSelector("search-film-form");

MovieListPanel = connect(state => {
  const movie = selector(state, "movie");
  return {
    movie
  };
})(MovieListPanel);

const mapStateToProps = state => {
  return { searchMovie: state.searchMovie };
};

export default connect(
  mapStateToProps,
  { getSelectedMovies }
)(MovieListPanel);
