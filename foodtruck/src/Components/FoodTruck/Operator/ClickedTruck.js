import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const ClickedTruck = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const [truck, setTruck] = useState([]);
  useEffect(() => {
    axios
      .get(`https://foodtruckbackend.herokuapp.com/api/truck/${newID}`)
      .then((res) => {
        setTruck(res.data);
      })
      .catch((err) => {
        console.log("Axios Clicked Truck error", err);
      });
  }, [newID]);

  const editTruck = () => {
    push(`/operator/editruck:${newID}`);
  };

  const deleteTruck = () => {
    axios
      .delete(`https://foodtruckbackend.herokuapp.com/api/truck/${newID}`)
      .then((res) => {
        push("/operator/myfoodtrucks");
      })
      .catch((err) => {
        console.log("Axios Delete truck error", err);
      });
  };

  return (
    <div>
      {truck.map((item, idx) => {
        return (
          <div key={idx}>
            <h3>{item.truck_name}</h3>
            <p>truck cuisine type: {item.truck_cuisine_type}</p>
            {item.truck_img.length === 0 ? (
              <div></div>
            ) : (
              <img src={item.truck_img} alt={item.truck_name} />
            )}
            <div>
              <button onClick={editTruck}>Edit</button>
              <button onClick={deleteTruck}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ClickedTruck;
