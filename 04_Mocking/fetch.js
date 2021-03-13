const got = require("got");

const API_ENDPOINT = "http://jsonplaceholder.typicode.com";

const UserService = {
  findOne(id) {
    return got
      .get(`${API_ENDPOINT}/users/${id}`)
      .then((response) => response.body);
  },
};

module.exports = UserService;
