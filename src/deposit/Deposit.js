import React from "react";

import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import AccountInfo from "../account/AccountInfo";
import Transactions from "../account/Transactions";
import Divider from "@material-ui/core/Divider";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import "./Deposit.css";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/typographyStyle.js";

const useStyles = makeStyles(styles);

const DepositSchema = Yup.object().shape({
  amount: Yup.string().required("Required"),
  comment: Yup.string().required("Required"),
});

const DepositForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Deposit</legend>
      <Form>
        <div className="row justify-content-start">
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              name="amount"
              type="number"
              label="Amount"
            />
          </div>
          <div className="col-lg-2 text-center p-3">
            <Field
              component={TextField}
              type="text"
              label="Comment"
              name="comment"
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
              className="deposit__btn"
            >
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </fieldset>
  </div>
);

const Deposit = () => {
  const [{ userInfo }, dispatch] = useStateValue();
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
                amount: "",
                comment: "",
              }}
              validationSchema={DepositSchema}
              onSubmit={(values, actions) => {
                service.deposit(values).then((response) => {
                  if (response.status === 200) {
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
                });
                actions.setSubmitting(false);
              }}
              component={DepositForm}
            ></Formik>
            <ToastContainer />
          </div>
          <Divider />
          <h1 className={classes.infoText}>Transactions</h1>
          <Transactions />
        </div>
      )}
    </div>
  );
};

export default Deposit;
