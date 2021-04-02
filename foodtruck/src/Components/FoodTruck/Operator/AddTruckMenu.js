import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
const AddTruckMenu = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const initialFormValues = {
    menu_name: "",
    truck_id: newID,
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
      .post("http://localhost:59283/api/menu", value)
      .then((res) => {
        push(`/operator/truck:${newID}`);
      })
      .catch((err) => {
        console.log("Axios Add Truck Menu error", err);
      });
  };

  return (
    <div>
      <h2>Add New Menu</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Menu Name
          <input
            type="text"
            name="menu_name"
            onChange={handleChange}
            value={value.menu_name}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddTruckMenu;
