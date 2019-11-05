import React from "react";
import "./SearchPanel.css";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { getSelectedMovies } from "./../../store/actions/index";
import { Button } from "reactstrap";
import { Navbar } from "react-bootstrap";
class SearchPanel extends React.Component {
  onSubmit = formValues => {
    this.props.getSelectedMovies(formValues.movie, 1);
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
        <Navbar bg="success">
          <Navbar.Brand href="#home" className="title">
            Find your movie here
          </Navbar.Brand>
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
          <Button
            color="primary"
            id="buttonSearch"
            disabled={pristine || submitting}
          >
            Search Movie
          </Button>
        </form>
      </div>
    );
  }
}
SearchPanel = reduxForm({
  form: "search-film-form"
})(SearchPanel);

export default connect(
  null,
  { getSelectedMovies }
)(SearchPanel);
