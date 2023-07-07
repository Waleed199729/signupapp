import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
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
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/Action";

const Login = () => {
  const token = useSelector(
    (state) => state?.signUpUsers?.pinVerificationData?.data?.auth_token
  );
  // console.log("token login", token);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // const handleSubmit = (values, { resetForm }) => {
  //   const newUser = { ...values, id: uuidv4() };
  //   alert("Register Button");
  //   console.log("Form values", newUser);
  //   resetForm();
  // };

  const handleSubmit = async (values) => {
    const newUser = { ...values, id: uuidv4() };

    dispatch(loginSuccess(values));
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
            <MDBCol>
              <MDBBtn
                variant="gradient"
                className="ms-5 mb-4"
                onClick={() => navigate("/register")}
                size="lg"
              >
                Sign Up
              </MDBBtn>
              <p className="ms-5">Here You Can Sign Up</p>
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/fluid/city/055.webp"
                fluid
              />
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
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <Field
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter Email"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="email"
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
                  </Form>
                )}
              </Formik>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
