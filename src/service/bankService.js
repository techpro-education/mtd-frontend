import axios from "axios";
const BASE_URL = "http://localhost:8081";

class BankService {
  register(userInfo) {
    return axios.post(BASE_URL + "/auth/register", userInfo);
  }
}
export default new BankService();
