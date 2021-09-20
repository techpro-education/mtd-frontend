import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

toast.configure();
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
  const dispatch = useStateValue()[1];
  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          service.login(values).then((response) => {
            if (response && response.status === 200) {
              const userInfo = response.data;
              localStorage.setItem(
                "auth",
                JSON.stringify({
                  token: userInfo.jwt,
                })
              );
              dispatch({
                type: "LOGIN",
                item: userInfo,
              });
              if (userInfo?.user?.isAdmin) {
                history.push("/admin");
              } else {
                history.push("/user");
              }
              toast.success("Login Successful", {
                position: toast.POSITION.TOP_CENTER,
              });
              actions.resetForm();
            } else {
              toast.error("Invalid Credentials , Please Check....", {
                position: toast.POSITION.TOP_CENTER,
              });
            }
          });
          actions.setSubmitting(false);
        }}
        component={LoginForm}
      ></Formik>
      <ToastContainer />
    </div>
  );
};
export default Login;
