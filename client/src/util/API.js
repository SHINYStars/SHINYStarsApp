import axios from "axios";

export default {

  login: function(user) {
    return axios.post("/api/login",user);
  },

  user: function(user){
    return axios.post("/api/signup",user)
  }
 
};
