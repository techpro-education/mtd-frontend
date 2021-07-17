import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { ToastContainer, toast } from "react-toastify";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Login.css";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
});

const LoginForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Login</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="username"
              type="text"
              label="User Name"
            />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
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
              className="login__btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);
const Login = () => {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {}}
        component={LoginForm}
      ></Formik>
      <ToastContainer />
    </div>
  );
};
export default Login;
