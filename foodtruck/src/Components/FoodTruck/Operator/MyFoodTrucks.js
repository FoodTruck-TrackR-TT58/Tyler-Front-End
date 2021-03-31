import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MyFoodTrucks = (props) => {
  const [trucks, setTrucks] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:59283/api/truck/operator/${props.operator_id}`)
      .then((res) => {
        console.log(res.data);
        setTrucks(res.data);
      })
      .catch((err) => {
        setError(true);
        console.log("Axios My truck error");
      });
  }, []);
  if (error) {
    return (
      <div>
        <h2>You do not have any trucks in the database!</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>Hello Operator {props.operator_username}</h2>
      <div>
        <Link to="/operator/addtruck">Add a truck</Link>
      </div>
      <h2>My Trucks </h2>
      {trucks.map((item, idx) => {
        return (
          <div key={idx}>
            <h3>{item.truck_name}</h3>
            <p>truck cuisine type: {item.truck_cuisine_type}</p>
            {item.truck_img.length === 0 ? (
              <div></div>
            ) : (
              <img src={item.truck_img} alt={item.truck_name} />
            )}
            {/* <p>Truck Ratings</p>
            {item.truck_ratings.map((item, idx) => {
              return (
                <div key={idx}>
                  <span>{item}</span>
                </div>
              );
            })} */}
          </div>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    operator_username: state.operator.operator_username,
    operator_id: state.operator.operator_id,
  };
};

export default connect(mapStateToProps)(MyFoodTrucks);