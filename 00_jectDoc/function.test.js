const func = require("./function");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  it("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });
});

test("Should be null", () => {
  expect(func.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(func.checkValue(0)).toBeFalsy();
});

test("User should be Brad Traversy object", () => {
  expect(func.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});

// Less than and greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
  const usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Working with async data

// Promise
test("Promise - User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return func.fetchUser().then((body) => {
    const data = JSON.parse(body);
    expect(data.name).toEqual("Leanne Graham");
  });
});

// Async Await
test("Async Await - User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const fetch = await func.fetchUser();
  const data = JSON.parse(fetch);
  expect(data.name).toEqual("Leanne Graham");
});
