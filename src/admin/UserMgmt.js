import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import bankService from "../service/bankService";
import UserDetails from "./UserDetails";

const UserMgmt = () => {
  const [users, setUsers] = useState([]);
  const [{ userInfo }] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    bankService.getAllUsers().then((response) => {
      setUsers(response.data.users);
    });
  }, []);
  return (
    <div>
      {!userInfo && history.push("/login")}
      {userInfo &&
        userInfo.user &&
        !userInfo.user.isAdmin &&
        history.push("/login")}
      {userInfo && userInfo.user && userInfo.user.isAdmin && (
        <UserDetails users={users} />
      )}
    </div>
  );
};

export default UserMgmt;
