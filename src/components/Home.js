import React, { useEffect, useState } from "react";
import "./Home.css";
import "./SideBar.css";
import { motion } from "framer-motion";
import ProductsScreen from "../Products/ProductsScreen";

import Menu from "../images/menu.png";
import Logo from "../images/logo.png";
import Lamp from "../images/lamp.png";
import Light from "../images/light.png";

import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdb-react-ui-kit";

import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Action";
import Navbar from "./Navbar";

const Home = () => {
  const [data, setData] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const user = useSelector(
  //   (state) => state?.signUpUser?.pinVerificationData?.data?.auth_token
  // );
  // console.log("Home Redux", user);

  const user1 = useSelector((state) => state?.signUpUser?.pinVerificationData);
  console.log("Home Redux11", user1);

  const handleLogout = () => {
    dispatch(logout(navigate));

    // navigate("/login");
  };

  useEffect(() => {
    const userData = localStorage.getItem("PINN Verification");
    const parseData = JSON.parse(userData);
    setData(parseData);
  }, [user1]);

  //Display Area
  const [leftOpen, setLeftOpen] = useState(false);

  const toggleSidebar = (event) => {
    const key = `${event.currentTarget.parentNode.id}Open`;
    if (key === "leftOpen") {
      setLeftOpen(!leftOpen);
    }
  };

  const toggleBtn = () => {
    const btn = document.getElementById("btn");
    const light = document.getElementById("light");
    btn.classList.toggle("active1");
    light.classList.toggle("on");
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <div id="layout">
          <div id="left" className={leftOpen ? "open" : "closed"}>
            <div className="icon" onClick={toggleSidebar}>
              &equiv;
            </div>
            <div className={`sidebar ${leftOpen ? "open" : "closed"}`}>
              <div className="header">
                <h3 className="title">Waleed Ahmad Siddiqui</h3>
              </div>

              <div className="content">
                <MDBContainer className="mt-5" breakpoint="sm">
                  <div className="right_side_Logoutbutton float-end">
                    <MDBBtn
                      onClick={handleLogout}
                      variant="gradient"
                      className="mb-4"
                      size="lg"
                    >
                      Log Out
                    </MDBBtn>
                  </div>

                  <div className="left_side_table float-end mt-5">
                    <center>
                      <h4 className="mt-5"> Welcome to Your Dashboard </h4>

                      <h5>{`${data?.first_name} ${data?.last_name}`}</h5>
                    </center>
                    <MDBTable className="mt-5" align="middle">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Status</th>
                          <th scope="col">Country Code</th>
                          <th scope="col">Phone No</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="">
                                <p className="fw-bold mb-1">{data?.id}</p>
                                {/* <p className="fw-bold mb-1">{data?.email}</p> */}
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{data?.first_name}</p>
                            <p className="fw-normal mb-1">{data?.last_name}</p>
                          </td>
                          <td>
                            <span class="badge badge-success rounded-pill d-inline">
                              {data?.user_status}
                            </span>
                          </td>
                          <td>{data?.country_code}</td>
                          <td>
                            <MDBBtn color="link" rounded size="sm">
                              {data?.phone}
                            </MDBBtn>
                          </td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </MDBContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <nav className="home_navbar_container">
            {/* <img src={Menu} alt="image" className="menu-img" /> */}
            {/* <img src={Logo} className="logo" /> */}
            {/* <Navbar /> */}
            {/* <ul>
              <li>
                <a href="/"> Home </a>
              </li> 
              <li>
                <a href=""> About </a>
              </li>
              <li>
                <a href=""> Support </a>
              </li>
              <li>
                <a href=""> Connect Us </a>
              </li>
            </ul> */}
            <button
              className="homeDisplay_button"
              type="button"
              onClick={toggleBtn}
              id="btn"
            >
              <span></span>
            </button>
          </nav>
          <div className="lamp-container">
            <img src={Lamp} className="lamp" />
            <img src={Light} className="light" id="light" />
          </div>
          <div class="text-container">
            <h1>
              Welcome <br />
              React Lighting
            </h1>
            <p>
              This is the first lamp from our company. we're making a huge
              collection of modern Lamps in all categories from home use to
              officeuse.
            </p>
            <a href="">Check All Collections</a>

            <div className="control">
              <p>04</p>
              <div className="line">
                <span></span>
              </div>
              <p>05</p>
            </div>
          </div>
        </div>

        <div>
          <ProductsScreen />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
