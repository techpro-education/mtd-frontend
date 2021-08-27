import React from "react";

import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Recipients from "./Recipients";
import Divider from "@material-ui/core/Divider";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import styles from "../styles/typographyStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const RecipientSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .positive("Phone Number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("Contact Number is Required"),
  bankName: Yup.string().required("Bank Name is Required"),
  bankNumber: Yup.string().required("Bank Number is Required"),
});

const RecipientForm = (props) => (
  <div>
    <fieldset>
      <legend>Add Recipient</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field component={TextField} name="name" type="text" label="Name" />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="email"
              label="Email"
              name="email"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="number"
              label="Contact Number"
              name="phone"
            />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="text"
              label="Bank Name"
              name="bankName"
            />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="text"
              label="Bank Number"
              name="bankNumber"
            />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="Recipient__btn"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-lg-4 text-center p-3">
            {props.isSubmitting && <LinearProgress />}
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);

const AddRecipient = () => {
  const [{ userInfo, recipients }, dispatch] = useStateValue();
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <AccountInfo />
          <div>
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                bankName: "",
                bankNumber: "",
              }}
              validationSchema={RecipientSchema}
              onSubmit={(values, actions) => {
                service.addRecipient(values).then((response) => {
                  if (response.status === 200) {
                    if (response.data.success) {
                      const userInfo = response.data;
                      dispatch({
                        type: "UPDATE",
                        item: userInfo,
                      });
                      toast.success(userInfo.message, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      actions.resetForm();
                    }
                  }
                });
                actions.setSubmitting(false);
              }}
              component={RecipientForm}
            ></Formik>
            <ToastContainer />
          </div>
          <Divider />
          <h1 className={classes.infoText}>Recipients</h1>
          <Recipients />
        </div>
      )}
    </div>
  );
};

export default AddRecipient;
