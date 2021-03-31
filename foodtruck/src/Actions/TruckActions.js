import axios from "axios";
export const FETCHING_TRUCKS_START = "FETCHING_TRUCKS_START";
export const FETCHING_TRUCKS_SUCCESS = "FETCHING_TRUCKS_SUCCESS";
export const FETCHING_TRUCKS_FAIL = "FETCHING_TRUCKS_FAIL";

export const getAllTrucks = () => {
  return (dispatch) => {
    dispatch({ type: FETCHING_TRUCKS_START });
    axios
      .get("http://localhost:59283/api/truck")
      .then((res) => {
        dispatch({ type: FETCHING_TRUCKS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: FETCHING_TRUCKS_FAIL, payload: err });
      });
  };
};
