import React, { useState } from "react";
import axios from "axios";
const AddTruckLocation = () => {
  const initialFormValues = {
    truck_location_street: "",
    truck_location_city: "",
    truck_location_state: "",
    truck_location_zip: "",
    truck_id: "",
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
      .post("http://localhost:59283/api/truck/location", value)
      .then((res) => {
          console.log(res)
      })
      .catch((err) => {
        console.log("Axios Add truck location error", err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h3>Add Truck Location</h3>
        <label>
          {" "}
          Street
          <input
            type="text"
            name="truck_location_street"
            value={value.truck_location_street}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          City
          <input
            type="text"
            name="truck_location_city"
            value={value.truck_location_city}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          State
          <input
            type="text"
            name="truck_location_state"
            value={value.truck_location_state}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Zip
          <input
            type="text"
            name="truck_location_zip"
            value={value.truck_location_zip}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Truck ID
          <input
            type="text"
            name="truck_id"
            value={value.truck_id}
            onChange={handleChange}
          />
        </label>
        <button>Add Location</button>
      </form>
    </div>
  );
};
export default AddTruckLocation;
