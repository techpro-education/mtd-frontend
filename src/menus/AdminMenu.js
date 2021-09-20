import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import "./Menu.css";

const AdminMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const showDashboard = () => {
    history.push("/admin");
    setAnchorEl(null);
  };

  const showUserMgmt = () => {
    history.push("/userMgmt");
    setAnchorEl(null);
  };

  return (
    <div class="mx-auto">
      <Button
        aria-controls="admin-menu"
        aria-haspopup="true"
        onClick={handleOnClick}
        className="menu"
      >
        <MenuIcon className="menu" />
        Administration
      </Button>
      <Menu
        id="admin-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        close={handleClose}
      >
        <MenuItem onClick={showDashboard}>Dashboard</MenuItem>
        <MenuItem onClick={showUserMgmt}>User Management</MenuItem>
      </Menu>
    </div>
  );
};

export default AdminMenu;
