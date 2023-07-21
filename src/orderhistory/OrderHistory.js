import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { addCart } from "../redux/productAction";

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const OrderHistory = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const location = useLocation();
  //   const { userOrderHistory, cartItemHistory } = location.state; //peche se jo navigation se state ki shakal me data bejha tha wo uselocation ki help se fetch kr raha hu
  //   console.log("userOrderHistory", location);

  const userOrderData = JSON.parse(localStorage.getItem("Formvalues"));
  console.log("userOrderData", userOrderData);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <div>
        <center>
          <h2 className="mt-5"> Order History</h2>
        </center>
        <Container className="mt--7" fluid>
          <div className=" mt-5">
            <Button
              className="ms-3"
              responsive
              onClick={() => navigate("/placeorder")}
              color="primary"
              type="submit"
            >
              Go Back
            </Button>
          </div>
          <Row className="mt-5">
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <div className="col">
                <Card className="bg-default  shadow">
                  <CardHeader className="bg-transparent  border-0">
                    <div className="heading">
                      <h3 className="text-Black mb-0"> User Info </h3>
                      <hr />
                    </div>
                  </CardHeader>
                  <Table
                    className="align-items-center table-light table-flush"
                    responsive
                  >
                    <thead className="thead-dark">
                      <tr>
                        <th scope="col"> Name </th>
                        <th scope="col">Address</th>
                        <th scope="col">Postal Code</th>
                        <th scope="col"> Country </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {orderData && ( */}
                      <tr>
                        <td>{userOrderData.name}</td>
                        <td>{userOrderData.address}</td>
                        <td>{userOrderData.postalCode}</td>
                        <td>{userOrderData.country}</td>

                        {/* <td>
                        <button
                          onClick={() => handleEdit(user)}
                          className="btn btn-sm btn-primary"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-sm btn-danger ms-2"
                        >
                          Delete
                        </button>
                      </td> */}
                      </tr>
                      {/* )} */}
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Col>
            <Col>
              <div className="col">
                <Card className="bg-default  shadow">
                  <CardHeader className="bg-transparent  border-0">
                    <div className="heading">
                      <h3 className="text-Black mb-0">Order History</h3>
                      <hr />
                    </div>
                  </CardHeader>
                  <Table className="table-light table-flush" responsive>
                    <thead className="thead-dark">
                      <tr>
                        <th> Name </th>
                        <th> Price </th>
                        <th> Quantity </th>
                      </tr>
                    </thead>

                    <tbody>
                      {cartItems.length > 0 ? (
                        <>
                          {cartItems.map((order) => (
                            <tr>
                              <td>{order.title}</td>
                              <td>
                                <p>Price: {order.price}</p>
                              </td>
                              <td>
                                <p>Quantity: {order.qty}</p>
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <p>No order history found.</p>
                      )}
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="mt-5 ms-5">
        <Link to="/cart" onClick={handleClick}>
          <button className="btn btn-outline-dark px-4 py-2">Finish</button>
        </Link>
      </div>
    </>
  );
};

export default OrderHistory;
