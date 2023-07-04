import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Action";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state?.signUpUsers?.pinVerificationData?.data?.auth_token
  );
  // debugger;

  const handleLogout = () => {
    dispatch(logout());
    alert("Logged Out");
    navigate("/");
  };
  return (
    <div>
      <h1>Welecome to Home Page </h1>
      <button onClick={handleLogout} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
};

export default Home;
