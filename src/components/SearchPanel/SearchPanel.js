import React from "react";
import "./SearchPanel.css";
import { reduxForm, Field } from "redux-form";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { selectedMovie } from "./../../store/actions/index";

class SearchPanel extends React.Component {
  onSubmit = formValues => {
    this.props.selectedMovie(formValues.movie);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        Find your movie here
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {
            <Field
              name="movie"
              component="input"
              type="text"
              placeholder="find a movie"
            />
          }
          <Button>search</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchMovie: state.searchMovie };
};

const SearchForm = reduxForm({
  form: "search-film-form"
})(SearchPanel);

export default connect(
  mapStateToProps,
  { selectedMovie }
)(SearchForm);
