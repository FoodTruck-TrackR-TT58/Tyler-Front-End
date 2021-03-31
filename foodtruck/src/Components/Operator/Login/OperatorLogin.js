import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setUsername, setOperatorID } from "../../../Actions/OperatorActions";

const OperatorLogin = (props) => {
  const { push } = useHistory();
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
        localStorage.setItem("token", res.data.token);
        setValue(initialFormValues);
        props.setUsername(res.data.operator_username);
        props.setOperatorID(res.data.operator_id);
        push('/operator/myfoodtrucks')
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
const mapStateToProps = (state) => {
  return {
    operator_username: state.operator.operator_username,
    operator_id: state.operator.operator_id,
  };
};

export default connect(mapStateToProps, { setUsername, setOperatorID })(
  OperatorLogin
);
