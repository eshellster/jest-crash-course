const fetchUser = require("./2_Promise");

test("fetch a user by Promise", () => {
  return fetchUser(1).then((user) => {
    expect(user).toEqual({
      id: 1,
      name: "User1",
      email: "1@test.com",
    });
  });
});

test("fetch a user by Async Await", async () => {
  const user = await fetchUser(1);
  expect(user).toEqual({
    id: 1,
    name: "User1",
    email: "1@test.com",
  });
});
