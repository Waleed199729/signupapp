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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pinVerify } from "../redux/Action";

const PinVerify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    phone_no: "",
    phone_pin: "",
  };

  const validationSchema = Yup.object().shape({
    phone_no: Yup.string().required("No. is required"),
    phone_pin: Yup.string().required("Pin is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    alert("Pin Clicked");

    dispatch(pinVerify(values));

    navigate("/");
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
                Pin Verification
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
                        name="phone_no"
                        type="text"
                        label="Phone No"
                        placeholder="Enter the Phone No"
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
                        name="phone_pin"
                        type="password"
                        label="Phone Pin"
                        placeholder="Enter the Phone Pin"
                        variant="standard"
                        className="w-100"
                      />
                      <ErrorMessage
                        name="phone_pin"
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
                      Verify
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

export default PinVerify;
