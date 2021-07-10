import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import { TextField } from "formik-material-ui";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Register.css";

toast.configure();
const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string().email("Invalid email").required("Required"),
});

const RegistrationForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Register</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="firstName"
              type="text"
              label="First Name"
            />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="lastName"
              type="text"
              label="Last Name"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="dob"
              type="date"
              label="Date Of Birth"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="email"
              type="email"
              label="Email"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              name="username"
              type="text"
              label="User Name"
            />
          </div>
          <div className="col-lg-4 p-3">
            <div id="checkbox-group">Role</div>
            <div className="row">
              <div className="col-lg-2">
                <label className="p3">
                  <Field type="checkbox" name="role" value="user" />
                  User
                </label>
              </div>
              <div className="col-lg-2">
                <label className="p3">
                  <Field type="checkbox" name="role" value="admin" />
                  Admin
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
          </div>
          <div className="col-lg-2 p-3">
            <Field
              component={TextField}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
            />
            {props.isSubmitting && <LinearProgress />}
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-4 text-center p-3">
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
        initialValues={{
          firstName: "",
          lastName: "",
          dob: "",
          email: "",
          username: "",
          role: ["user"],
          password: "",
          confirmPassword: "",
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values, actions) => {
          console.log("Object", values);
          service.register(values).then((response) => {
            if (response.status === 200 && response.data.success) {
              toast.success(response.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
              actions.resetForm();
            } else {
              toast.error(response.data.message, {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
          actions.setSubmitting(false);
        }}
        component={RegistrationForm}
      ></Formik>
      <ToastContainer />
    </div>
  );
};
export default Register;
