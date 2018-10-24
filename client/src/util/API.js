import axios from "axios";

export default {

  login: function(user) {
    return axios.post("/api/user/login",user);
  },

  user: function(user){
    return axios.post("/api/user/signup",user)
  }
 
};
