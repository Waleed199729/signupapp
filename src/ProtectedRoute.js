import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const { Component } = props;

  useEffect(() => {
    let login = () => {
      const loggedIn = localStorage.getItem("LoginAuthToken");
      if (!loggedIn) {
        {
          navigate("/login");
        }
      } else if (loggedIn) {
        navigate("/");
      }
    };
    login();
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
