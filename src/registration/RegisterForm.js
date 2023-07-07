import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { signUpSuccess } from "../redux/Action";
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
import { Navigate, useNavigate } from "react-router-dom";

function RegisterForm() {
  const uniqueId = uuidv4();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    country_code: "",
    phone_no: "",
    // reffered_by: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmpassword: Yup.string().required("Confirm Password is required"),
    country_code: Yup.string().required("Country Code is required"),
    phone_no: Yup.string().required("Phone No is required"),
    // agreeTerms: Yup.boolean().oneOf(
    //   [true],
    //   "You must accept the terms and conditions"
    // ),
  });

  const handleSubmit = (values, { resetForm }) => {
    alert("You are Successfully Registered");

    console.log("Form values", values);

    dispatch(signUpSuccess(values));
    navigate("/pin_verify");

    resetForm();
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBBtn
            type="btn"
            variant="gradient"
            className="ms-5 mb-4"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Login
          </MDBBtn>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
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
                        name="firstname"
                        type="text"
                        label="FirstName"
                        placeholder="Enter First Name"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="firstname"
                        variant="caption"
                        color="error"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4 ">
                      <MDBIcon fas icon="user me-3" size="lg" />
                      <Field
                        name="lastname"
                        type="text"
                        label="LastName"
                        placeholder="Enter Last Name"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="lastname"
                        variant="caption"
                        color="error"
                      />
                    </div>

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
                        placeholder="Password"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="password"
                        variant="caption"
                        color="error"
                      />
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="lock me-3" size="lg" />
                      <Field
                        name="confirmpassword"
                        type="password"
                        label="Conifirm Password"
                        placeholder="Confirm Password"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="confirmpassword"
                        variant="caption"
                        color="error"
                      />
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
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

                    {/* <div className="d-flex flex-row align-items-center mb-4">
                      <MDBIcon fas icon="asterisk me-3" size="lg" />
                      <Field
                        name="reffered_by"
                        type="text"
                        label="Reffer By"
                        placeholder="Reffer By"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="reffered_by"
                        variant="caption"
                        color="error"
                      />
                    </div> */}

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
                      Register
                    </MDBBtn>
                  </Form>
                )}
              </Formik>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default RegisterForm;

//  <Formik
//    initialValues={initialValues}
//    validationSchema={validationSchema}
//    onSubmit={handleSubmit}
//    enableReinitialize={true}
//  >
//    {({ isSubmitting }) => (
//      <Form>
//        <Field
//          name="name"
//          type="text"
//          label="Name"
//          variant="standard"
//          fullWidth
//        />
//        <ErrorMessage name="name" variant="caption" color="error" />

//        <Field
//          name="email"
//          type="email"
//          label="Email"
//          variant="standard"
//          fullWidth
//        />
//        <ErrorMessage name="email" variant="caption" color="error" />

//        <Field
//          name="password"
//          type="password"
//          label="Password"
//          variant="standard"
//          fullWidth
//        />
//        <ErrorMessage name="password" variant="caption" color="error" />

//        <Field name="agreeTerms" type="checkbox" />
//        <Field
//          name="agreeTerms"
//          variant="button"
//          fontWeight="regular"
//          color="text"
//          sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
//        >
//          &nbsp;&nbsp;I agree the&nbsp;
//        </Field>

//        <MDBBtn
//          type="submit"
//          variant="gradient"
//          color="info"
//          fullWidth
//          enable={isSubmitting}
//        >
//          Sign In
//        </MDBBtn>
//      </Form>
//    )}
//  </Formik>;

//  const initialValues = {
//    id: 0,
//    name: "",
//    email: "",
//    password: "",
//    agreeTerms: true,
//  };

//  const validationSchema = Yup.object().shape({
//    name: Yup.string().required("Name is required"),
//    email: Yup.string().email("Invalid email").required("Email is required"),
//    password: Yup.string().required("Password is required"),
//    agreeTerms: Yup.boolean().oneOf(
//      [true],
//      "You must accept the terms and conditions"
//    ),
//  });

//  const handleSubmit = (values, { resetForm }) => {
//    let newUser = values;
//    newUser.id = Date.now(); //Date.now only give us the timeStamp
//    debugger;

//    resetForm();

//    // Handle form submission
//  };
//  debugger;
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
