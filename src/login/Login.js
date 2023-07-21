import React, { useEffect, useState } from "react";
import "./Login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Tom from "../images/tom.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/Action";

const Login = () => {
  const token = useSelector(
    (state) => state?.signUpUser?.pinVerificationData?.data?.auth_token
  );
  console.log("Token Login", token);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    country_code: "",
    phone_no: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    country_code: Yup.string().required("Country Code is required"),
    phone_no: Yup.string().required("Phone_no is required"),
    password: Yup.string().required("Password is required"),
  });

  // const handleSubmit = (values, { resetForm }) => {
  //   const newUser = { ...values, id: uuidv4() };
  //   alert("Register Button");
  //   console.log("Form values", newUser);
  //   resetForm();
  // };

  const handleSubmit = async (values) => {
    // console.log("login valuessss", values);

    dispatch(loginSuccess(values, navigate));

    // navigate("/");
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol className="">
              <p className="signup-text ms-5">
                Choosing a hard-to-guess, but easy-to-remember password is
                important!
              </p>
              <MDBCardImage src={Tom} fluid />
            </MDBCol>
            <MDBCol
              center
              className=" order-2 order-lg-1 d-flex flex-column align-items-center float-start m-5"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Log In
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize={true}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="earth-europe me-3" size="lg" />
                      <Field
                        name="country_code"
                        type="text"
                        label="Country_Code"
                        placeholder="Country Code"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="country_code"
                        variant="caption"
                        color="error"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="phone me-3" size="lg" />
                      <Field
                        name="phone_no"
                        type="text"
                        label="Phone no"
                        placeholder="Phone_No"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="phone_no"
                        variant="caption"
                        color="error"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      <Field
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="Enter the Password"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="password"
                        variant="caption"
                        color="error"
                      />
                    </div>

                    {/* <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="key me-3" size="lg" />
                      <MDBInput
                        label="Repeat your password"
                        id="form4"
                        type="password"
                      />
                    </div> */}

                    <MDBBtn
                      type="submit"
                      enable={isSubmitting}
                      variant="gradient"
                      className="mb-4"
                      size="lg"
                    >
                      Login
                    </MDBBtn>

                    <p className="login_text ms-3">
                      <p className="login_textt me-3">Or</p>SignUp for Login
                    </p>
                  </Form>
                )}
              </Formik>
            </MDBCol>
          </MDBRow>
          <MDBBtn
            variant="gradient"
            className="signup_button ms-5 mb-4"
            onClick={() => navigate("/register")}
            size="lg"
          >
            Sign Up
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
