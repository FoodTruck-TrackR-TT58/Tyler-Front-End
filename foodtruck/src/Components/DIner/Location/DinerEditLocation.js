import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const DinerEditLocation = (props) => {
  let history = useHistory();
  const initialFormValues = {
    diner_street: "",
    diner_city: "",
    diner_state: "",
    diner_zip: "",
    diner_id: props.diner_id,
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
      .put(`http://localhost:59283/api/dine/${props.diner_id}/location`, value)
      .then((res) => {
        history.goBack();
      })
      .catch((err) => {
        console.log("Axios Add truck location error", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Location</h3>
        <label>
          {" "}
          Street
          <input
            type="text"
            name="diner_street"
            value={value.diner_street}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          City
          <input
            type="text"
            name="diner_city"
            value={value.diner_city}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          State
          <input
            type="text"
            name="diner_state"
            value={value.diner_state}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Zip
          <input
            type="text"
            name="diner_zip"
            value={value.diner_zip}
            onChange={handleChange}
          />
        </label>

        <button>Edit Location</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    diner_id: state.diner.diner_id,
  };
};

export default connect(mapStateToProps)(DinerEditLocation);
