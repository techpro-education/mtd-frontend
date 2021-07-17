import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.png";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // Latest Changes for hover
  button: {
    marginLeft: "50px",
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "black",
      color: "yellow",
    },
  },
  spacer: {
    paddingLeft: "300px",
  },
}));

function Header() {
  const classes = useStyles();
  const showAboutUs = () => {
    const elmnt = document.getElementById("about");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showProduct = () => {
    const elmnt = document.getElementById("product");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showPackage = () => {
    const elmnt = document.getElementById("package");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  const showContactUs = () => {
    const elmnt = document.getElementById("contactus");
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to="/">
            <img className="header__logo" src={logo} alt="" />
          </Link>
          <Typography variant="h6" color="inherit">
            MTD Bank
          </Typography>
          <Button className={classes.button} onClick={showAboutUs}>
            About Us
          </Button>
          <Button className={classes.button} onClick={showProduct}>
            Product
          </Button>
          <Button className={classes.button} onClick={showPackage}>
            Package
          </Button>
          <Button className={classes.button} onClick={showContactUs}>
            Contact Us
          </Button>
          <div className={classes.spacer}></div>
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__lineOne">Hello</span>
              <span className="header__lineTwo">Sign In</span>
            </div>
          </Link>
          <Link to="/register" className="header__link">
            <div className="header__option">
              <span className="header__lineOne">New User</span>
              <span className="header__lineTwo">Register</span>
            </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
