import React from "react";
import "./Navbar.css";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div className="navbar_container">
      <nav className="navbar navbar-expand-lg navbar-light  shadow-sm ">
        <div className="container">
          {/* <NavLink
          className="urbanbazaar_heading navbar-brand fw-bold fs-4"
          to="/"
        >
          UrbanBazaar
        </NavLink> */}
          {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
          <div
            className="navbar_menu_list collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <span>
              <img
                src={Logo}
                height="50vh"
                width="100%"
                className="logo_vueLamp"
              />
            </span>
            <ul className="navbar-nav mx-auto ">
              <hr />

              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="cart_navbar">
              <NavLink to="/cart" className="btn btn-outline-dark ms-5 ">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink>
              {/* <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login{" "}
            </NavLink>

            <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Register{" "}
            </NavLink> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
