import axios from "axios";

export default {

  login: function (user) {
    return axios.post("/api/auth/login", user);
  },

  logout: function (user) {
    return axios.post("/api/auth/logout", user);
  },

  user: function (user) {
    return axios.post("/api/user/signup", user)
  },

  getUser: function () {
    return axios.get("/api/user/");
  },

  search: function (filter) {
    return axios.post("/api/search", filter);
  },

  //Registers new organization
  newOrganization: function (organization) {
    return axios.post("/api/organization/signup", organization)
  },

  volunteerSignup: function (volunteer) {
    return axios.post("/api/volunteer/signup", volunteer);
  },
  
  newNeed: function (need) {
    return axios.post("/api/needs/new", need);
  },

  getNeeds: function (orgId) {
    return axios.get("/api/needs/" + orgId);
  },

  removeNeed: function (needId) {
    return axios.delete("/api/needs/" + needId);
  }
};
