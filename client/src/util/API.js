import axios from "axios";

export default {

  login: function() {
    return axios.post("/api/login");
  },
 
};
