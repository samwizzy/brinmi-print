import axios from "axios";

const baseURL = "http://134.209.64.28:8082/";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  ? "Bearer " + localStorage.getItem("token") : "";
axios.defaults.headers.common["X-Frame-Options"] = "sameorigin";

console.log(axios.defaults.headers.common, "axios.defaults.common");
