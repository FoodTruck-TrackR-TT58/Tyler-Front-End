import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const FoodTruckMenu = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get(`https://foodtruckbackend.herokuapp.com/api/menu/${newID}`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log("Axios food truck menu error", err);
      });
  }, [newID]);
  return (
    <div>
      <h2>Truck Menu</h2>
      {menu.length > 0 ? (
        menu.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                push(`/diner/menu/items:${item.menu_id}`);
              }}
            >
              <h3>{item.menu_name}</h3>
              <h6>Click to view menu</h6>
            </div>
          );
        })
      ) : (
        <h3>No truck menu's avaliable at this time.</h3>
      )}
    </div>
  );
};
export default FoodTruckMenu;
