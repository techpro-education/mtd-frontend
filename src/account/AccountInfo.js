import React from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalance from "@material-ui/icons/AccountBalance";

import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import styles from "../styles/dashboardStyle.js";
const useStyles = makeStyles(styles);

const AccountInfo = () => {
  const classes = useStyles();
  const [{ userInfo }, dispatch] = useStateValue();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="info" icon>
              <CardIcon color="info">
                <AccountBalance />
              </CardIcon>
              <p className={classes.cardCategory}>Account Number</p>
              <h3 className={classes.cardTitle}>
                {userInfo.user.accountNumber}
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <AccountBalanceWalletIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Balance</p>
              <h3 className={classes.cardTitle}>
                $ {userInfo.user.accountBalance}
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default AccountInfo;
