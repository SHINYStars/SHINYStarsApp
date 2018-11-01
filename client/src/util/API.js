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

  newOrganization: function (organization) {
    return axios.post("/api/organization/signup", organization)
  },

  getOrganization: function (user) {
    return axios.get("/api/organization/get/" + user._id)
  },

  updateOrganization: function (organization) {
    return axios.put("/api/organization/edit", organization)
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
