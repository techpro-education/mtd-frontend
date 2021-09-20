import React from "react";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";
import "./Logout.css";

const Logout = () => {
  const [{ userInfo }, dispatch] = useStateValue();
  const history = useHistory();
  const handleYes = () => {
    localStorage.clear("auth");
    dispatch({
      type: "LOGOUT",
      item: null,
    });
    history.push("/");
  };
  const handleNo = () => {
    history.goBack();
  };
  return (
    <div>
      <fieldset>
        <h1>Are you really want to logout ? </h1>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={handleYes}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="button"
          onClick={handleNo}
        >
          No
        </Button>
      </fieldset>
    </div>
  );
};

export default Logout;