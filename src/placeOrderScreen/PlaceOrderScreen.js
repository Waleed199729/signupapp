import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const PlaceOrder = () => {
  const cartItems = useSelector((state) => state.handleCart);

  const navigate = useNavigate();

  //   const location = useLocation();
  //   const { userOrderData, cartItemData } = location.state; //peche se jo navigation se state ki shakal me data bejha tha wo uselocation ki help se fetch kr raha hu

  // console.log("cartItemData", cartItemData);

  const handleClickNavigate = () => {
    navigate("/orderhistory");
    //   navigate("/orderhistory"),
    //     {
    //       state: {
    //         userOrderHistory: userOrderData,
    //         cartItemHistory: cartItemData,
    //       },
    //     };
  };

  const renderTableRows = () => {
    return cartItems.map((cartItem) => (
      <tr className="" key={cartItem.id}>
        <td>
          <img src={cartItem.image} height="50px" width="50px" />{" "}
          {cartItem.title}
        </td>
        {/*Item name*/}
        <td>{cartItem.qty}</td> {/*ItemQuantity price*/}
        <td>${cartItem.price}</td> {/*singleItem price*/}
        <td>${cartItem.qty * cartItem.price}</td> {/*total price*/}
      </tr>
    ));
  };

  const renderTotal = () => {
    let total = 0;
    cartItems.forEach((cartItems) => {
      total += Math.round(cartItems.qty * cartItems.price, 2); //total count horaha ha r sath round of mathod laga ha
    });

    return (
      <table
        className="mt-5"
        style={{ borderCollapse: "collapse", alignItems: "center" }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <h3 className="display-6 fw-bolder text-center"> ${total} </h3>
          </tr>
        </tbody>
      </table>
    );
  };
  const renderTable = () => {
    return (
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Item Name
            </th>{" "}
            {/*Item name*/}
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Quantity
            </th>{" "}
            {/*ItemQuantity price*/}
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Price
            </th>{" "}
            {/*singleItem price*/}
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Total Price
            </th>{" "}
            {/*total price*/}
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
          {renderTotal()}
        </tbody>
      </table>
    );
  };

  const renderEmptyCart = () => {
    return (
      <div>
        <h3> You did'nt Book any Order </h3>
        <Link to="/">Back To Home</Link>
      </div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="container my-3 py-5">
          <div className="row">
            <div className="col-12 mb-5">
              <button
                className="btn btn-outline-dark px-4 py-2 float-end"
                onClick={handleClickNavigate}
              >
                Order Details
              </button>
              <button
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => navigate("/cart")}
              >
                Go Back
              </button>
              <h2 className="display-6 fw-bolder text-center">
                PlacedOrder Items{" "}
              </h2>
              <hr />
              {cartItems.length === 0 ? renderEmptyCart() : renderTable()}
              {/* Add the rest of your place order form here */}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PlaceOrder;
