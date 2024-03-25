import axios from "axios";
import Cookies from "js-cookie";
axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common['authorization'] = Cookies.get('jwtToken')

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/', // Your base URL
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Cookies.get('jwtToken') // Set your token here
    }
  });

  export default axiosInstance;