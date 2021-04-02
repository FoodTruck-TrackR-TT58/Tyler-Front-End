import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const TruckMenu = () => {
  const [menu, setMenu] = useState([]);
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/menu/${newID}`)
      .then((res) => {
        setMenu(res.data);
      })
      .catch((err) => {
        console.log("Axios Truck Mnu error", err);
      });
  }, []);

  return (
    <div>
      <h2>Truck Menu's</h2>
      <button
        onClick={() => {
          push(`/operator/menu/add:${newID}`);
        }}
      >
        Add New Menu
      </button>
      {menu.length > 0 ? (
        menu.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                push(`/operator/menu:${item.menu_id}`);
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
export default TruckMenu;
