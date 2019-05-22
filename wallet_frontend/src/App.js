import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LoginPage } from "./LoginPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
