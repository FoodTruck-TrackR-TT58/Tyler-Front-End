import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodTruckClicked = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
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
          </div>
        );
      })}
    </div>
  );
};
export default FoodTruckClicked;
