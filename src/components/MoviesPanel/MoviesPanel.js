import React from "react";
import "./MoviesPanel.css";
import{reduxForm, Field} from 'redux-form';
import { Button } from "reactstrap";
import sendDataToApi from "./test";
const MoviesPanel = props => {
    const { handleSubmit } = props;
  return (
    <div>
      Find your movie here
      <form onSubmit={handleSubmit(sendDataToApi)}>
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

export default reduxForm({
    form: 'simple-form'
})(MoviesPanel);
