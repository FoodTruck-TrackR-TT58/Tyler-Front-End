import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Food Truck</h2>
      <h4>Which are you?</h4>
      <Link to="/diner/login">Diner</Link>
      <Link to="/operator/login">Operator</Link>
    </div>
  );
};
export default Home;
