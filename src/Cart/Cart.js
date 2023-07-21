import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  delCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/productAction"; //actions define kiyey
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { Modal, ModalHeader } from "reactstrap";
import Navbar from "../components/Navbar";

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);

  //  const cartItems = JSON.parse(localStorage.getItem('cart')) ;     //getting the local storage
  //  console.log(cartItems,'local torage')

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    postalCode: "",
    country: "",
  });

  const handleClose = (item) => {
    dispatch(delCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  const renderCartItems = () => {
    return cartItems?.map((cartItem) => (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="Close"
          >
            {" "}
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>

              <div className="quantity row justify-content-center">
                <div className="col-md-4">
                  <button onClick={() => handleDecrement(cartItem)}>-</button>
                  <span>{cartItem.qty} </span>
                  <button onClick={() => handleIncrement(cartItem)}>+</button>
                </div>

                <div className="col-md-4">
                  Total: ${cartItem.qty * cartItem.price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderEmptyCart = () => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row">
              <h3>Your Cart is Empty</h3>
              <Link to="/"> Back To Home </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // yahan pr mene apni logic likhni ha ke mera form data accept kr ke ye agle page pr mjghe order histroy dikha de

    setPopupVisible(false);
    Swal.fire({
      icon: "success",
      title: "Successfully Order Placed!",
      text: "Your order has been placed successfully.",
      showConfirmButton: true,
    });
    localStorage.setItem("Formvalues", JSON.stringify(formValues));
    navigate("/placeorder");
    // , {
    // state: { userOrderData: formValues, cartItemData: cartItems }, //navigate ke sath state ki form me data bejh raha hu jis ko aage receive kru ga user ka data print krwane ke liye
    // });
  };

  // const handleButtonClick = () => {
  //     setPopupVisible(true);
  // }

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    console.log("Field Data", value);
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePopupClose = () => {
    setModal(false);
  };

  const renderButton = () => {
    return (
      <div className="container">
        <div className="row_popup">
          <Modal size="lg" isOpen={modal} toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>
              <div className="popup-container">
                <div className="popoup">
                  <h3> Order Form </h3>
                  <form className="form" onSubmit={handleFormSubmit}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        required
                        value={formValues.name}
                        onChange={handleFormChange}
                      />
                    </label>
                    <label>
                      Address:
                      <input
                        type="text"
                        name="address"
                        required
                        value={formValues.address}
                        onChange={handleFormChange}
                      />{" "}
                    </label>
                    <label>
                      Postal Code:
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={formValues.postalCode}
                        onChange={handleFormChange}
                      />
                    </label>
                    <label>
                      Country:
                      <input
                        type="text"
                        name="country"
                        required
                        value={formValues.country}
                        onChange={handleFormChange}
                      />
                    </label>
                    <div className="button">
                      <button type="submit">Place Order</button>
                    </div>
                  </form>
                  <div className="button">
                    <button onClick={handlePopupClose}>Cancel</button>
                  </div>
                </div>
              </div>
            </ModalHeader>
          </Modal>
          <center>
            <button
              onClick={() => setModal(true)}
              className="btn btn-outline-primary mb-5 w-25 mx-auto"
            >
              Proceed To checkout
            </button>
          </center>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div className="container my-3 py-5 ">
          <div className="row ">
            <div className="col-12 mb-5">
              <h2 className="display-6 fw-bolder text-center">
                {" "}
                Shopping Cart <hr />{" "}
              </h2>
              {cartItems?.length === 0 ? renderEmptyCart() : renderCartItems()}
              {cartItems?.length !== 0 && renderButton()}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Cart;
