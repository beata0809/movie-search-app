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
  constructor(props) {
    super(props);
    this.state = { currentPage: 1, postsPerPage: 10 };
  }

  componentDidUpdate(prevProps) {
    const { movie } = this.props;
    if (movie !== prevProps.movie) {
      this.setState({ currentPage: 1 });
    }
  }

  paginate = pageNumber => {
    const { getSelectedMovies, movie } = this.props;
    this.setState({ currentPage: pageNumber });
    getSelectedMovies(movie, pageNumber);
  };

  handlePrevious = pageNumber => {
    const { getSelectedMovies, movie } = this.props;
    this.setState({ currentPage: pageNumber - 1 });
    getSelectedMovies(movie, pageNumber - 1);
  };

  handleNext = pageNumber => {
    const { getSelectedMovies, movie } = this.props;
    this.setState({ currentPage: pageNumber + 1 });
    getSelectedMovies(movie, pageNumber + 1);
  };

  render() {
    const { searchMovie } = this.props;
    const { postsPerPage, currentPage } = this.state;

    if (searchMovie === null) {
      return <SearchPanel />;
    }
    return (
      <>
        <SearchPanel />
        {searchMovie && searchMovie.Response === "True" ? (
          <div>
            <div className="extraInfo">
              {" "}
              <ListGroupItem>
                results: {searchMovie.totalResults}, pages:{" "}
                {Math.ceil(searchMovie.totalResults / postsPerPage)}
              </ListGroupItem>{" "}
            </div>
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
          <div className="extraInfo">
            {" "}
            <ListGroupItem>movie not found</ListGroupItem>{" "}
          </div>
        )}
        {
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={searchMovie.totalResults}
            paginate={this.paginate}
            currentPage={currentPage}
            handlePrevious={this.handlePrevious}
            handleNext={this.handleNext}
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
