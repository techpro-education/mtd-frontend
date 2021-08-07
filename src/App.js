import "./App.css";
import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Register from "./register/Register";
import Login from "./login/Login";
import Admin from "./admin/Admin";
import User from "./user/User";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
        <ScrollToTop smooth />
      </div>
    </Router>
  );
}

export default App;
