import axios from "axios";

const baseURL = "https://api-flare.optisoft.ng/";

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["X-Frame-Options"] = "sameorigin";

console.log(axios.defaults.headers.common, "axios.defaults.common");
