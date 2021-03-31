import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/Home";
import DinerLogin from "./Components/DIner/Login/DinerLogin";
import DinerRegister from "./Components/DIner/Register/DinerRegister";
import OperatorLogin from "./Components/Operator/Login/OperatorLogin";
import OperatorRegister from "./Components/Operator/Register/OperatorRegister";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Switch>
        <Route path="/operator/register">
          <OperatorRegister />
        </Route>
        <Route path="/operator/login">
          <OperatorLogin />
        </Route>
        <Route path="/diner/register">
          <DinerRegister />
        </Route>
        <Route path="/diner/login">
          <DinerLogin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
