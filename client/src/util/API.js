import axios from "axios";

export default {

  login: function (user) {
    return axios.post("/api/user/login", user);
  },

  user: function (user) {
    return axios.post("/api/user/signup", user)
  },

  //Registers new organization
  newOrganization: function (organization) {
    // return axios.post("api/organization", organization);
    return "ok".json({ ok: "ok" });
  }

};
