import React, {Fragment} from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import "./App.css";
import MovieListPanel from "../MovieListPanel/MovieListPanel";
function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={MovieListPanel} />
      </Router>
    </Fragment>
  );
  
}

export default App;
