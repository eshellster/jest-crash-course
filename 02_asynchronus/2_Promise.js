function fetchUserPromise(id) {
  return new Promise((resolver) => {
    setTimeout(() => {
      // console.log("wait 1 sec.");
      const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
      };
      resolver(user);
    }, 1000);
  });
}
function fetchUserThrowError(id) {
  return new Promise((resolver, reject) => {
    setTimeout(() => {
      // console.log("wait 1 sec.");

      reject("error reason");
    }, 1000);
  });
}

module.exports = { fetchUserPromise, fetchUserThrowError };
