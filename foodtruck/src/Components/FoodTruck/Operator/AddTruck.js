import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddTruck = (props) => {
  const { push } = useHistory();
  const initialFormValues = {
    truck_name: "",
    truck_img: "",
    truck_cuisine_type: "",
    operator_id: props.operator_id,
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
      .post("http://localhost:59283/api/truck", value)
      .then((res) => {
        push("/operator/myfoodtrucks");
      })
      .catch((err) => {
        console.log("Axios Add truck error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add a truck</h2>
        <label>
          {" "}
          Truck Name
          <input
            type="text"
            name="truck_name"
            onChange={handleChange}
            value={value.truck_name}
          />
        </label>

        <label>
          {" "}
          Truck Image
          <input
            type="text"
            name="truck_img"
            onChange={handleChange}
            value={value.truck_img}
          />
        </label>

        <label>
          {" "}
          Truck Cuisine ztype
          <input
            type="text"
            name="truck_cuisine_type"
            onChange={handleChange}
            value={value.truck_cuisine_type}
          />
        </label>
        <button>Add Truck</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    operator_id: state.operator.operator_id,
  };
};

export default connect(mapStateToProps)(AddTruck);
