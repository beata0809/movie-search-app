import React from "react";
import "./SearchPanel.css";
import { reduxForm, Field } from "redux-form";
import { Button } from "reactstrap";

class SearchPanel extends React.Component {

  onSubmit = formValues => {
    this.props.onSubmit(formValues.movie);
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

export default reduxForm({
  form: "simple-form"
})(SearchPanel);
