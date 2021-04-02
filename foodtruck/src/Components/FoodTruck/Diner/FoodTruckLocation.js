import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
const FoodTruckLocation = () => {
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
  }, [newID]);
  return (
    <div>
      <h3>Truck Location</h3>
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
            </div>
          );
        })
      ) : (
        <div>
          <h3>No location found. Check back later!</h3>
        </div>
      )}
    </div>
  );
};
export default FoodTruckLocation;
