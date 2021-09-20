import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";

toast.configure();
const initialValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  username: "",
  role: ["user"],
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Please provide First Name"),
  lastName: Yup.string().required("Please provide Last Name"),
  dob: Yup.string().required("Please provide your Date of Birth"),
  email: Yup.string()
    .email("Please provide Valid Email Address")
    .required("Please provide the Email Address"),
  username: Yup.string().required("Please provide User Name"),
  password: Yup.string().required("Please provide the password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password should match"
  ),
});

const submitForm = (values, action) => {
  service
    .register(values)
    .then((response) => {
      if (response.status === 200 && response.data.success) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        action.resetForm();
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    })
    .catch((e) => {
      console.log("Error on submitting form ", e);
    });
  action.setSubmitting(false);
};
const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="firstName"
              label="First Name"
              type="text"
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              label="Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="dob"
              label="Date of Birth"
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="email"
              label="Email"
              type="email"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="username"
              label="User Name"
              type="text"
            />
          </div>
          <div className="col-3 text-center p-3">
            <div className="row text-center pl-5" id="checkbox-group">
              Role
            </div>
            <div className="row">
              <div className="col-2">
                <label>
                  <Field type="checkbox" name="role" value="user" />
                  User
                </label>
              </div>
              <div className="col-2">
                <label>
                  <Field type="checkbox" name="role" value="admin" />
                  Admin
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="password"
              label="Password"
              type="password"
            />
          </div>
          <div className="col-3 text-center p-3">
            <Field
              component={TextField}
              name="confirmPassword"
              label="Confirm Password"
              type="password"
            />
          </div>
        </div>
        <div className="row">{props.isSubmitting && <LinearProgress />}</div>
        <div className="row">
          <div className="col-6 p-3 text-center">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="register__btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);
const Register = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
        component={RegistrationForm}
      ></Formik>
    </div>
  );
};

export default Register;
