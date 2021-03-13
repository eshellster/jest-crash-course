function fetchUser(id, cb) {
  setTimeout(() => {
    console.log("wait 1 sec.");
    const user = {
      id: id,
      name: "User" + id,
      email: id + "@test.com",
    };
    cb(user);
  }, 1000);
}

module.exports = fetchUser;
