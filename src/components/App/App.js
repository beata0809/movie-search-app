import React, {Fragment} from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import "./App.css";
import MoviesPanel from "../MoviesPanel/MoviesPanel";
function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={MoviesPanel} />
      </Router>
    </Fragment>
  );
  
}

export default App;
