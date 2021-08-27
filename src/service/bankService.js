import axios from "axios";
const BASE_URL = "http://localhost:8080";

function getToken() {
  console.log("Get Toekn got trigerred");
  let auth = localStorage.getItem("auth");
  if (auth) {
    auth = JSON.parse(auth);
    console.log("Auth = ", auth?.token);
  }
  return auth ? `Bearer ${auth.token}` : null;
}

const axiosInstance = axios.create({
  headers: {
    Authorization: getToken(),
    "Content-Type": "application/json",
  },
});
class BankService {
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  deposit(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/deposit", transactionInfo);
  }
  withdraw(transactionInfo) {
    return axiosInstance.post(BASE_URL + "/account/withdraw", transactionInfo);
  }
  addRecipient(recipientInfo) {
    return axiosInstance.post(
      BASE_URL + "/account/addRecipient",
      recipientInfo
    );
  }
  transfer(transerInfo) {
    return axiosInstance.post(BASE_URL + "/account/transfer", transerInfo);
  }
  getAllUsers() {
    return axiosInstance.get(BASE_URL + "/user/all");
  }
}
export default new BankService();
