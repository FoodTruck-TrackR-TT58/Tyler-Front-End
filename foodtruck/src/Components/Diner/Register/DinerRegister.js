import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DinerRegister = () => {
  const { push } = useHistory();
  const initialFormValues = {
    diner_username: "",
    diner_email: "",
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
      .post("https://foodtruckbackend.herokuapp.com/diner/register", value)
      .then((res) => {
        push("/diner/login");
      })
      .catch((err) => {
        console.log("Axios Diner Register error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register Diner</h2>
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
          Email
          <input
            type="email"
            name="diner_email"
            onChange={handleChange}
            value={value.diner_email}
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

        <button>Register</button>
      </form>
    </div>
  );
};
export default DinerRegister;
