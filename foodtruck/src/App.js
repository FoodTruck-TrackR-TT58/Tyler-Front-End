import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import DinerLogin from "./Components/Diner/Login/DinerLogin";
import DinerRegister from "./Components/Diner/Register/DinerRegister";
import OperatorLogin from "./Components/Operator/Login/OperatorLogin";
import OperatorRegister from "./Components/Operator/Register/OperatorRegister";
import FoodTruckDisplay from "./Components/FoodTruck/Diner/FoodTruckDisplay";
import FoodTruckClicked from "./Components/FoodTruck/Diner/FoodTruckClicked";
import MyFoodTrucks from "./Components/FoodTruck/Operator/MyFoodTrucks";
import AddTruck from "./Components/FoodTruck/Operator/AddTruck";
import ClickedTruck from "./Components/FoodTruck/Operator/ClickedTruck";
import EditTruck from "./Components/FoodTruck/Operator/EditTruck";
import FoodTruckLocations from "./Components/FoodTruck/Operator/FoodTruckLocations";
import AddTruckLocation from "./Components/FoodTruck/Operator/AddTruckLocation";
import EditLocation from "./Components/FoodTruck/Operator/EditLocation";
import DinerLocation from "./Components/Diner/Location/DinerLocation";
import DinerAddLocation from "./Components/Diner/Location/DinerAddLocation";
import DinerEditLocation from "./Components/Diner/Location/DinerEditLocation";
import TruckMenu from "./Components/FoodTruck/Operator/TruckMenu";
import AddTruckMenu from "./Components/FoodTruck/Operator/AddTruckMenu";
import MenuClicked from "./Components/FoodTruck/Operator/MenuItems";
import AddMenuItem from "./Components/FoodTruck/Operator/AddMenuItem";
import FoodTruckLocation from "./Components/FoodTruck/Diner/FoodTruckLocation";
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
        <Route path="/operator/menu/item/add:id">
          <AddMenuItem />
        </Route>
        <Route path="/operator/menu/add:id">
          <AddTruckMenu />
        </Route>
        <Route path="/operator/editlocation:id">
          <EditLocation />
        </Route>
        <Route path="/operator/addtrucklocation:id">
          <AddTruckLocation />
        </Route>
        <Route path="/operator/addtruck">
          <AddTruck />
        </Route>
        <Route path="/operator/myfoodtrucks">
          <MyFoodTrucks />
        </Route>
        <Route path="/operator/editruck:id">
          <EditTruck />
        </Route>
        <Route path="/operator/menu:id">
          <MenuClicked />
        </Route>
        <Route path="/operator/truck:id">
          <ClickedTruck />
          <FoodTruckLocations />
          <TruckMenu />
        </Route>
        <Route path="/diner/location/edit:id">
          <DinerEditLocation />
        </Route>
        <Route path="/diner/location/add:id">
          <DinerAddLocation />
        </Route>
        <Route path="/diner/location:id">
          <DinerLocation />
        </Route>
        <Route path="/diner/foodtrucks">
          <FoodTruckDisplay />
        </Route>
        <Route path="/diner/foodtruck:id">
          <FoodTruckClicked />
          <FoodTruckLocation />
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
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
