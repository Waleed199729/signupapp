import React, { useEffect, useState } from "react";
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

const Home = () => {
  const [data, setData] = useState("");
  console.log("data dsjnkxc", data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state?.signUpUsers?.pinVerificationData?.data
  );
  // console.log(" user info ", user);

  const handleLogout = () => {
    dispatch(logout(navigate));
    // navigate("/login");
  };

  useEffect(() => {
    const userData = localStorage.getItem("user's data");
    const parseData = JSON.parse(userData);
    setData(parseData);
  }, [user]);

  return (
    <div>
      <MDBContainer className="mt-5" breakpoint="sm">
        <MDBBtn
          onClick={handleLogout}
          variant="gradient"
          className="mb-4"
          size="lg"
        >
          Log Out
        </MDBBtn>
        <center>
          <h1>Waleed Ahamad Siddiqui </h1>
        </center>
        <center>
          <h4 className="mt-5"> Welcome to Your Dashboard </h4>

          <h5>{`${data.first_name} ${data.last_name}`}</h5>
        </center>
        <MDBTable className="mt-5" align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Status</th>
              <th scope="col">Country Code</th>
              <th scope="col">Phone No</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="fw-bold mb-1">{data.id}</p>
                    <p className="fw-bold mb-1">{data.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{data.first_name}</p>
                <p className="fw-normal mb-1">{data.last_name}</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  {data.user_status}
                </MDBBadge>
              </td>
              <td>{data.country_code}</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  {data.phone}
                </MDBBtn>
              </td>
            </tr>

            {/* <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Alex Ray</p>
                    <p className="text-muted mb-0">alex.ray@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Consultant</p>
                <p className="text-muted mb-0">Finance</p>
              </td>
              <td>
                <MDBBadge color="primary" pill>
                  Onboarding
                </MDBBadge>
              </td>
              <td>Junior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr> */}

            {/* <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/7.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kate Hunington</p>
                    <p className="text-muted mb-0">kate.hunington@gmail.com</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Designer</p>
                <p className="text-muted mb-0">UI/UX</p>
              </td>
              <td>
                <MDBBadge color="warning" pill>
                  Awaiting
                </MDBBadge>
              </td>
              <td>Senior</td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr> */}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </div>
  );
};

export default Home;
