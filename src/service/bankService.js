import axios from "axios";
const BASE_URL = "http://localhost:8080";

class BankService {
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
  login(userInfo) {
    return axios.post(BASE_URL + "/auth/login", userInfo);
  }
}
export default new BankService();
