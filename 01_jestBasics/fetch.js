const got = require("got");

const func = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },
  fetchUser: () =>
    got("http://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.body)
      .catch((err) => "error"),
};

module.exports = func;
