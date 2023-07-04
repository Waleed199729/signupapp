import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  redirect,
} from "react-router-dom";
import RegisterForm from "./registration/RegisterForm";
import Login from "./login/Login";
import PinVerify from "./pinverify/PinVerify";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("LoginAuthToken"));
  debugger;
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("LoginAuthToken");
  //   setToken(storedToken);
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/pin_verify" element={<PinVerify />} />
          {token ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <>
              <Route path="/" element={<Login />} />
            </>
          )}
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
