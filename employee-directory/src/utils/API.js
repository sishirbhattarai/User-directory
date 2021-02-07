import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50";
const APIKEY = "&apikey=trilogy";

export default {
  search: function() {
    return axios.get(BASEURL + APIKEY);
  }
};