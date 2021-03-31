import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTruck = (props) => {
  const { push } = useHistory();
  const { id } = useParams();
  const newID = id.replace(/:/g, "");
  const initialFormValues = {
    truck_name: "",
    truck_img: "",
    truck_cuisine_type: "",
    operator_id: props.operator_id,
  };
  const [value, setValue] = useState(initialFormValues);
  const [truck, setTruck] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/truck/${newID}`)
      .then((res) => {
        setTruck(res.data);
      })
      .catch((err) => {
        console.log("Axios Clicked Truck error", err);
      });
  }, [newID]);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:59283/api/truck/${newID}`, value)
      .then((res) => {
        push("/operator/myfoodtrucks");
      })
      .catch((err) => {
        console.log("Axios Add truck error", err);
      });
  };
  return (
    <div>
        {truck.map((item,idx)=>{
            return (
                <div key={idx}>
            <h1>{item.truck_name}</h1>
            </div>
            )
        })}
      <form onSubmit={handleSubmit}>
        <h2>Edit truck</h2>
        <label>
          {" "}
          Truck Name
          <input
            type="text"
            name="truck_name"
            onChange={handleChange}
            value={value.truck_name}
          />
        </label>

        <label>
          {" "}
          Truck Image
          <input
            type="text"
            name="truck_img"
            onChange={handleChange}
            value={value.truck_img}
          />
        </label>

        <label>
          {" "}
          Truck Cuisine ztype
          <input
            type="text"
            name="truck_cuisine_type"
            onChange={handleChange}
            value={value.truck_cuisine_type}
          />
        </label>
        <button>Edit Truck</button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    operator_id: state.operator.operator_id,
  };
};

export default connect(mapStateToProps)(EditTruck);
