import React from "react";
import "./SearchPanel.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { selectedMovies } from "./../../store/actions/index";
import {Button} from "reactstrap";
import { Navbar } from "react-bootstrap";
class SearchPanel extends React.Component {
  
  onSubmit = formValues => {
    this.props.selectedMovies(formValues.movie);
  };

  render() {
    const { handleSubmit,pristine, submitting  } = this.props;
    return (
      <div>
        <Navbar bg="light">
          <Navbar.Brand href="#home" className="title">Find your movie here</Navbar.Brand>
        </Navbar>
        <form className="form" onSubmit={handleSubmit(this.onSubmit)}>
          {
            <Field
            className="inputLabel"
              name="movie"
              component="input"
              type="text"
              placeholder="find a movie"
            />
          }
          <Button color="primary" id="buttonSearch" disabled={pristine || submitting}>Search Movie</Button>
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
  { selectedMovies }
)(SearchForm);
