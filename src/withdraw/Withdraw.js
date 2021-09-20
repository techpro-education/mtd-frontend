import React from "react";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import AccountInfo from "../account/AccountInfo";
import { Formik, Field, Form } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import service from "../service/bankService";
import { ToastContainer, toast } from "react-toastify";
import Transactions from "../account/Transactions";
import "./Withdraw.css";

toast.configure();
const WithdrawSchema = Yup.object().shape({
  amount: Yup.string().required("Please Enter the Amount"),
});

const WithdrawForm = (props) => (
  <div className="container">
    <fieldset>
      <legend>Withdraw</legend>
      <Form>
        <div className="row">
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="amount"
              type="number"
              label="Amount"
            />
          </div>
          <div className="col-2 text-center p-3">
            <Field
              component={TextField}
              name="comment"
              type="text"
              label="Comment"
            />
          </div>
          <div className="col-2 text-center p-3">
            <Button
              variant="contained"
              color="primary"
              disabled={props.isSubmitting}
              onClick={props.submitForm}
              className="Withdraw__btn"
            >
              Withdraw
            </Button>
          </div>
        </div>
        <div>{props.isSubmitting && <LinearProgress />}</div>
      </Form>
    </fieldset>
  </div>
);
const Withdraw = () => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo && userInfo.user && (
        <div>
          <AccountInfo />
          <div>
            <Formik
              initialValues={{ amount: "", comment: "" }}
              validationSchema={WithdrawSchema}
              onSubmit={(values, actions) => {
                service.withdraw(values).then((response) => {
                  actions.setSubmitting(false);
                  if (response.status === 200) {
                    const user = response.data;
                    dispatch({
                      type: "UPDATE",
                      item: user,
                    });
                    toast.success(user.message, {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    actions.resetForm();
                  }
                });
              }}
              component={WithdrawForm}
            ></Formik>
            <ToastContainer />
          </div>
          <Divider />
          <Transactions />
        </div>
      )}
    </div>
  );
};

export default Withdraw;
