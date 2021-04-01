import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const DinerLocation = (props) => {
  const [location, setLocation] = useState([]);
  const { push } = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/dine/${props.diner_id}/location`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((err) => {
        console.log("Axios Diner location error", err);
      });
  }, []);
  const addNewLocation = () => {
    push(`/diner/location/add:${props.diner_id}`);
  };
  console.log(location);
  return (
    <div>
      <h2>My Location</h2>
      {location.length > 0 ? (
        <div>
          <div></div>
        </div>
      ) : (
        <div>
          {" "}
          <p>No location found... Please add a new location</p>
          <button onClick={addNewLocation}>Add New Location</button>
        </div>
      )}

      {location.length > 0 ? (
        location.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                push(`/diner/location/edit:${props.diner_id}`);
              }}
            >
              <h5>Tap to edit</h5>
              <p>Street: {item.diner_street}</p>
              <p> City: {item.diner_city}</p>
              <p>State {item.diner_state}</p>
              <p>Zip: {item.diner_zip}</p>
              <span>Truck ID: {item.diner_id}</span>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    diner_id: state.diner.diner_id,
  };
};

export default connect(mapStateToProps)(DinerLocation);
