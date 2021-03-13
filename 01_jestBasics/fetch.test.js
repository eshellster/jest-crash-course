const func = require("./fetch");

// Working with async data

// Promise
test("Promise - User fetched name should be Leanne Graham", () => {
  return func.fetchUser().then((body) => {
    const data = JSON.parse(body);
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("Async Await - User fetched name should be Leanne Graham", async () => {
  const fetch = await func.fetchUser();
  const data = JSON.parse(fetch);
  expect(data.name).toEqual("Leanne Graham");
});
