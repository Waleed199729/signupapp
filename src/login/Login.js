import React from "react";
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

const Login = () => {
  const initialValues = {
    name: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newUser = { ...values, id: uuidv4() };
    alert("Register Button");
    console.log("Form values", newUser);
    resetForm();
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
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
                        name="name"
                        type="text"
                        label="Name"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="name"
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
