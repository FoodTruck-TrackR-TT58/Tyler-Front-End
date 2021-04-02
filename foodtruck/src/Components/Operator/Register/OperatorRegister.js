import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OperatorRegister = () => {
  const { push } = useHistory();
  const initialFormValues = {
    operator_username: "",
    operator_email: "",
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
      .post("http://localhost:59283/operator/register", value)
      .then((res) => {
        push("/operator/login");
      })
      .catch((err) => {
        console.log("Axios Operator Register error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register Operator</h2>
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
          Email
          <input
            type="email"
            name="operator_email"
            onChange={handleChange}
            value={value.operator_email}
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

        <button>Register</button>
      </form>
    </div>
  );
};
export default OperatorRegister;
