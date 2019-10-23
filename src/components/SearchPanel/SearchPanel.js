import React from "react";
import "./SearchPanel.css";
import { reduxForm, Field } from "redux-form";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { func,object } from "prop-types";
import { selectedMovie } from "../../store/actions/index";

class SearchPanel extends React.Component {
  onSubmit(formValues) {
  //  console.log(this.props.movie);
   // this.selectedMovie(formValues);
    console.log(formValues);
  }
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

SearchPanel.propTypes = {
  movie:object,
  selectedMovie: func
};

const mapStateToProps = state => {
  console.log(state);
  return {movie: state.movie};
};

SearchPanel = connect(
  mapStateToProps,
  { selectedMovie }
)(SearchPanel);

export default reduxForm({
  form: "simple-form"
})(SearchPanel);
