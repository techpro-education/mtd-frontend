import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import logo from "../images/logo.png";
import "./Header.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import ExitToApp from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../StateProvider";
import AdminMenu from "../menus/AdminMenu";
import UserMenu from "../menus/UserMenu";

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
    paddingLeft: "250px",
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
  const [{ userInfo }, dispatch] = useStateValue();
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
          {!userInfo && (
            <div class="row">
              <div>
                <Link to="/login" className="header__link">
                  <div className="header__option">
                    <span className="header__lineOne">Hello</span>
                    <span className="header__lineTwo">Sign In</span>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/register" className="header__link">
                  <div className="header__option">
                    <span className="header__lineOne">New User</span>
                    <span className="header__lineTwo">Register</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
          {userInfo && userInfo.user && userInfo.user.isAdmin && <AdminMenu />}
          {userInfo && userInfo.user && !userInfo.user.isAdmin && <UserMenu />}
          {userInfo && (
            <div class="row">
              <div class="row mx-auto">
                <div className="header__link">
                  <div className="header__option pl-2">
                    <span className="header__lineOne">Welcome</span>
                    <span className="header__lineTwo">
                      {userInfo.user.firstName} {userInfo.user.lastName}
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/logout" className="header__link mx-auto">
                  <div className="header__option">
                    <span className="header__lineOne">
                      <ExitToApp />
                    </span>
                    <span className="header__lineOne">Logout</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
