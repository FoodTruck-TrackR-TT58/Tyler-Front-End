import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditLocation = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();

  const initialFormValues = {
    truck_location_street: "",
    truck_location_city: "",
    truck_location_state: "",
    truck_location_zip: "",
    truck_id: newID,
  };

  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/truck/location/${newID}`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log("Get location error", err);
      });
  }, []);
  const [location, setLocation] = useState([]);

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
      .put(
        `http://localhost:59283/api/truck/operator/location/edit/${newID}`,
        value
      )
      .then((res) => {
        push(`/operator/truck:${newID}`)
      })
      .catch((err) => {
        console.log("Axios Edit truck location error", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Truck Location</h3>
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
     

        <button>Edit Location</button>
      </form>
    </div>
  );
};
export default EditLocation;
