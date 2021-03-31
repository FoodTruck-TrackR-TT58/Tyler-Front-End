import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const OperatorLogin = () => {
  const initialFormValues = {
    operator_username: "",
    operator_password: "",
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
      .post("http://localhost:59283/operator/login", value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Axios operator login error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2> Operator Login</h2>
        <label>
          Username
          <input
            type="text"
            name="operator_username"
            onChange={handleChange}
            value={value.operator_username}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="operator_password"
            onChange={handleChange}
            value={value.operator_password}
          />
        </label>

        <button>Login</button>
      </form>
      <p>Don't have a operator login?</p>
      <Link to="/operator/register">Sign up here!</Link>
    </div>
  );
};
export default OperatorLogin;
