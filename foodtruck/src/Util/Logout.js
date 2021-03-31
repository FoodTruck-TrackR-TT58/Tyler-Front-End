import React from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  const { push } = useHistory();
  return (
    <div>
      <h2>Are you sure you want to logout?</h2>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        No
      </button>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          push("/");
        }}
      >
        Yes
      </button>
    </div>
  );
};
export default Logout;
