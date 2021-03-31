import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import DinerLogin from "./Components/Diner/Login/DinerLogin";
import DinerRegister from "./Components/Diner/Register/DinerRegister";
import OperatorLogin from "./Components/Operator/Login/OperatorLogin";
import OperatorRegister from "./Components/Operator/Register/OperatorRegister";
import FoodTruckDisplay from "./Components/FoodTruck/Diner/FoodTruckDisplay";
import Logout from "./Util/Logout";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/logout">Logout</Link>
      <Switch>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/diner/foodtrucks">
          <FoodTruckDisplay />
        </Route>
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
