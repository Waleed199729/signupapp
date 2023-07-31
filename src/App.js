import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "./registration/RegisterForm";
import Login from "./login/Login";
import PinVerify from "./pinverify/PinVerify";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProductsScreen from "./Products/ProductsScreen";
import SingleProductScreen from "./SingleProductScreen/SingleProductScreen";
import Cart from "./Cart/Cart";
import PlaceOrderScreen from "./placeOrderScreen/PlaceOrderScreen";
import OrderHistory from "./orderhistory/OrderHistory";

import LoginProtectedRoute from "./Protected Routes/LoginProtectedRoute";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./Products/ProductsScreen";
import PublicRoute from "./Protected Routes/PublicRoute";
import PrivateRoute from "./Protected Routes/PrivateRoute";

const App = () => {
  // const [isSignedIn, setIsSignedIn] = useState(null);
  // const signin = () => {
  //   setIsSignedIn(true);
  // };
  // const signout = () => {
  //   setIsSignedIn(false);
  // };
  // const [token, setToken] = useState(localStorage.getItem("LoginAuthToken"));

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("LoginAuthToken");
  //   setToken(storedToken);
  // }, []);

  return (
    //  {
    //    token ? (
    //      <Route path="/home" element={<Home />} />
    //    ) : (
    //      <Route path="/" element={<Login />} />
    //    );
    //  }
    <>
      <Router>
        <Routes>
          <Route
            path="/register"
            element={<LoginProtectedRoute Component={RegisterForm} />}
          />
          <Route
            path="/pin_verify"
            element={<LoginProtectedRoute Component={PinVerify} />}
          />
          <Route path="/" element={<LoginProtectedRoute Component={Home} />} />
          <Route
            path="/productsscreen"
            element={<LoginProtectedRoute Component={ProductsScreen} />}
          />

          <Route
            path="/about"
            element={<LoginProtectedRoute Component={About} />}
          />
          <Route
            path="/contactus"
            element={<LoginProtectedRoute Component={Contact} />}
          />
          <Route
            path="/products/:id"
            element={<LoginProtectedRoute Component={SingleProductScreen} />}
          />
          <Route
            path="/cart"
            element={<LoginProtectedRoute Component={Cart} />}
          />
          <Route
            path="/placeorder"
            element={<LoginProtectedRoute Component={PlaceOrderScreen} />}
          />
          <Route
            path="/orderhistory"
            element={<LoginProtectedRoute Component={OrderHistory} />}
          />

          <Route
            path="/login"
            element={<LoginProtectedRoute Component={Login} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;

//  <Router>
//    <Routes>
//      <Route path="/" element={<PrivateRoute component={Home} exact />} />
//      <Route
//        element={
//          <PublicRoute
//            restricted={true}
//            component={RegisterForm}
//            path="/register"
//            exact
//          />
//        }
//      />
//    </Routes>
//  </Router>;
