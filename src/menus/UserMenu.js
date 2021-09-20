import React from "react";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useHistory } from "react-router";
import "./Menu.css";

const UserMenu = () => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOnClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const showDashboard = () => {
    history.push("/user");
    setAnchorEl(null);
  };

  const handleDeposit = () => {
    history.push("/deposit");
    setAnchorEl(null);
  };
  const handleWithdrawal = () => {
    history.push("/withdrawal");
    setAnchorEl(null);
  };
  const handleRecipient = () => {
    history.push("/addRecipient");
    setAnchorEl(null);
  };
  const handleTransfer = () => {
    history.push("/transfer");
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div class="mx-auto">
      <Button
        aria-controls="user-menu"
        aria-haspopup="true"
        className="menu"
        onClick={handleOnClick}
      >
        <MenuIcon className="menu" />
        Actions
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={showDashboard}>Dashoard</MenuItem>
        <MenuItem onClick={handleDeposit}>Deposit</MenuItem>
        <MenuItem onClick={handleWithdrawal}>Withdrawal</MenuItem>
        <MenuItem onClick={handleRecipient}>Recipient</MenuItem>
        <MenuItem onClick={handleTransfer}>Transfer</MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
