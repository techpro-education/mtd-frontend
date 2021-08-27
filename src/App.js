import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import Register from "./register/Register";
import Deposit from "./deposit/Deposit";
import Withdraw from "./withdraw/Withdraw";
import AddRecipient from "./transfer/AddRecipient";
import Transfer from "./transfer/Transfer";
import Admin from "./admin/Admin";
import UserMgmt from "./admin/UserMgmt";
import User from "./user/User";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/userMgmt">
            <UserMgmt />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/deposit">
            <Deposit />
          </Route>
          <Route path="/withdrawal">
            <Withdraw />
          </Route>
          <Route path="/addRecipient">
            <AddRecipient />
          </Route>
          <Route path="/transfer">
            <Transfer />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
