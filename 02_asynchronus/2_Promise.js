function fetchUser(id) {
  return new Promise((resolver) => {
    setTimeout(() => {
      console.log("wait 1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolver(user);
    }, 1000);
  });
}

module.exports = fetchUser;
