import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllTrucks } from "../../../Actions/TruckActions";

const FoodTruckDisplay = (props) => {
  useEffect(() => {
    props.getAllTrucks();
  }, []);
  return (
    <div>
      <div>
        <h2>Welcome {props.diner_username}</h2>
        <p>Here are a list of Food Trucks in your area!</p>
      </div>
      {props.trucks.map((item, idx) => {
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
    trucks: state.truck.trucks,
    isFetching: state.truck.isFetching,
    error: state.truck.error,
    diner_username: state.diner.diner_username,
    diner_id: state.diner.diner_id,
  };
};

export default connect(mapStateToProps, { getAllTrucks })(FoodTruckDisplay);