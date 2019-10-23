import React, {Fragment} from "react";
import {HashRouter as Router, Route} from "react-router-dom";
import "./App.css";
import SearchPanel from "../SearchPanel/SearchPanel";
function App() {
  return (
    <Fragment>
      <Router>
        <Route exact path="/" component={SearchPanel} />
      </Router>
    </Fragment>
  );
  
}

export default App;
