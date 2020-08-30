import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login"></Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
