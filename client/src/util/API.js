import axios from "axios";

export default {

  login: function(user) {
    return axios.post("/api/auth/login",user);
  },

  user: function(user){
    console.log("user signup");
    return axios.post("/api/user/signup",user)
  },

  getUser: function(){
    console.log("user");
    return axios.get("/api/user/");
  },
  
  //Registers new organization
  newOrganization: function (organization) {
    return axios.post("/api/organization/signup", organization)
  }
};
