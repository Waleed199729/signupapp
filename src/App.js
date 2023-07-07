import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./registration/RegisterForm";
import Login from "./login/Login";
import PinVerify from "./pinverify/PinVerify";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  // const [token, setToken] = useState(localStorage.getItem("LoginAuthToken"));

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("LoginAuthToken");
  //   setToken(storedToken);
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/register"
            element={<ProtectedRoute Component={RegisterForm} />}
          />
          <Route
            path="/pin_verify"
            element={<ProtectedRoute Component={PinVerify} />}
          />
          <Route path="/" element={<ProtectedRoute Component={Home} />} />
          <Route path="/login" element={<ProtectedRoute Component={Login} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

//  {
//    token ? (
//      <Route path="/home" element={<Home />} />
//    ) : (
//      <Route path="/" element={<Login />} />
//    );
//  }
