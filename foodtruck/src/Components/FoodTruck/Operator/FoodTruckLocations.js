import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const FoodTruckLocations = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const [location, setLocation] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/truck/operator/location/${newID}`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log("Axios Operator truck location error", err);
      });
  }, []);

  const addLocation = () => {
    push(`/operator/addtrucklocation:${newID}`);
  };

  return (
    <div>
      <h2>Truck Location</h2>
      {location.length > 0 ? (
        <div>
          <div></div>
        </div>
      ) : (
        <div>
          {" "}
          <button onClick={addLocation}>Add Truck Location</button>
        </div>
      )}
      {location.length > 0 ? (
        location.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                push(`/operator/editlocation:${item.truck_id}`);
              }}
            >
              <p>Street: {item.truck_location_street}</p>
              <p> City: {item.truck_location_city}</p>
              <p>State {item.truck_location_state}</p>
              <p>Zip: {item.truck_location_zip}</p>
              <span>Truck ID: {item.truck_id}</span>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default FoodTruckLocations;
