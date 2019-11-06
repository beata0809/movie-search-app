import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import MovieListPanel from "./components/MovieListPanel/MovieListPanel";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={MovieListPanel} />
      </Router>
    </>
  );
}

export default App;
