import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
