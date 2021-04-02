import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const AddMenuItem = () => {
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const { push } = useHistory();
  const initialFormValues = {
    item_name: "",
    item_description: "",
    item_img: "",
    item_price: "",
    menu_id: newID,
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
      .post("https://foodtruckbackend.herokuapp.com/api/item", value)
      .then((res) => {
        push(`/operator/menu:${newID}`);
      })
      .catch((err) => {
        console.log("Axios Add truck location error", err);
      });
  };
  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name
          <input
            type="text"
            name="item_name"
            value={value.item_name}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Description
          <input
            type="text"
            name="item_description"
            value={value.item_description}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Image
          <input
            type="text"
            name="item_img"
            value={value.item_img}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Price
          <input
            type="number"
            name="item_price"
            value={value.item_price}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddMenuItem;
