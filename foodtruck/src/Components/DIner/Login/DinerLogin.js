import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const DinerLogin = () => {
  const initialFormValues = {
    diner_username: "",
    diner_password: "",
  };
  const [value, setValue] = useState(initialFormValues);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:59283/diner/login", value)
      .then((res) => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        setValue(initialFormValues)
      })
      .catch((err) => {
        console.log("Axios diner login error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Diner Login</h2>
        <label>
          Username
          <input
            type="text"
            name="diner_username"
            onChange={handleChange}
            value={value.diner_username}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="diner_password"
            onChange={handleChange}
            value={value.diner_password}
          />
        </label>

        <button>Login</button>
      </form>
      <p>Don't have a diner login?</p>
      <Link to="/diner/register">Sign up here!</Link>
    </div>
  );
};
export default DinerLogin;
