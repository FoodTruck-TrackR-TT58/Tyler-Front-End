import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUsername, setDinerID } from "../../../Actions/DinerActions";

const DinerLogin = (props) => {
  const { push } = useHistory();
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
        localStorage.setItem("token", res.data.token);
        setValue(initialFormValues);
        push("/diner/foodtrucks");
        props.setUsername(res.data.diner_username);
        props.setDinerID(res.data.diner_id);
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
const mapStateToProps = (state) => {
  return {
    diner_username: state.diner.diner_username,
    diner_id: state.diner.diner_id,
  };
};

export default connect(mapStateToProps, { setUsername, setDinerID })(
  DinerLogin
);
