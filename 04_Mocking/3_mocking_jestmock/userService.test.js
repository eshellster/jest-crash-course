import got from "got";
const userService = require("../fetch");

jest.mock("got");

test("findOne returns what got get returns", async () => {
  got.get.mockResolvedValue({
    body: {
      id: 1,
      name: "Dale Seo",
    },
  });
  const fetch = await userService.findOne(1);
  const user = fetch;
  expect(user).toHaveProperty("id", 1);
  expect(user).toHaveProperty("name", "Dale Seo");
});
