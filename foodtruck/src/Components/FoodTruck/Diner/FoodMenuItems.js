import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodMenuItems = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`https://foodtruckbackend.herokuapp.com/api/item/${newID}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log("Axios Menu Items error", err);
      });
  }, [newID]);
  return (
    <div>
      <h2>Food Menu Items</h2>
      {items.length > 0 ? (
        items.map((item, idx) => {
          return (
            <div key={idx}>
              <h3>{item.item_name}</h3>

              <p>{item.item_description}</p>

              {item.item_img.length === 0 ? (
                <div></div>
              ) : (
                <img src={item.item_img} alt={item.item_name} />
              )}
              <span> Price: ${item.item_price}</span>
            </div>
          );
        })
      ) : (
        <h3>No menu items to display at this time.</h3>
      )}
    </div>
  );
};
export default FoodMenuItems;
